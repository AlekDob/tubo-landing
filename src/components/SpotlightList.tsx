"use client";

// Grid wrapper that lets each card show a soft light under the mouse (.spotlight in motion.css).
// One delegated listener writes the cursor position as CSS vars on the hovered card only.
export function SpotlightList({ className, children }: { className: string; children: React.ReactNode }) {
  function track(e: React.PointerEvent<HTMLUListElement>) {
    const card = (e.target as HTMLElement).closest<HTMLElement>("li");
    if (!card || e.pointerType !== "mouse") return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--x", `${e.clientX - r.left}px`);
    card.style.setProperty("--y", `${e.clientY - r.top}px`);
  }
  return <ul className={className} onPointerMove={track}>{children}</ul>;
}
