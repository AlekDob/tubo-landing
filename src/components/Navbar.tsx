"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#download", label: "Download" },
  { href: "https://github.com/AleKDob/tubo", label: "GitHub" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />
        <NavLinks />
      </div>
    </nav>
  );
}

function Logo() {
  return (
    <a href="#" className="text-xl font-bold tracking-tight">
      Tub<span className="text-[#FF0033]">o</span>
    </a>
  );
}

function NavLinks() {
  return (
    <div className="flex items-center gap-8">
      {NAV_LINKS.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className="text-sm text-white/70 hover:text-white transition-colors"
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
