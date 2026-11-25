import { NextResponse, type NextRequest } from "next/server";
import { formatWhen, sendNotification } from "@/emails/notify";
import { saveContact, type SaveResult } from "@/lib/resend";
import { isEmail, isPlatform, type SubscribePayload } from "@/lib/subscribe";

const LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;
// ponytail: in-memory, per serverless instance; it stops casual loops, not a botnet.
// Move to Upstash/KV if the inbox ever gets flooded.
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > LIMIT;
}

// Trust boundary: nothing from the browser is used before it passes these checks.
function parsePayload(body: unknown): SubscribePayload | null {
  if (!body || typeof body !== "object") return null;
  const { email, platform, newsletter, website } = body as Record<string, unknown>;
  const clean = typeof email === "string" ? email.trim().toLowerCase() : null;
  if (!isEmail(clean) || !isPlatform(platform)) return null;
  return { email: clean, platform, newsletter: newsletter === true, website: typeof website === "string" ? website : "" };
}

const PLATFORM_NAME = { macos: "macOS", linux: "Linux", windows: "Windows" } as const;
const SAVE_LABEL: Record<SaveResult, string> = { added: "Aggiunto", skipped: "Non salvato (niente consenso)", failed: "ERRORE", "not-configured": "Non configurato" };

function notify(input: SubscribePayload, saved: SaveResult, country: string) {
  const waitlist = input.platform !== "macos";
  const name = PLATFORM_NAME[input.platform];
  return sendNotification({
    eyebrow: waitlist ? "Lista d'attesa" : "Nuovo download",
    title: waitlist ? `Qualcuno vuole Tubo per ${name}.` : "Qualcuno ha scaricato Tubo.",
    subject: `${waitlist ? "Lista d'attesa" : "Download"} · ${input.email} · ${country}`,
    rows: [
      ["Email", input.email],
      ["Piattaforma", waitlist ? `${name} (lista d'attesa)` : name],
      ["Newsletter", input.newsletter ? "Sì" : "No"],
      ["Resend", SAVE_LABEL[saved]],
      ["Paese", country],
      ["Quando", formatWhen(new Date())],
    ],
  });
}

export async function POST(req: NextRequest) {
  const input = parsePayload(await req.json().catch(() => null));
  if (!input) return NextResponse.json({ error: "invalid" }, { status: 400 });
  // Bots get a fake success, so they have no signal to adapt to.
  if (input.website) return NextResponse.json({ ok: true });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) return NextResponse.json({ error: "rate-limited" }, { status: 429 });

  const saved = await saveContact(input);
  const notified = await notify(input, saved, req.headers.get("x-vercel-ip-country") ?? "sconosciuto");
  return NextResponse.json({ ok: saved !== "failed", saved, notified });
}
