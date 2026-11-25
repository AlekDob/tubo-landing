import Link from "next/link";
import { useId } from "react";

// Tubo "Loop" mark: a glass tube bent into the "o" of Tubo, half filled with warm red light.
// Source of truth: public/logo.svg (variants in design/logo/). Inline here so it inherits size and needs no request.
export function LogoMark({ className = "size-7" }: { className?: string }) {
  // Navbar and footer both render the mark: unique ids keep their gradients/clips from colliding.
  const id = useId();
  return (
    <svg aria-hidden viewBox="0 0 64 64" className={className}>
      <defs>
        <linearGradient id={`${id}l`} x1="0" y1="30" x2="0" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ff7a52" />
          <stop offset="1" stopColor="#e5281d" />
        </linearGradient>
        <clipPath id={`${id}c`}><polygon points="0 27 64 39 64 64 0 64" /></clipPath>
      </defs>
      <circle cx="32" cy="32" r="19" fill="none" stroke="#fff" strokeOpacity=".16" strokeWidth="11" />
      <circle cx="32" cy="32" r="19" fill="none" stroke={`url(#${id}l)`} strokeWidth="11" clipPath={`url(#${id}c)`} />
      <circle cx="32" cy="32" r="24.5" fill="none" stroke="#fff" strokeOpacity=".22" />
      <circle cx="32" cy="32" r="13.5" fill="none" stroke="#fff" strokeOpacity=".12" />
      <path d="M16.4 24.6a17.5 17.5 0 0 1 8.2-8.2" fill="none" stroke="#fff" strokeOpacity=".7" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

// Mark + name, used in navbar and footer. The mark turns slowly on hover (CSS, see .logo-mark).
export function Wordmark() {
  return (
    <Link href="/" className="group flex items-center gap-2 text-xl font-semibold tracking-tight" aria-label="Tubo home">
      <LogoMark className="logo-mark size-7" />
      Tubo
    </Link>
  );
}
