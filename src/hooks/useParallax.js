/**
 * useParallax
 *
 * Applies a scroll-linked translateY (or translateX) to an element.
 * Movement is driven by GSAP ScrollTrigger scrub — no RAF loop needed.
 *
 * Design rule: max offset ±40px. Never exceed this — subtle parallax only.
 *
 * Usage:
 *   const imgRef = useRef(null);
 *   useParallax(imgRef, { speed: 0.25 }); // 25% of scroll speed
 *   return <img ref={imgRef} ... />
 */

"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const DEFAULTS = {
  speed:     0.25,         // 0 = static, 1 = full scroll speed. Keep ≤ 0.4
  axis:      "y",          // "y" | "x"
  start:     "top bottom", // when trigger enters bottom of viewport
  end:       "bottom top", // when trigger exits top of viewport
  scrub:     1.5,          // smoothing — higher = more lag
  clamp:     false,        // clamp to scroll bounds
};

export function useParallax(ref, options = {}) {
  const opts = { ...DEFAULTS, ...options };
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref?.current;
    if (!el || typeof window === "undefined" || prefersReduced) return;

    // Calculate travel distance based on element height (cap at 40px per design rules)
    const rawDistance = el.offsetHeight * opts.speed;
    const distance = Math.min(rawDistance, 40);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { [opts.axis]: -distance, force3D: true },
        {
          [opts.axis]: distance,
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger:             el,
            start:               opts.start,
            end:                 opts.end,
            scrub:               opts.scrub,
            invalidateOnRefresh: true,  // recalculates on resize
          },
        }
      );
    }, el);

    return () => {
      ctx.revert();
      // Ensure element returns to natural position
      gsap.set(el, { clearProps: `${opts.axis},force3D` });
    };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, prefersReduced, opts.speed, opts.axis, opts.start, opts.end, opts.scrub]);
}
