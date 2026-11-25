import { AUTHOR } from "@/lib/site";
import { Wordmark } from "./Logo";

const FOOTER_LINKS = [
  { href: "/#features", label: "Features" },
  { href: "/#download", label: "Download" },
  { href: "/privacy", label: "Privacy" },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Wordmark />
          <p className="mt-3 text-sm text-faint">
            Made by{" "}
            <a href={AUTHOR.url} target="_blank" rel="noopener noreferrer" className="text-muted underline-offset-4 hover:underline">
              {AUTHOR.name}
            </a>
          </p>
        </div>
        <nav className="flex gap-8">
          {FOOTER_LINKS.map(({ href, label }) => (
            <a key={label} href={href} className="text-sm text-muted transition-colors hover:text-foreground">{label}</a>
          ))}
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs leading-relaxed text-faint">
        Tubo is an independent app. It is not affiliated with, endorsed or
        sponsored by YouTube or Google. YouTube and YouTube Music are trademarks of
        Google LLC.
      </p>
    </footer>
  );
}
