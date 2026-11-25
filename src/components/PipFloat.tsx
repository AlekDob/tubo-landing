"use client";

import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "motion/react";

// Decorative Picture-in-Picture window floating over the PiP photo. It drifts against the
// scroll (parallax) and bobs gently on its own (.pip-bob), like a window that stays on top.
export function PipFloat() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-4, 3]);
  return (
    <m.div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute -bottom-6 -left-3 w-[46%] max-w-[280px] sm:-left-6 md:-bottom-10 md:-left-10"
      style={reduce ? undefined : { y, rotate }}
    >
      <div className="pip-bob overflow-hidden rounded-xl border border-white/15 bg-white/10 p-1.5 shadow-[0_30px_60px_-20px_rgb(0_0_0/0.8)] backdrop-blur-xl">
        <div className="relative aspect-video overflow-hidden rounded-lg pip-scene">
          <div className="absolute left-2 top-2 flex gap-1">
            <span className="size-1.5 rounded-full bg-white/70" />
            <span className="size-1.5 rounded-full bg-white/40" />
          </div>
          <div className="absolute inset-x-2 bottom-2 h-0.5 overflow-hidden rounded-full bg-white/25">
            <div className="pip-progress h-full w-full origin-left rounded-full bg-accent" />
          </div>
        </div>
      </div>
    </m.div>
  );
}
