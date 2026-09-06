/**
 * useScrollReveal
 *
 * Reveals an element (or its children) when it enters the viewport.
 * Uses GSAP ScrollTrigger + a paused tween for clean lifecycle management.
 *
 * Features:
 * - Scoped GSAP context — auto-reverts on unmount (no memory leaks)
 * - Supports single element OR staggered children (via `selector`)
 * - Respects prefers-reduced-motion
 * - Works on resize (ScrollTrigger.refresh handles it via AnimationProvider)
 *
 * Usage:
 *   const ref = useRef(null);
 *   useScrollReveal(ref, { y: 50, stagger: 0.08 });
 *   return <section ref={ref}>...</section>
 *
 *   // Stagger children:
 *   useScrollReveal(containerRef, { selector: ".card", stagger: 0.1 });
 */

"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { GSAP_EASES, DURATIONS } from "@/lib/eases";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const DEFAULTS = {
  y:           50,         // initial translateY offset
  x:           0,          // initial translateX offset
  opacity:     0,          // initial opacity
  duration:    DURATIONS.REVEAL,
  ease:        GSAP_EASES.SETTLE,
  delay:       0,          // overall delay before animation starts
  stagger:     0,          // stagger between children (seconds)
  selector:    null,       // CSS selector for child targets; null = animate ref element
  start:       "top 88%", // ScrollTrigger start position
  once:        true,       // only trigger once (recommended)
  // Optional additional initial / final overrides:
  scale:       null,
  clipPath:    null,       // initial clip-path string
  clipPathEnd: "inset(0 0% 0 0)", // final clip-path string
};

export function useScrollReveal(ref, options = {}) {
  const opts = { ...DEFAULTS, ...options };
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref?.current;
    if (!el || typeof window === "undefined") return;

    // ── Reduced motion: skip hidden state entirely ───────────────────────
    if (prefersReduced) {
      const targets = opts.selector
        ? el.querySelectorAll(opts.selector)
        : [el];
      gsap.set(targets, { opacity: 1, y: 0, x: 0, clearProps: "filter,clipPath,scale" });
      return;
    }

    // ── Resolve animation targets ────────────────────────────────────────
    const targets = opts.selector
      ? [...el.querySelectorAll(opts.selector)]
      : [el];

    if (targets.length === 0) return;

    // ── Scoped context — all tweens/triggers inside auto-cleaned up ──────
    const ctx = gsap.context(() => {

      // Initial hidden state
      const fromProps = {
        opacity:   opts.opacity,
        y:         opts.y,
        x:         opts.x,
        ...(opts.scale    !== null && { scale: opts.scale }),
        ...(opts.clipPath !== null && { clipPath: opts.clipPath }),
      };
      gsap.set(targets, fromProps);

      // Create paused tween (we play it from the ScrollTrigger callback)
      const tween = gsap.to(targets, {
        opacity:   1,
        y:         0,
        x:         0,
        ...(opts.scale    !== null && { scale: 1 }),
        ...(opts.clipPath !== null && { clipPath: opts.clipPathEnd }),
        duration:  opts.duration,
        ease:      opts.ease,
        delay:     opts.delay,
        stagger:   opts.stagger,
        paused:    true,
      });

      // ScrollTrigger watches the container element
      ScrollTrigger.create({
        trigger: el,
        start:   opts.start,
        once:    opts.once,
        onEnter: () => tween.play(),
        // onLeaveBack fires if once: false — reset to initial
        onLeaveBack: opts.once ? undefined : () => tween.reverse(),
      });

    }, el); // scope to element — GSAP context auto-cleans on revert()

    return () => ctx.revert();

  // Primitive options as deps — avoids stale closure without object identity issues
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, prefersReduced, opts.y, opts.x, opts.opacity, opts.duration,
      opts.ease, opts.delay, opts.stagger, opts.selector, opts.start,
      opts.once, opts.scale, opts.clipPath]);
}
