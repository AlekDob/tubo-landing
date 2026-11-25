"use client";

import { DOWNLOAD_URL } from "@/lib/site";
import { Magnetic } from "./Magnetic";
import { useOpenDownloadModal } from "./DownloadModal";

const SIZES = {
  sm: "h-9 px-4 text-sm gap-1.5",
  lg: "h-12 px-6 text-[15px] gap-2",
} as const;

/** The red pill look, shared with the submit button inside the download modal. */
export const DOWNLOAD_BUTTON_CLASS =
  "btn-download relative inline-flex items-center justify-center rounded-full bg-accent font-medium text-white shadow-[0_8px_30px_-8px_rgb(255_68_56/0.6)] transition hover:brightness-110 active:scale-[0.98] disabled:opacity-60";

export type DownloadLocation = "navbar" | "hero" | "cta";

// Every download CTA opens the same modal (email first, download right after).
// It stays a real <a href download>: without JS the DMG still downloads directly.
// data-track/data-location are read by OpenPanel's trackAttributes: event `download_click`
// with { location } fires with no client JS of our own.
export function DownloadButton({ size = "lg", label = "Download for macOS", location }: {
  size?: keyof typeof SIZES;
  label?: string;
  location: DownloadLocation;
}) {
  const openModal = useOpenDownloadModal();
  const link = (
    <a
      href={DOWNLOAD_URL}
      download
      data-track="download_click"
      data-location={location}
      aria-haspopup="dialog"
      onClick={(e) => {
        e.preventDefault();
        openModal(location);
      }}
      className={`${DOWNLOAD_BUTTON_CLASS} ${SIZES[size]}`}
    >
      <span aria-hidden className="btn-sheen" />
      <ArrowDownIcon />
      {label}
    </a>
  );
  // Small navbar button stays still: a moving target in a sticky bar feels jittery.
  return size === "lg" ? <Magnetic>{link}</Magnetic> : link;
}

export function ArrowDownIcon() {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className="btn-arrow size-4" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M8 2.5v9M4 8l4 4 4-4M3 14h10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
