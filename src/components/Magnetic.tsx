"use client";

import { m, useReducedMotion, useSpring } from "motion/react";

const SPRING = { stiffness: 220, damping: 16, mass: 0.4 };
const PULL = 0.28; // fraction of the cursor offset the element follows

// Pulls its child gently toward the mouse. Touch and reduced-motion users get a plain wrapper.
export function Magnetic({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const x = useSpring(0, SPRING);
  const y = useSpring(0, SPRING);

  function follow(e: React.PointerEvent<HTMLSpanElement>) {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * PULL);
    y.set((e.clientY - (r.top + r.height / 2)) * PULL);
  }

  function release() {
    x.set(0);
    y.set(0);
  }

  if (reduce) return <span className="inline-flex">{children}</span>;
  return (
    <m.span className="inline-flex" style={{ x, y }} onPointerMove={follow} onPointerLeave={release}>
      {children}
    </m.span>
  );
}
