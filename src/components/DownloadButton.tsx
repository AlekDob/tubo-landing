import { DOWNLOAD_URL } from "@/lib/site";

const SIZES = {
  sm: "h-9 px-4 text-sm gap-1.5",
  lg: "h-12 px-6 text-[15px] gap-2",
} as const;

// Every download CTA points to the same DMG, so the link lives only here.
export function DownloadButton({ size = "lg", label = "Download for macOS" }: {
  size?: keyof typeof SIZES;
  label?: string;
}) {
  return (
    <a
      href={DOWNLOAD_URL}
      download
      className={`inline-flex items-center justify-center rounded-full bg-accent font-medium text-white shadow-[0_8px_30px_-8px_rgb(255_68_56/0.6)] transition hover:brightness-110 active:scale-[0.98] ${SIZES[size]}`}
    >
      <ArrowDownIcon />
      {label}
    </a>
  );
}

function ArrowDownIcon() {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M8 2.5v9M4 8l4 4 4-4M3 14h10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
