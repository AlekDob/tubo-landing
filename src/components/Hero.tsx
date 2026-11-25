import { REQUIREMENTS } from "@/lib/site";
import { DownloadButton } from "./DownloadButton";
import { HeroImage, HeroParallaxCopy } from "./HeroParallax";

// Staggers the CSS hero-in animation via a custom property.
const delay = (seconds: number) => ({ "--delay": `${seconds}s` }) as React.CSSProperties;

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-32 sm:px-6 md:pt-40">
      <HeroParallaxCopy>
        <HeroCopy />
        <HeroActions />
      </HeroParallaxCopy>
      <HeroImage />
    </section>
  );
}

// Each word rises out of its own mask, one after another (CSS only: runs even if JS fails).
function RisingWords({ text, start }: { text: string; start: number }) {
  return text.split(" ").map((word, i) => (
    <span key={i}>
      <span className="word-mask">
        <span className="word-rise" style={delay(start + i * 0.07)}>{word}</span>
      </span>{" "}
    </span>
  ));
}

function HeroCopy() {
  return (
    <>
      <p className="hero-in text-sm text-muted">Free · Native · For macOS</p>
      <h1 className="mt-5 text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-7xl md:text-8xl">
        <RisingWords text="YouTube, at home" start={0.1} />
        <span className="block font-serif font-normal italic tracking-[-0.01em] text-accent">
          <RisingWords text="on your Mac." start={0.34} />
        </span>
      </h1>
      <p className="hero-in mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted" style={delay(0.6)}>
        Tubo is a small, native app for YouTube and YouTube Music. Tabs like a
        browser, Picture-in-Picture that just works, and a play key that finally
        does what you expect.
      </p>
    </>
  );
}

function HeroActions() {
  return (
    <div className="hero-in mt-10 flex flex-col items-center gap-4" style={delay(0.72)}>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <DownloadButton location="hero" />
        <a href="#features" className="btn-ghost inline-flex h-12 items-center rounded-full border border-line px-6 text-[15px] text-foreground transition hover:border-white/25 hover:bg-white/[0.04]">
          See what it does
        </a>
      </div>
      <p className="text-xs text-faint">{REQUIREMENTS}</p>
    </div>
  );
}
