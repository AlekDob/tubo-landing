import Image from "next/image";
import heroDesk from "@/assets/hero-desk.webp";
import { REQUIREMENTS } from "@/lib/site";
import { DownloadButton } from "./DownloadButton";

// Staggers the CSS hero-in animation via a custom property.
const delay = (seconds: number) => ({ "--delay": `${seconds}s` }) as React.CSSProperties;

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-32 sm:px-6 md:pt-40">
      <div className="mx-auto max-w-4xl text-center">
        <HeroCopy />
        <HeroActions />
      </div>
      <HeroImage />
    </section>
  );
}

function HeroCopy() {
  return (
    <>
      <p className="hero-in text-sm text-muted">Free · Native · For macOS</p>
      <h1 className="hero-in mt-5 text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-7xl md:text-8xl" style={delay(0.08)}>
        YouTube, at home
        <span className="block font-serif font-normal italic tracking-[-0.01em] text-accent">on your Mac.</span>
      </h1>
      <p className="hero-in mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted" style={delay(0.16)}>
        Tubo is a small, native app for YouTube and YouTube Music. Tabs like a
        browser, Picture-in-Picture that just works, and a play key that finally
        does what you expect.
      </p>
    </>
  );
}

function HeroActions() {
  return (
    <div className="hero-in mt-10 flex flex-col items-center gap-4" style={delay(0.24)}>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <DownloadButton />
        <a href="#features" className="inline-flex h-12 items-center rounded-full border border-line px-6 text-[15px] text-foreground transition hover:border-white/25">
          See what it does
        </a>
      </div>
      <p className="text-xs text-faint">{REQUIREMENTS}</p>
    </div>
  );
}

// Real app screenshot composited onto a generated desk photo, so the UI shown is the actual app.
function HeroImage() {
  return (
    <div className="hero-in relative mx-auto mt-16 max-w-6xl md:mt-20" style={delay(0.36)}>
      <div className="aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-line sm:aspect-auto md:rounded-3xl">
        <Image
          src={heroDesk}
          alt="Tubo open on a MacBook on a desk at night, playing a YouTube video in a tab"
          placeholder="blur"
          preload
          sizes="(min-width: 1152px) 1152px, 100vw"
          className="h-full w-full object-cover sm:h-auto"
        />
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
