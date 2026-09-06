/**
 * Framer Motion Variant Factory
 *
 * Centralised Framer Motion variants and factory functions.
 * All variants respect prefers-reduced-motion via the `prefersReduced` flag.
 * Do NOT define variants inline in components — import them from here.
 */

import { FRAMER_EASES, DURATIONS } from "./eases";

// ─── Factory helpers ───────────────────────────────────────────────────────

/**
 * Reveal from below with blur — primary section element reveal.
 * Usage: <motion.div variants={revealUp(reduced)} initial="hidden" whileInView="visible" />
 */
export function revealUp(prefersReduced = false, overrides = {}) {
  if (prefersReduced) {
    return {
      hidden:  { opacity: 0 },
      visible: (i = 0) => ({
        opacity: 1,
        transition: { duration: 0.35, delay: 0 },
      }),
    };
  }
  return {
    hidden: {
      opacity: 0,
      y: overrides.y ?? 60,
      filter: "blur(6px)",
    },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: overrides.duration ?? DURATIONS.REVEAL,
        delay: i * (overrides.staggerDelay ?? 0.08),
        ease: FRAMER_EASES.SETTLE,
        ...overrides.transition,
      },
    }),
  };
}

/**
 * Directional clip-path reveal — for images and bold text blocks.
 */
export function revealClip(prefersReduced = false, direction = "left") {
  const clipMap = {
    left:   { from: "inset(0 100% 0 0)", to: "inset(0 0% 0 0)" },
    right:  { from: "inset(0 0 0 100%)", to: "inset(0 0 0 0%)" },
    top:    { from: "inset(0 0 100% 0)", to: "inset(0 0 0% 0)" },
    bottom: { from: "inset(100% 0 0 0)", to: "inset(0% 0 0 0)" },
  };
  const { from, to } = clipMap[direction] ?? clipMap.left;

  if (prefersReduced) {
    return {
      hidden:  { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.4 } },
    };
  }
  return {
    hidden:  { clipPath: from },
    visible: {
      clipPath: to,
      transition: { duration: DURATIONS.DRAMATIC, ease: FRAMER_EASES.CINEMATIC },
    },
  };
}

/**
 * Scale reveal — for full-bleed images and ambient backgrounds.
 */
export function revealScale(prefersReduced = false) {
  if (prefersReduced) {
    return {
      hidden:  { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.4 } },
    };
  }
  return {
    hidden:  { scale: 1.12, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: DURATIONS.DRAMATIC, ease: FRAMER_EASES.SETTLE },
    },
  };
}

// ─── Static variants (state-based, no scroll trigger needed) ──────────────

export const fadeVariant = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATIONS.REVEAL } },
  exit:    { opacity: 0, transition: { duration: DURATIONS.NORMAL } },
};

// Navbar: auto-hide on scroll down
export const navVariant = {
  visible: { y: 0,     transition: { duration: DURATIONS.NORMAL, ease: FRAMER_EASES.SETTLE } },
  hidden:  { y: "-100%", transition: { duration: DURATIONS.NORMAL, ease: FRAMER_EASES.RECEDE } },
};

// Mobile nav overlay
export const mobileNavVariant = {
  hidden:  { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATIONS.NORMAL, ease: FRAMER_EASES.SETTLE },
  },
  exit:    {
    opacity: 0,
    y: -20,
    transition: { duration: DURATIONS.QUICK, ease: FRAMER_EASES.RECEDE },
  },
};

// Mobile nav link stagger container
export const mobileNavContainer = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

// Mobile nav link item
export const mobileNavItem = {
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATIONS.REVEAL, ease: FRAMER_EASES.SETTLE },
  },
};

// Preloader exit curtain
export const loaderVariant = {
  initial: { scaleY: 1 },
  exit: {
    scaleY: 0,
    transition: { duration: DURATIONS.CINEMATIC, ease: FRAMER_EASES.CINEMATIC, originY: 0 },
  },
};

// Modal / overlay
export const overlayVariant = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATIONS.NORMAL } },
  exit:    { opacity: 0, transition: { duration: DURATIONS.QUICK } },
};

// Card stagger container
export const cardContainer = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

// Card item
export const cardItem = (prefersReduced = false) => ({
  hidden:  prefersReduced ? { opacity: 0 } : { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATIONS.REVEAL, ease: FRAMER_EASES.SETTLE },
  },
});
