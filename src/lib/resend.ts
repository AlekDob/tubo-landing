import "server-only";
import type { Platform, SubscribePayload } from "./subscribe";

// Plain fetch instead of the `resend` SDK: two endpoints don't justify a dependency.
const API = "https://api.resend.com";

export type SaveResult = "added" | "skipped" | "failed" | "not-configured";

// One Resend segment per list. Being in a segment IS the consent for that list:
// "Tubo" = newsletter opt-in, the waitlists = "tell me when it's ready" for that platform.
function segmentFor(platform: Platform): string | undefined {
  if (platform === "linux") return process.env.RESEND_TUBO_LINUX_SEGMENT_ID;
  if (platform === "windows") return process.env.RESEND_TUBO_WINDOWS_SEGMENT_ID;
  return process.env.RESEND_TUBO_SEGMENT_ID;
}

export async function resendPost(path: string, body: unknown): Promise<Response | null> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return fetch(`${API}${path}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

function contactProperties({ platform, newsletter }: SubscribePayload) {
  const today = new Date().toISOString().slice(0, 10);
  // Only ever write newsletter=true: a waitlist signup must not flip an existing subscriber to false.
  return { source: "tubo.you", platform, signup_date: today, ...(newsletter && { newsletter: "true" }) };
}

/**
 * Adds or updates the contact. POST /contacts is an upsert in Resend: properties merge,
 * segments add up, and `unsubscribed` is overwritten (a fresh opt-in re-subscribes, by design).
 */
export async function saveContact(input: SubscribePayload): Promise<SaveResult> {
  // No checkbox on macOS = no consent: the email is not stored in any list.
  if (input.platform === "macos" && !input.newsletter) return "skipped";
  const segment = segmentFor(input.platform);
  const res = await resendPost("/contacts", {
    email: input.email,
    unsubscribed: false,
    properties: contactProperties(input),
    segments: segment ? [{ id: segment }] : [],
  });
  if (!res) return "not-configured";
  if (!res.ok) console.error("Resend contact error:", res.status, await res.text());
  return res.ok ? "added" : "failed";
}
