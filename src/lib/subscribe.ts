// Shared by the download modal (client) and /api/subscribe (server), so both agree on the payload.
export const PLATFORMS = ["macos", "linux", "windows"] as const;
export type Platform = (typeof PLATFORMS)[number];

export interface SubscribePayload {
  email: string;
  platform: Platform;
  newsletter: boolean;
  /** Honeypot: hidden from people, bots fill it. Any value means "drop silently". */
  website?: string;
}

// Pragmatic check (something@domain.tld), not RFC 5322: Resend rejects the rest anyway.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isEmail(value: unknown): value is string {
  return typeof value === "string" && value.length <= 254 && EMAIL_RE.test(value);
}

export function isPlatform(value: unknown): value is Platform {
  return PLATFORMS.includes(value as Platform);
}
