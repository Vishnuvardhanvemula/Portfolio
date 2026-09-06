/**
 * LenisProvider
 *
 * Singleton Lenis smooth-scroll instance.
 * Connects Lenis to GSAP's ticker so ScrollTrigger stays in sync.
 *
 * Key decisions:
 * - Lenis drives the RAF loop (not requestAnimationFrame directly)
 * - GSAP ticker calls lenis.raf() — single unified loop
 * - lenis.on('scroll', ScrollTrigger.update) keeps trigger positions accurate
 * - If prefers-reduced-motion: Lenis is not initialized (native scroll used)
 * - Exposes the lenis instance via context for programmatic scrollTo()
 *
 * Usage anywhere in the tree:
 *   const lenis = useLenis();
 *   lenis?.scrollTo('#contact', { duration: 1.2 });
 */

"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const LenisContext = createContext(null);

export function LenisProvider({ children }) {
  const [lenis, setLenis] = useState(null);
  const tickerCallbackRef = useRef(null);
  const prefersReduced    = usePrefersReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // ── Reduced motion: skip Lenis entirely ───────────────────────────────
    // Native scroll is perfectly acceptable and required for accessibility.
    if (prefersReduced) return;

    // ── Instantiate Lenis ─────────────────────────────────────────────────
    const lenisInstance = new Lenis({
      duration:        1.1,
      // Expo ease — matches design system "emerge" feel
      easing:          (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel:     true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5, // More responsive on touch for momentum feel
      infinite:        false,
    });

    // ── GSAP integration ──────────────────────────────────────────────────
    // Route Lenis scroll events to ScrollTrigger update (position sync)
    lenisInstance.on("scroll", ScrollTrigger.update);

    // Drive Lenis from GSAP ticker (unified animation loop)
    tickerCallbackRef.current = (time) => lenisInstance.raf(time * 1000);
    gsap.ticker.add(tickerCallbackRef.current);

    // Prevent GSAP from compensating for long frames (causes double-scroll)
    gsap.ticker.lagSmoothing(0);

    setLenis(lenisInstance);

    return () => {
      lenisInstance.off("scroll", ScrollTrigger.update);
      if (tickerCallbackRef.current) {
        gsap.ticker.remove(tickerCallbackRef.current);
        tickerCallbackRef.current = null;
      }
      lenisInstance.destroy();
      setLenis(null);
    };
  }, [prefersReduced]);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}

/**
 * useLenis — access the Lenis instance anywhere in the tree.
 * Returns null on mobile/reduced-motion (Lenis not initialized).
 */
export function useLenis() {
  return useContext(LenisContext);
}
