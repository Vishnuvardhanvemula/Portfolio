/**
 * AnimationProvider
 *
 * Global GSAP + ScrollTrigger lifecycle management:
 * - Refreshes ScrollTrigger after fonts are loaded (prevents offset errors)
 * - Handles window resize (debounced — prevents thrashing)
 * - Kills all ScrollTriggers on unmount (route changes)
 * - Applies prefers-reduced-motion CSS class to <html>
 *
 * Mount order: AnimationProvider must be INSIDE LenisProvider
 * (so Lenis is connected to the GSAP ticker before ScrollTrigger refreshes)
 */

"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function AnimationProvider({ children }) {
  const prefersReduced = usePrefersReducedMotion();

  // ── Apply reduced-motion class to <html> for CSS fallbacks ─────────────
  useEffect(() => {
    const html = document.documentElement;
    if (prefersReduced) {
      html.classList.add("motion-reduce");
    } else {
      html.classList.remove("motion-reduce");
    }
  }, [prefersReduced]);

  // ── ScrollTrigger initialization & lifecycle ────────────────────────────
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Refresh after all fonts are loaded — critical for correct element offsets.
    // Web fonts change layout; ScrollTrigger must remeasure after.
    document.fonts.ready.then(() => {
      ScrollTrigger.refresh();
    });

    // Debounced resize handler — ScrollTrigger has built-in resize handling
    // but we force a refresh for cases it might miss (font-size changes, etc.)
    let resizeTimer = null;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 250); // 250ms debounce
    };

    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(resizeTimer);
      // Kill all ScrollTriggers on unmount (Next.js route change)
      // Individual hooks also clean up their own, but this is a safety net
      ScrollTrigger.killAll();
    };
  }, []);

  return children;
}
