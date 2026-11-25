"use client";

import { useRef } from "react";
import Image from "next/image";
import { m, useReducedMotion, useScroll, useTransform } from "motion/react";
import heroDesk from "@/assets/hero-desk.webp";

// Scroll-linked hero motion. Values only touch transform/opacity, and start at rest,
// so server HTML is fully visible and the page looks complete without JS.

export function HeroParallaxCopy({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  // Copy drifts up and fades a little as the photo takes over the viewport.
  const y = useTransform(scrollY, [0, 500], [0, -60]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.2]);
  return (
    <m.div className="relative z-10 mx-auto max-w-4xl text-center" style={reduce ? undefined : { y, opacity }}>
      {children}
    </m.div>
  );
}

// Real app screenshot composited onto a generated desk photo, so the UI shown is the actual app.
// The frame grows to full size as it rises, while the photo inside settles from a slight zoom.
export function HeroImage() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.15"] });
  const frameScale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1.14, 1]);
  return (
    <div ref={ref} className="hero-in hero-image-in relative mx-auto mt-16 max-w-6xl md:mt-20" style={{ "--delay": "0.5s" } as React.CSSProperties}>
      <m.div
        className="aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-line sm:aspect-auto md:rounded-3xl"
        style={reduce ? undefined : { scale: frameScale }}
      >
        <m.div className="h-full w-full" style={reduce ? undefined : { scale: photoScale }}>
          <Image
            src={heroDesk}
            alt="Tubo open on a MacBook on a desk at night, playing a YouTube video in a tab"
            placeholder="blur"
            preload
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="h-full w-full object-cover sm:h-auto"
          />
        </m.div>
      </m.div>
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
