// Single source of truth for URLs and release info used by metadata, SEO routes and UI.
// www is the primary domain: Vercel redirects tubo.you -> www.tubo.you, so canonical must match.
export const SITE_URL = "https://www.tubo.you";
export const SITE_NAME = "Tubo";

// The signed + notarized DMG is copied here by the release flow (not committed by hand).
export const DOWNLOAD_URL = "/download/Tubo.dmg";
export const APP_VERSION = "0.2.0";
export const REQUIREMENTS = `Requires macOS 13 Ventura or later · Apple Silicon & Intel · v${APP_VERSION}`;

export const AUTHOR = { name: "Alek Dobrohotov", url: "https://alekdob.com" } as const;

// OpenPanel analytics: self-hosted in the EU, cookieless. The clientId is a write-only web
// client (no secret), so the public default is safe; the env var lets Vercel override it.
export const OPENPANEL = {
  apiUrl: "https://analytics.studiofuturo.ai/api",
  // Load the SDK from our own instance, so no request goes to a third-party CDN.
  scriptUrl: "https://analytics.studiofuturo.ai/op1.js",
  clientId: process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID || "e537f5e4-f542-4fcb-b7fd-048fab9959ac",
} as const;
