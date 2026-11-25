import "server-only";
import { resendPost } from "@/lib/resend";

// Tubo colours from src/app/globals.css, flattened to hex: email clients ignore CSS variables.
const BG = "#0b0a0a";
const CARD = "#141212";
const BORDER = "#2a2625";
const TEXT = "#f4f1ee";
const MUTED = "#a39d98";
const ACCENT = "#ff4438";

const NOTIFY_TO = "gmail@alekdob.com";
const FONT = "-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif";

export interface Notification {
  eyebrow: string;
  title: string;
  subject: string;
  rows: Array<[string, string]>;
}

/** Rome time, because that is where the person reading this lives. */
export function formatWhen(when: Date): string {
  return new Intl.DateTimeFormat("it-IT", { dateStyle: "medium", timeStyle: "short", timeZone: "Europe/Rome" }).format(when);
}

// Values come from visitors (the email above all): escape before they touch HTML.
function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}

function rowHtml([label, value]: [string, string]): string {
  const cell = `padding:10px 0;border-bottom:1px solid ${BORDER};font-size:13px;`;
  return `<tr><td style="${cell}color:${MUTED};">${label}</td><td style="${cell}color:${TEXT};text-align:right;font-weight:600;">${escapeHtml(value)}</td></tr>`;
}

// bgcolor attributes paint the whole window in Gmail, which drops most <body> styling.
function html(n: Notification): string {
  return `<!doctype html><html lang="it"><body style="margin:0;padding:0;background:${BG};" bgcolor="${BG}">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${BG}"><tr><td align="center" style="padding:56px 16px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:420px;background:${CARD};border:1px solid ${BORDER};border-radius:16px;font-family:${FONT};">
    <tr><td style="padding:28px 28px 0;">
      <p style="margin:0;color:${TEXT};font-size:18px;font-weight:700;letter-spacing:-.02em;">Tubo</p>
      <p style="margin:18px 0 0;color:${ACCENT};font-size:11px;letter-spacing:.12em;text-transform:uppercase;font-weight:700;">${n.eyebrow}</p>
      <h1 style="margin:8px 0 0;color:${TEXT};font-size:22px;font-weight:600;line-height:1.3;">${n.title}</h1>
    </td></tr>
    <tr><td style="padding:20px 28px 28px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${n.rows.map(rowHtml).join("")}</table></td></tr>
  </table>
  <p style="margin:16px 0 0;color:${MUTED};font-size:11px;font-family:${FONT};">tubo.you</p>
</td></tr></table></body></html>`;
}

function text(n: Notification): string {
  return [n.title, "", ...n.rows.map(([l, v]) => `${l}: ${v}`)].join("\n");
}

/** Notification to Alek. Returns false (no throw) when Resend is unset or fails. */
export async function sendNotification(n: Notification): Promise<boolean> {
  const from = process.env.RESEND_FROM || "Tubo <noreply@studiofuturo.ai>";
  const res = await resendPost("/emails", { from, to: NOTIFY_TO, subject: n.subject, html: html(n), text: text(n) });
  if (res && !res.ok) console.error("Resend email error:", res.status, await res.text());
  return Boolean(res?.ok);
}
