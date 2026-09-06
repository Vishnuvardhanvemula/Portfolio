/**
 * useSplitText
 *
 * Splits an element's text content into word spans and reveals them
 * with a staggered translateY animation on scroll entry.
 *
 * IMPORTANT CONSTRAINTS:
 * - Works on elements containing PLAIN TEXT only.
 *   Do NOT use on elements with nested HTML (strong, em, links) — it will strip them.
 *   For rich content, use <SplitTextBlock> component instead (renders split spans natively).
 * - Saves and restores original innerHTML on cleanup.
 * - Only runs on client (guards against SSR).
 *
 * Usage:
 *   const headingRef = useRef(null);
 *   useSplitText(headingRef, { stagger: 0.055, y: 80 });
 *   return <h2 ref={headingRef}>My clean text here</h2>
 */

"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { GSAP_EASES, DURATIONS } from "@/lib/eases";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const DEFAULTS = {
  type:     "words",        // "words" | "chars" (chars only for short text ≤ 20 chars)
  y:        90,             // initial translateY for each word/char
  stagger:  0.055,          // seconds between each word reveal
  duration: DURATIONS.REVEAL,
  ease:     GSAP_EASES.SETTLE,
  delay:    0,
  start:    "top 85%",
  once:     true,
};

export function useSplitText(ref, options = {}) {
  const opts = { ...DEFAULTS, ...options };
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref?.current;
    if (!el || typeof window === "undefined") return;

    // Store original markup for cleanup
    const originalHTML = el.innerHTML;

    // ── Reduced motion: keep element fully visible ───────────────────────
    if (prefersReduced) {
      gsap.set(el, { opacity: 1 });
      return () => {};
    }

    // ── Split text into unit spans ────────────────────────────────────────
    // Each unit: outer span (clips overflow) wraps inner span (translates up)
    const rawText = el.textContent.trim();
    const units = opts.type === "chars"
      ? rawText.split("")
      : rawText.split(/(\s+)/); // preserve spaces between words

    const html = units
      .map((unit) => {
        // Preserve whitespace tokens as plain text nodes
        if (/^\s+$/.test(unit)) return unit;
        // Word/char wrapper: outer clips, inner translates
        return (
          `<span class="st-outer" style="display:inline-block;overflow:hidden;vertical-align:bottom;line-height:inherit;">` +
          `<span class="st-inner" style="display:inline-block;transform:translateY(100%);">` +
          `${unit}` +
          `</span>` +
          `</span>`
        );
      })
      .join("");

    el.innerHTML = html;

    const inners = [...el.querySelectorAll(".st-inner")];
    if (inners.length === 0) return;

    // ── Animate ────────────────────────────────────────────────────────────
    const ctx = gsap.context(() => {
      const tween = gsap.to(inners, {
        y:        0,
        opacity:  1,
        duration: opts.duration,
        ease:     opts.ease,
        stagger:  opts.stagger,
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
      // Restore original markup so React doesn't lose its DOM reference
      if (el) el.innerHTML = originalHTML;
    };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, prefersReduced, opts.type, opts.y, opts.stagger, opts.duration,
      opts.ease, opts.delay, opts.start, opts.once]);
}
