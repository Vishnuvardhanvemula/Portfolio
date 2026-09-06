/**
 * GSAP Singleton Module
 *
 * Single import point for GSAP and its plugins.
 * Plugin registration is guarded behind a browser check to prevent SSR errors.
 * All hooks and components import from here — never directly from 'gsap'.
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

// Guard: register plugins only in browser context.
// GSAP's core is SSR-safe; plugins like ScrollTrigger access browser APIs.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, CustomEase);

  // ─── Design System Eases ──────────────────────────────────────────────────
  // Named to match design_system.md spec. Use these names in GSAP tweens.

  // Reveal eases
  CustomEase.create("cinematic", "0.76, 0, 0.24, 1"); // expo in-out — hero reveals
  CustomEase.create("settle", "0.23, 1, 0.32, 1");    // quart out — standard reveals
  CustomEase.create("emerge", "0, 0, 0.2, 1");         // material decelerate

  // Exit eases
  CustomEase.create("recede", "0.55, 0, 1, 0.45");    // fast exit

  // Interaction eases
  CustomEase.create("snappy", "0.16, 1, 0.3, 1");     // hover/micro-interaction

  // Ambient
  CustomEase.create("breathe", "0.45, 0.05, 0.55, 0.95"); // slow ambience

  // ─── Global ScrollTrigger Defaults ────────────────────────────────────────
  ScrollTrigger.defaults({
    markers: false, // set true temporarily for debugging
  });
}

export { gsap, ScrollTrigger, CustomEase };
