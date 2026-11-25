import { REQUIREMENTS } from "@/lib/site";
import { DownloadButton } from "./DownloadButton";

const MACOS_VERSIONS = ["Ventura", "Sonoma", "Sequoia", "Tahoe"] as const;

export function Download() {
  return (
    <section id="download" className="relative scroll-mt-20 overflow-hidden px-4 py-32 sm:px-6 md:py-44">
      <Glow />
      <div className="reveal relative mx-auto max-w-3xl text-center">
        <h2 className="text-5xl font-semibold leading-[1.02] tracking-[-0.035em] md:text-7xl">
          Give it a try.
          <span className="block font-serif font-normal italic text-accent">It&apos;s free.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-lg text-muted">
          Download the app, drag it to Applications, and open YouTube the way it
          should feel on a Mac.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <DownloadButton />
          <p className="text-xs text-faint">{REQUIREMENTS}</p>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-2">
          {MACOS_VERSIONS.map((v) => (
            <li key={v} className="rounded-full border border-line px-3 py-1 text-xs text-muted">macOS {v}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Soft red light behind the CTA, echoing the warm glow in the hero photo.
function Glow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[900px] max-w-[160vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
      style={{ background: "radial-gradient(ellipse, var(--accent) 0%, transparent 65%)" }}
    />
  );
}
