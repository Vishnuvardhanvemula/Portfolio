/**
 * useMagnetic
 *
 * Applies a spring-like magnetic pull to an element toward the cursor.
 * Uses native RAF + linear interpolation for maximum performance.
 * No Framer Motion, no GSAP spring — pure math for tightest possible control.
 *
 * Disabled automatically on:
 * - Touch/pointer-coarse devices
 * - prefers-reduced-motion
 *
 * Usage:
 *   const btnRef = useRef(null);
 *   useMagnetic(btnRef, { strength: 0.35 });
 *   return <button ref={btnRef}>Click me</button>
 */

"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const DEFAULTS = {
  strength: 0.35,  // 0–1 — how far the element travels toward the cursor
  lerp:     0.12,  // interpolation factor per frame — lower = more lag
};

export function useMagnetic(ref, options = {}) {
  const opts = { ...DEFAULTS, ...options };
  const prefersReduced = usePrefersReducedMotion();

  // Keep current/target positions in refs to avoid re-render on every frame
  const currentPos = useRef({ x: 0, y: 0 });
  const targetPos  = useRef({ x: 0, y: 0 });
  const rafId      = useRef(null);
  const isHovering = useRef(false);

  useEffect(() => {
    const el = ref?.current;
    if (!el || typeof window === "undefined") return;

    // Disable on touch devices and reduced motion
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch || prefersReduced) return;

    // ── Mouse handlers ─────────────────────────────────────────────────────
    const onMouseMove = (e) => {
      if (!isHovering.current) return;
      const { left, top, width, height } = el.getBoundingClientRect();
      const cx = left + width  / 2;
      const cy = top  + height / 2;
      targetPos.current = {
        x: (e.clientX - cx) * opts.strength,
        y: (e.clientY - cy) * opts.strength,
      };
    };

    const onMouseEnter = () => { isHovering.current = true; };

    const onMouseLeave = () => {
      isHovering.current       = false;
      targetPos.current        = { x: 0, y: 0 };
    };

    // ── Animation loop ─────────────────────────────────────────────────────
    const animate = () => {
      // Lerp current toward target
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * opts.lerp;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * opts.lerp;

      // Apply via transform (GPU-composited — no layout trigger)
      el.style.transform = `translate3d(${currentPos.current.x.toFixed(2)}px, ${currentPos.current.y.toFixed(2)}px, 0)`;

      rafId.current = requestAnimationFrame(animate);
    };

    // ── Event listeners ────────────────────────────────────────────────────
    el.addEventListener("mouseenter", onMouseEnter);
    el.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    rafId.current = requestAnimationFrame(animate);

    return () => {
      el.removeEventListener("mouseenter", onMouseEnter);
      el.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId.current);
      // Reset to natural position
      el.style.transform = "";
    };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, prefersReduced, opts.strength, opts.lerp]);
}
