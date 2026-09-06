/**
 * useImageReveal
 *
 * Reveals an image (or any element) with a directional clip-path wipe animation
 * on scroll entry. Supports 4 directions and an optional "curtain" overlay mode.
 *
 * Design rule from design_system.md:
 * - Treatment A — Directional Clip-Path Reveal (primary for project images)
 * - Treatment C — Stacked Curtain Reveal (for featured/About images)
 *
 * Usage (basic):
 *   const imgRef = useRef(null);
 *   useImageReveal(imgRef, { direction: "left" });
 *   return <img ref={imgRef} src="..." />
 *
 * Usage (curtain mode — overlays an accent-colored div that wipes away first):
 *   useImageReveal(containerRef, { mode: "curtain" });
 *   return (
 *     <div ref={containerRef} style={{ position: "relative" }}>
 *       <div className="reveal-curtain" />  ← sibling curtain (absolute inset-0)
 *       <img ... />
 *     </div>
 *   );
 */

"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { GSAP_EASES, DURATIONS } from "@/lib/eases";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const CLIP = {
  left:   { from: "inset(0 100% 0 0)",   to: "inset(0 0% 0 0)"   },
  right:  { from: "inset(0 0 0 100%)",   to: "inset(0 0 0 0%)"   },
  top:    { from: "inset(0 0 100% 0)",   to: "inset(0 0 0% 0)"   },
  bottom: { from: "inset(100% 0 0 0)",   to: "inset(0% 0 0 0)"   },
};

const DEFAULTS = {
  direction:   "left",
  mode:        "clip",          // "clip" | "curtain"
  duration:    DURATIONS.DRAMATIC,
  ease:        GSAP_EASES.CINEMATIC,
  delay:       0,
  start:       "top 85%",
  once:        true,
  // Curtain mode: selector for the overlay div within the container
  curtainSelector: ".reveal-curtain",
};

export function useImageReveal(ref, options = {}) {
  const opts = { ...DEFAULTS, ...options };
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref?.current;
    if (!el || typeof window === "undefined") return;

    // ── Reduced motion: just fade in ─────────────────────────────────────
    if (prefersReduced) {
      gsap.set(el, { opacity: 0 });
      const tween = gsap.to(el, { opacity: 1, duration: 0.5, paused: true });
      const trigger = ScrollTrigger.create({
        trigger: el, start: opts.start, once: true,
        onEnter: () => tween.play(),
      });
      return () => { tween.kill(); trigger.kill(); gsap.set(el, { clearProps: "opacity" }); };
    }

    const { from, to } = CLIP[opts.direction] ?? CLIP.left;

    // ── Clip mode ─────────────────────────────────────────────────────────
    if (opts.mode === "clip") {
      const ctx = gsap.context(() => {
        gsap.set(el, { clipPath: from });

        const tween = gsap.to(el, {
          clipPath: to,
          duration: opts.duration,
          ease:     opts.ease,
          delay:    opts.delay,
          paused:   true,
        });

        ScrollTrigger.create({
          trigger: el,
          start:   opts.start,
          once:    opts.once,
          onEnter: () => tween.play(),
        });
      }, el);

      return () => {
        ctx.revert();
        gsap.set(el, { clearProps: "clipPath" });
      };
    }

    // ── Curtain mode ──────────────────────────────────────────────────────
    // The curtain div wipes away revealing the image underneath.
    if (opts.mode === "curtain") {
      const curtain = el.querySelector(opts.curtainSelector);
      if (!curtain) {
        console.warn("[useImageReveal] curtain mode requires a child element matching:", opts.curtainSelector);
        return;
      }

      const ctx = gsap.context(() => {
        // Start: curtain covers image (clipPath at full)
        gsap.set(curtain, { clipPath: "inset(0 0% 0 0)", transformOrigin: "right center" });

        const tl = gsap.timeline({ paused: true });

        // Step 1: curtain wipes away (400ms)
        tl.to(curtain, {
          clipPath: "inset(0 100% 0 0)",
          duration: opts.duration * 0.45,
          ease:     opts.ease,
          delay:    opts.delay,
        });

        ScrollTrigger.create({
          trigger: el,
          start:   opts.start,
          once:    opts.once,
          onEnter: () => tl.play(),
        });
      }, el);

      return () => ctx.revert();
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, prefersReduced, opts.direction, opts.mode, opts.duration,
      opts.ease, opts.delay, opts.start, opts.once]);
}
