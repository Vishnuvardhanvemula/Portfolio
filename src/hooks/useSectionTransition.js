/**
 * useSectionTransition
 *
 * Drives cross-section effects that are tied to scroll progress:
 * - Background color blending between sections
 * - Ambient opacity shifts
 * - CSS variable updates (for theme-shifting effects)
 *
 * Uses GSAP ScrollTrigger scrub — no per-frame JS, GPU does the interpolation.
 *
 * Usage:
 *   const sectionRef = useRef(null);
 *   useSectionTransition(sectionRef, {
 *     cssVar: "--bg-override",
 *     from:   "rgba(6,6,8,1)",
 *     to:     "rgba(10,6,24,1)",
 *   });
 */

"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const DEFAULTS = {
  // CSS variable on :root to animate
  cssVar:   null,
  from:     null,
  to:       null,
  // Direct property on the target element instead of :root
  property: null,
  // ScrollTrigger config
  start:    "top 60%",
  end:      "bottom 40%",
  scrub:    true,
  // Optional: run a callback at specific progress points
  onProgress: null, // (progress: 0–1) => void
};

export function useSectionTransition(ref, options = {}) {
  const opts = { ...DEFAULTS, ...options };
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref?.current;
    if (!el || typeof window === "undefined" || prefersReduced) return;

    const ctx = gsap.context(() => {

      // ── CSS Variable transition (for global background shifts) ──────────
      if (opts.cssVar && opts.from && opts.to) {
        gsap.fromTo(
          document.documentElement,
          { [opts.cssVar]: opts.from },
          {
            [opts.cssVar]: opts.to,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start:   opts.start,
              end:     opts.end,
              scrub:   opts.scrub,
            },
          }
        );
      }

      // ── Progress callback (for custom scroll-linked effects) ────────────
      if (typeof opts.onProgress === "function") {
        ScrollTrigger.create({
          trigger:  el,
          start:    opts.start,
          end:      opts.end,
          scrub:    opts.scrub,
          onUpdate: (self) => opts.onProgress(self.progress),
        });
      }

    });

    return () => ctx.revert();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, prefersReduced, opts.cssVar, opts.from, opts.to,
      opts.start, opts.end, opts.scrub]);
}
