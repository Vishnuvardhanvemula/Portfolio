/**
 * usePrefersReducedMotion
 *
 * Subscribes to the prefers-reduced-motion media query.
 * Returns true when the user has requested reduced motion.
 * Safe to call server-side (returns false during SSR).
 */

"use client";

import { useEffect, useState } from "react";

export function usePrefersReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Sync immediately with current state
    setPrefersReduced(mq.matches);

    // Subscribe to future changes (e.g. user changes OS setting live)
    const handler = (e) => setPrefersReduced(e.matches);
    mq.addEventListener("change", handler);

    return () => mq.removeEventListener("change", handler);
  }, []);

  return prefersReduced;
}
