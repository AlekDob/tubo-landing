"use client";

import { useState } from "react";
import Link from "next/link";
import { useOpenPanel } from "@openpanel/nextjs";
import { DOWNLOAD_URL } from "@/lib/site";
import type { Platform, SubscribePayload } from "@/lib/subscribe";
import { ArrowDownIcon, DOWNLOAD_BUTTON_CLASS } from "./DownloadButton";

type Track = ReturnType<typeof useOpenPanel>["track"];
type Done = { platform: Platform; newsletter: boolean } | null;

const COPY = {
  macos: { title: "Download Tubo", body: "Free, for macOS 13 Ventura or later." },
  linux: { title: "Tubo for Linux is on the way", body: "Leave your email and we'll write to you once it's ready." },
  windows: { title: "Tubo for Windows is on the way", body: "Leave your email and we'll write to you once it's ready." },
} as const;

const OPTIONS: Array<{ value: Platform; label: string; soon?: boolean }> = [
  { value: "macos", label: "macOS" },
  { value: "linux", label: "Linux", soon: true },
  { value: "windows", label: "Windows", soon: true },
];

const INPUT_CLASS =
  "h-12 w-full rounded-xl border border-line bg-background px-4 text-[15px] text-foreground placeholder:text-faint transition focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/25";

// Linux and Windows visitors land straight on their waitlist: that is the question they came with.
function detectPlatform(): Platform {
  const ua = navigator.userAgent;
  if (ua.includes("Windows")) return "windows";
  if (ua.includes("Linux") && !ua.includes("Android")) return "linux";
  return "macos";
}

// keepalive: the request survives even if the page navigates away right after.
async function postSubscribe(payload: SubscribePayload): Promise<boolean> {
  try {
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    });
    return res.ok;
  } catch {
    return false;
  }
}

function readForm(form: HTMLFormElement, platform: Platform): SubscribePayload {
  const data = new FormData(form);
  return {
    email: String(data.get("email") ?? ""),
    platform,
    newsletter: data.get("newsletter") === "on",
    website: String(data.get("website") ?? ""),
  };
}

// Programmatic click on a download link: the browser saves the DMG and the page stays put.
function startDownload(track: Track, withEmail: boolean) {
  track("download_started", { with_email: withEmail });
  const a = document.createElement("a");
  a.href = DOWNLOAD_URL;
  a.download = "";
  a.click();
}

export function DownloadPanel({ onClose }: { onClose: () => void }) {
  const [platform, setPlatform] = useState<Platform>(detectPlatform);
  const [done, setDone] = useState<Done>(null);
  return (
    <div className="relative p-6 sm:p-8">
      <CloseButton onClose={onClose} />
      {done ? (
        <DoneView {...done} />
      ) : (
        <>
          <PlatformPicker value={platform} onChange={setPlatform} />
          <Heading title={COPY[platform].title} body={COPY[platform].body} />
          {platform === "macos" ? <MacForm onDone={setDone} /> : <WaitlistForm platform={platform} onDone={setDone} />}
        </>
      )}
    </div>
  );
}

function MacForm({ onDone }: { onDone: (d: Done) => void }) {
  const { track } = useOpenPanel();
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const payload = readForm(e.currentTarget, "macos");
    // Fire and forget: the download never waits on our API or on Resend.
    void postSubscribe(payload);
    track("email_submitted", { platform: "macos", newsletter: payload.newsletter });
    startDownload(track, true);
    onDone({ platform: "macos", newsletter: payload.newsletter });
  }
  return (
    <form onSubmit={submit} className="mt-6 space-y-4">
      <EmailField />
      <label className="flex cursor-pointer items-start gap-3 text-sm leading-snug text-muted">
        <input type="checkbox" name="newsletter" className="mt-0.5 size-4 shrink-0 accent-[var(--accent)]" />
        <span>
          Send me Tubo news and new versions by email. Unsubscribe anytime.{" "}
          <Link href="/privacy" className="underline underline-offset-4 hover:text-foreground">Privacy</Link>
        </span>
      </label>
      <button type="submit" className={`${DOWNLOAD_BUTTON_CLASS} h-12 w-full gap-2 px-6 text-[15px]`}>
        <ArrowDownIcon />
        Download for macOS
      </button>
      {/* The plain link already downloads; we only record that it happened without an email. */}
      <JustDownload onClick={() => { track("download_started", { with_email: false }); onDone({ platform: "macos", newsletter: false }); }} />
    </form>
  );
}

