import { SectionLabel } from "./SectionLabel";
import { SpotlightList } from "./SpotlightList";

const DETAILS = [
  { title: "Liquid Glass", body: "Built for macOS 26 Tahoe. On older versions it falls back to a clean frosted look." },
  { title: "Full screen, in the window", body: "Fill the window instead of the whole display, and keep your other apps in reach." },
  { title: "Always on top", body: "Pin the player above every other window while you work or chat." },
  { title: "Free, really", body: "No subscription, no trial, no sign-up. Download it and keep it." },
  { title: "Native and light", body: "Swift and WebKit. No Electron, no extra runtime eating your battery." },
  { title: "Nothing collected", body: "No analytics, no tracking, no account. Your viewing stays between you and YouTube." },
] as const;

// Not shipped yet: shown as "coming soon", never as available.
const COMING_SOON = ["SponsorBlock", "Preferences", "Mini player"] as const;

export function FeatureGrid() {
  return (
    <section className="border-t border-line px-4 py-28 sm:px-6 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="reveal">
          <SectionLabel>The details</SectionLabel>
          <h2 className="mt-6 text-4xl font-medium tracking-[-0.03em] md:text-5xl">Small things, done properly.</h2>
        </div>
        <SpotlightList className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-3">
          {DETAILS.map((d, i) => (
            <DetailItem key={d.title} index={i + 1} {...d} />
          ))}
        </SpotlightList>
        <ComingSoon />
      </div>
    </section>
  );
}

function DetailItem({ index, title, body }: { index: number; title: string; body: string }) {
  return (
    <li className="spotlight reveal group relative bg-background p-8 transition-colors hover:bg-surface" style={{ "--stagger": `${(index % 3) * 5}%` } as React.CSSProperties}>
      <span className="font-mono text-xs text-faint transition-colors group-hover:text-accent">{String(index).padStart(2, "0")}</span>
      <h3 className="mt-6 text-lg font-medium transition-transform duration-500 group-hover:translate-x-1">{title}</h3>
      <p className="mt-2 leading-relaxed text-muted">{body}</p>
    </li>
  );
}

function ComingSoon() {
  return (
    <div className="reveal mt-10 flex flex-wrap items-center gap-3 text-sm">
      <span className="text-faint">Coming soon</span>
      {COMING_SOON.map((item) => (
        <span key={item} className="rounded-full border border-dashed border-white/15 px-3 py-1 text-muted">
          {item}
        </span>
      ))}
    </div>
  );
}
