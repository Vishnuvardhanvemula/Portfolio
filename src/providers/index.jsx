/**
 * Providers — root client provider tree
 *
 * Single import for layout.js. Mount order is intentional:
 * 1. ThemeProvider   — no deps
 * 2. LenisProvider   — sets up Lenis + GSAP ticker connection
 * 3. AnimationProvider — initializes ScrollTrigger after Lenis is ready
 *
 * All are "use client" — this component acts as the RSC/client boundary.
 */

"use client";

import { ThemeProvider } from "next-themes";
import { LenisProvider } from "./LenisProvider";
import { AnimationProvider } from "./AnimationProvider";

export function Providers({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <LenisProvider>
        <AnimationProvider>
          {children}
        </AnimationProvider>
      </LenisProvider>
    </ThemeProvider>
  );
}