function JustDownload({ onClick }: { onClick: () => void }) {
  return (
    <p className="text-center">
      <a href={DOWNLOAD_URL} download onClick={onClick} className="text-xs text-faint underline-offset-4 transition hover:text-muted hover:underline">
        Just download
      </a>
    </p>
  );
}

function WaitlistForm({ platform, onDone }: { platform: Exclude<Platform, "macos">; onDone: (d: Done) => void }) {
  const { track } = useOpenPanel();
  const [state, setState] = useState<"idle" | "sending" | "error">("idle");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    // Here we do wait: joining the list is the whole point, so a failure must be visible.
    if (!(await postSubscribe(readForm(e.currentTarget, platform)))) return setState("error");
    track("email_submitted", { platform, newsletter: false });
    track(`${platform}_waitlist_joined`);
    onDone({ platform, newsletter: false });
  }
  return (
    <form onSubmit={submit} className="mt-6 space-y-4">
      <EmailField />
      <button type="submit" disabled={state === "sending"} className={`${DOWNLOAD_BUTTON_CLASS} h-12 w-full px-6 text-[15px]`}>
        {state === "sending" ? "Saving…" : "Notify me"}
      </button>
      {state === "error" && <p role="alert" className="text-center text-sm text-accent">That didn&apos;t work. Try again in a minute.</p>}
      <p className="text-center text-xs text-faint">One email when it&apos;s ready. Unsubscribe anytime.</p>
    </form>
  );
}

function EmailField() {
  return (
    <div>
      <label htmlFor="download-email" className="mb-2 block text-sm font-medium">Email</label>
      <input id="download-email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={INPUT_CLASS} />
      {/* Honeypot: off-screen and skipped by keyboard and screen readers; bots fill every field. */}
      <div aria-hidden className="absolute -left-[9999px] size-px overflow-hidden">
        <input name="website" tabIndex={-1} autoComplete="off" />
      </div>
    </div>
  );
}

function PlatformPicker({ value, onChange }: { value: Platform; onChange: (p: Platform) => void }) {
  return (
    <fieldset className="flex gap-1 rounded-full border border-line bg-background mr-11 p-1">
      <legend className="sr-only">Platform</legend>
      {OPTIONS.map((o) => (
        <label key={o.value} className="relative flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-full px-2 py-2 text-sm sm:px-3 text-muted transition hover:text-foreground has-[:checked]:bg-white/[0.08] has-[:checked]:text-foreground has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-accent/50">
          <input type="radio" name="platform" value={o.value} checked={value === o.value} onChange={() => onChange(o.value)} className="sr-only" />
          {o.label}
          {/* Hidden on phones to keep the three tabs on one line; the heading says it anyway. */}
          {o.soon && <span className="hidden text-[10px] uppercase tracking-wider text-faint sm:inline">soon</span>}
        </label>
      ))}
    </fieldset>
  );
}

function Heading({ title, body }: { title: string; body: string }) {
  return (
    <div className="mt-7">
      <h2 id="download-title" className="text-2xl font-semibold tracking-[-0.02em]">{title}</h2>
      <p className="mt-2 text-[15px] text-muted">{body}</p>
    </div>
  );
}

function DoneView({ platform, newsletter }: NonNullable<Done>) {
  if (platform !== "macos") {
    const name = platform === "linux" ? "Linux" : "Windows";
    return <Heading title="You're on the list." body={`We'll email you when Tubo for ${name} is ready.`} />;
  }
  return (
    <div role="status">
      <Heading title="Your download has started." body="Open Tubo.dmg and drag Tubo into Applications." />
      {newsletter && <p className="mt-3 text-[15px] text-muted">Thanks. We&apos;ll email you when a new version is out.</p>}
      <p className="mt-6 text-sm text-faint">
        Didn&apos;t start? <a href={DOWNLOAD_URL} download className="text-foreground underline underline-offset-4">Download again</a>
      </p>
    </div>
  );
}

function CloseButton({ onClose }: { onClose: () => void }) {
  return (
    <button type="button" onClick={onClose} aria-label="Close" className="absolute right-6 top-7 grid size-9 place-items-center rounded-full text-muted transition hover:bg-white/[0.06] hover:text-foreground sm:right-8 sm:top-9">
      <svg aria-hidden viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M4 4l8 8M12 4l-8 8" />
      </svg>
    </button>
  );
}
