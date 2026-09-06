/**
 * useScrollVelocity
 *
 * Reads scroll velocity from the Lenis instance (via LenisContext).
 * Returns a velocity value and a ref for use in animation loops.
 *
 * Primary use case: scaling marquee speed based on scroll momentum.
 *
 * Returns:
 *   velocity    — reactive state (triggers re-render, use sparingly)
 *   velocityRef — mutable ref (for use inside RAF loops, no re-render)
 *
 * Usage in a marquee:
 *   const { velocityRef } = useScrollVelocity();
 *   // Inside RAF: marqueeSpeed = baseSpeed + Math.abs(velocityRef.current) * 0.05
 */

"use client";

import { useEffect, useRef, useState } from "react";
import { useLenis } from "@/providers/LenisProvider";

export function useScrollVelocity() {
  const lenis       = useLenis();
  const velocityRef = useRef(0);
  const [velocity, setVelocity] = useState(0);

  useEffect(() => {
    if (!lenis) return;

    const handler = ({ velocity: v }) => {
      velocityRef.current = v ?? 0;
      // Throttle state update — RAF-driven consumers use velocityRef directly
      setVelocity(v ?? 0);
    };

    lenis.on("scroll", handler);
    return () => lenis.off("scroll", handler);
  }, [lenis]);

  return { velocity, velocityRef };
}
