"use client";

import { LazyMotion, domAnimation } from "motion/react";

// Loads only the DOM animation features once, so every `m.*` component stays light.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={domAnimation} strict>{children}</LazyMotion>;
}
