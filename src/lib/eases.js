/**
 * Eases & Durations
 *
 * Single source of truth for timing constants, matching design_system.md.
 * Use GSAP_EASES names in GSAP tweens (strings).
 * Use FRAMER_EASES arrays in Framer Motion transitions.
 * Use DURATIONS in both (seconds).
 */

// ─── Framer Motion format (bezier arrays) ─────────────────────────────────
export const FRAMER_EASES = {
  CINEMATIC: [0.76, 0, 0.24, 1],   // expo in-out
  SETTLE:    [0.23, 1, 0.32, 1],   // quart out
  EMERGE:    [0.0,  0.0, 0.2, 1],  // material decelerate
  RECEDE:    [0.55, 0, 1, 0.45],   // fast exit
  SNAPPY:    [0.16, 1, 0.3, 1],    // hover micro-interaction
  SINE:      [0.37, 0, 0.63, 1],   // natural sine
  BREATHE:   [0.45, 0.05, 0.55, 0.95], // ambient
};

// ─── GSAP format (registered string names — see lib/gsap.js) ──────────────
export const GSAP_EASES = {
  CINEMATIC: "cinematic",
  SETTLE:    "settle",
  EMERGE:    "emerge",
  RECEDE:    "recede",
  SNAPPY:    "snappy",
  BREATHE:   "breathe",
  NONE:      "none",
};

// ─── Duration tokens (seconds) — multiply × 1000 for CSS ms ──────────────
export const DURATIONS = {
  INSTANT:   0.08,
  FAST:      0.15,
  QUICK:     0.22,
  NORMAL:    0.38,
  REVEAL:    0.60,
  DRAMATIC:  0.90,
  CINEMATIC: 1.20,
  AMBIENT:   2.40,
  ETERNAL:   6.00,
};

// ─── Stagger formulas ─────────────────────────────────────────────────────
export const STAGGER = {
  word:  (i) => i * 0.055,
  char:  (i) => i * 0.030,
  card:  (i) => i * 0.080,
  // Capped stagger for long lists
  list:  (i) => Math.min(i * 0.060, 0.40),
};
