const FOOTER_LINKS = [
  { href: "https://github.com/AleKDob/tubo", label: "GitHub" },
  { href: "#download", label: "Download" },
  { href: "#", label: "Privacy" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <FooterLinks />
        <BuiltBy />
        <Disclaimer />
      </div>
    </footer>
  );
}

function FooterLinks() {
  return (
    <div className="flex items-center gap-8">
      {FOOTER_LINKS.map(({ href, label }) => (
        <a
          key={label}
          href={href}
          className="text-sm text-white/40 hover:text-white/70 transition-colors"
          {...(href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {label}
        </a>
      ))}
    </div>
  );
}

function BuiltBy() {
  return (
    <p className="text-sm text-white/30">
      Built with ❤️ by <a href="https://alekdob.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors underline underline-offset-2">Alek Dobrohotov</a>
    </p>
  );
}

function Disclaimer() {
  return (
    <p className="text-xs text-white/20">
      Tubo is not affiliated with YouTube or Google.
    </p>
  );
}
