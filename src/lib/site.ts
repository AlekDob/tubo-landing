// Single source of truth for URLs and release info used by metadata, SEO routes and UI.
export const SITE_URL = "https://tubo.you";
export const SITE_NAME = "Tubo";

// The signed + notarized DMG is copied here by the release flow (not committed by hand).
export const DOWNLOAD_URL = "/download/Tubo.dmg";
export const APP_VERSION = "0.2.0";
export const REQUIREMENTS = `Requires macOS 13 Ventura or later · Apple Silicon & Intel · v${APP_VERSION}`;

export const AUTHOR = { name: "Alek Dobrohotov", url: "https://alekdob.com" } as const;
