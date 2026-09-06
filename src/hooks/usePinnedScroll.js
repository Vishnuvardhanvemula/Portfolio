/**
 * usePinnedScroll
 *
 * Pins a section and translates an inner horizontal track as the user scrolls.
 * The section stays fixed while the user scrolls through the full track width.
 *
 * Architecture:
 *   <section ref={containerRef}>       ← pinned element
 *     <div ref={trackRef}>             ← horizontal track (wider than viewport)
 *       <div>Panel 1</div>
 *       <div>Panel 2</div>
 *       ...
 *     </div>
 *   </section>
 *
 * The scroll distance = trackRef.scrollWidth - containerRef.clientWidth
 * (i.e. the amount of track that's off-screen).
 *
 * Mobile: disabled. Section reverts to normal vertical scroll.
 *
 * Usage:
 *   const containerRef = useRef(null);
 *   const trackRef     = useRef(null);
 *   usePinnedScroll(containerRef, trackRef);
 */

"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const DEFAULTS = {
  scrub:         1.5,   // ScrollTrigger scrub smoothing
  anticipatePin: 1,     // prevents jumpy pin start
  mobileBreak:   1024,  // px — disable below this viewport width
  ease:          "none",
};

export function usePinnedScroll(containerRef, trackRef, options = {}) {
  const opts = { ...DEFAULTS, ...options };
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const container = containerRef?.current;
    const track     = trackRef?.current;

    if (!container || !track || typeof window === "undefined") return;

    // Disable on mobile and reduced motion
    if (prefersReduced || window.innerWidth < opts.mobileBreak) return;

    const ctx = gsap.context(() => {
      // Use invalidateOnRefresh so measurements recalculate on resize
      const mm = gsap.matchMedia();

      mm.add(`(min-width: ${opts.mobileBreak}px)`, () => {
        const getScrollDistance = () =>
          track.scrollWidth - container.clientWidth;

        gsap.to(track, {
          x:    () => -getScrollDistance(),
          ease: opts.ease,
          scrollTrigger: {
            trigger:             container,
            start:               "top top",
            end:                 () => `+=${getScrollDistance()}`,
            scrub:               opts.scrub,
            pin:                 true,
            anticipatePin:       opts.anticipatePin,
            invalidateOnRefresh: true, // critical for resize correctness
          },
        });
      });

    }, container);

    return () => ctx.revert();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, trackRef, prefersReduced, opts.scrub, opts.mobileBreak]);
}
