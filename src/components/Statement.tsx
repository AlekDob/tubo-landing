import { SectionLabel } from "./SectionLabel";

// Editorial intro: one big sentence on the left, a short paragraph offset to the right.
export function Statement() {
  return (
    <section id="features" className="scroll-mt-20 px-4 py-28 sm:px-6 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="reveal">
          <SectionLabel>Why Tubo</SectionLabel>
          <h2 className="mt-6 max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl md:text-6xl">
            Not another browser tab you lose.{" "}
            <span className="font-serif font-normal italic text-muted">A real app that lives in your Dock.</span>
          </h2>
        </div>
        <p className="reveal mt-10 max-w-md text-lg leading-relaxed text-muted md:ml-auto md:mt-16">
          Tubo is written in Swift on Apple&apos;s own frameworks. No Electron, no
          extensions, no account to create. Open it, sign in to YouTube if you
          like, and watch.
        </p>
      </div>
    </section>
  );
}
