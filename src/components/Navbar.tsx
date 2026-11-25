import { DownloadButton } from "./DownloadButton";
import { Wordmark } from "./Logo";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#download", label: "Download" },
] as const;

// Server component: the "solid on scroll" effect is a CSS scroll timeline (.nav-shell).
export function Navbar() {
  return (
    <header className="nav-shell fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Wordmark />
        <div className="flex items-center gap-6">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="hidden text-sm text-muted transition-colors hover:text-foreground sm:block">
              {label}
            </a>
          ))}
          <DownloadButton size="sm" label="Download" location="navbar" />
        </div>
      </nav>
    </header>
  );
}
