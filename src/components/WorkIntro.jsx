"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

const Crosshair = ({ className = "" }) => (
  <svg 
    className={cn(
      "w-3.5 h-3.5 text-white/40 select-none pointer-events-none",
      className
    )} 
    viewBox="0 0 16 16" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.2"
  >
    <path d="M8 0V16M0 8H16" />
  </svg>
);

export default function WorkIntro() {
  const containerRef = useRef(null);
  const pinRef = useRef(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
      reduceMotion: "(prefers-reduced-motion: reduce)"
    }, (context) => {
      const { isDesktop, reduceMotion } = context.conditions;
      if (reduceMotion) return;

      const pinEl = pinRef.current;
      if (!pinEl) return;

      // Selectors
      const selectedWord = ".work-intro-selected";
      const workWord = ".work-intro-work";
      const laserBeam = ".work-intro-laser";
      const pivotArea = ".work-intro-pivot";
      const numeralBg = ".work-intro-numeral";
      const ambientAura = ".work-intro-ambient";
      const hudPerimeter = ".work-intro-hud";
      const footerPerimeter = ".work-intro-footer";
      const gridRails = ".blueprint-grid-work";

      // Initial defaults
      gsap.set(pivotArea, { y: 20, opacity: 0 });
      gsap.set(numeralBg, { scale: 0.4, opacity: 0 });
      gsap.set(ambientAura, { opacity: 0.2, scale: 0.95 });
      gsap.set(gridRails, { opacity: 0.35 });

      // ── 1. ENTRANCE TIMELINE: AS WORKINTRO SCROLLS INTO VIEW FROM MANIFESTO ──
      const entranceTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%",
          end: "top top",
          scrub: true,
        },
      });

      entranceTl
        .fromTo(selectedWord, 
          { yPercent: -85, opacity: 0.2 }, 
          { yPercent: 0, opacity: 1, ease: "none" }
        )
        .fromTo(workWord, 
          { yPercent: 85, opacity: 0.2 }, 
          { yPercent: 0, opacity: 1, ease: "none" }, 
          0
        )
        .fromTo(laserBeam, 
          { scaleX: 0, transformOrigin: "center center", opacity: 0 }, 
          { scaleX: 1, opacity: 0.95, ease: "none" }, 
          0.05
        )
        .fromTo(hudPerimeter, 
          { opacity: 0, y: -10 }, 
          { opacity: 0.85, y: 0, ease: "none" }, 
          0.15
        )
        .fromTo(footerPerimeter, 
          { opacity: 0, y: 10 }, 
          { opacity: 0.85, y: 0, ease: "none" }, 
          0.15
        )
        .to(pivotArea, { y: 0, opacity: 1, ease: "none" }, 0.2)
        .to(ambientAura, { opacity: 0.55, scale: 1.2, ease: "none" }, 0.2)
        .to(numeralBg, { scale: 1, opacity: 0.15, ease: "none" }, 0.2);

      // ── 2. SCROLL OUT TIMELINE: ELEGANT CROSS-DISSOLVE ─────────
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.0,
        },
      });

      // Slowly fade and drift out everything to seamlessly handoff to Projects
      tl.to([selectedWord, workWord, pivotArea, laserBeam, hudPerimeter, footerPerimeter, numeralBg, gridRails, ambientAura], {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      }, 0);

    }, containerRef);

    return () => mm.revert();
  }, [prefersReduced]);

  const scrollToFirstProject = () => {
    const target = document.getElementById("project-01");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      ref={containerRef} 
      id="work" 
      data-section="work-intro" 
      className="relative w-full bg-void text-foreground select-none"
    >
      {/* Pinned Screen Viewport */}
      <div 
        ref={pinRef} 
        className="relative h-screen w-full overflow-hidden flex flex-col justify-between px-4 sm:px-6 md:px-12 lg:px-16 pt-24 md:pt-28 pb-8 md:pb-12"
      >
        {/* ═════════════════════════════════════════════════════════════════
            ATMOSPHERIC CANVAS & CONTINUITY GLOW (RECEIVES MANIFESTO)
           ═════════════════════════════════════════════════════════════════ */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Top incoming vertical guide line — direct baton pass from Manifesto */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-[#FF2222]/80 via-[#FF2222]/30 to-transparent" />
          
          {/* Ambient Crimson Depth Aura */}
          <div className="work-intro-ambient absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[40vw] bg-red-950/20 rounded-full blur-[150px] mix-blend-screen transition-opacity" />
          <div className="absolute inset-0 opacity-25 mix-blend-overlay hero-grain" />
          
          {/* Top feather shadow */}
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-void via-void/40 to-transparent pointer-events-none" />
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            BLUEPRINT MATRIX RAILS (CONTINUOUS WITH HERO & MANIFESTO)
           ═════════════════════════════════════════════════════════════════ */}
        <div className="blueprint-grid-work absolute inset-0 pointer-events-none z-10 opacity-30">
          {/* Horizontal Rails */}
          <div className="absolute top-20 left-0 right-0 h-[1px] bg-white/10" />
          <div className="absolute bottom-20 left-0 right-0 h-[1px] bg-white/10" />

          {/* Vertical Rails */}
          <div className="absolute top-0 bottom-0 left-7 md:left-12 w-[1px] bg-white/10" />
          <div className="absolute top-0 bottom-0 right-7 md:right-12 w-[1px] bg-white/10" />
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/5" />

          {/* Precision Crosshairs at Intersections */}
          <div className="absolute top-20 left-7 md:left-12 -translate-x-1/2 -translate-y-1/2 font-mono text-[11px] text-[#FF2222]/80">┼</div>
          <div className="absolute top-20 right-7 md:right-12 translate-x-1/2 -translate-y-1/2 font-mono text-[11px] text-[#FF2222]/80">┼</div>
          <div className="absolute bottom-20 left-7 md:left-12 -translate-x-1/2 translate-y-1/2 font-mono text-[11px] text-[#FF2222]/80">┼</div>
          <div className="absolute bottom-20 right-7 md:right-12 translate-x-1/2 translate-y-1/2 font-mono text-[11px] text-[#FF2222]/80">┼</div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            PERIMETER HUD: CHAPTER & ARCHIVE METRICS
           ═════════════════════════════════════════════════════════════════ */}
        <header className="work-intro-hud relative z-20 w-full flex items-center justify-between border-b border-white/5 pb-4 md:pb-5">
          <div className="flex items-center gap-3">
            <Crosshair />
            <span className="font-mono text-[10px] md:text-[12px] tracking-[0.35em] text-white/70 uppercase font-medium">
              CATALOGUE // DIRECTORY
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline font-mono text-[10px] md:text-[11px] tracking-[0.28em] text-white/40 uppercase">
              ACTIVE SYSTEMS · 2023 — 2025
            </span>
            <span className="font-mono text-[10px] md:text-[12px] tracking-[0.3em] text-[#FF2222] font-semibold">
              CHAPTER 02 · 04
            </span>
          </div>
        </header>

        {/* ═════════════════════════════════════════════════════════════════
            CENTER STAGE: COLOSSAL MASKED DUAL TYPOGRAPHY + GATEWAY
           ═════════════════════════════════════════════════════════════════ */}
        <div className="relative z-20 my-auto w-full max-w-7xl mx-auto flex flex-col justify-center">
          
          {/* TIER 1: "SELECTED" (Masked Upper Horizon) */}
          <div className="overflow-hidden py-1 md:py-2">
            <h1 className="work-intro-selected font-display font-black text-[13.5vw] md:text-[11.5vw] lg:text-[10.5vw] leading-[0.84] tracking-[-0.035em] uppercase text-ghost text-left select-none will-change-transform drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
              SELECTED
            </h1>
          </div>

          {/* CENTRAL DATUM: Laser Split + Conceptual Transition Statement */}
          <div className="relative my-2 md:my-3">
            {/* Horizontal Laser Line */}
            <div className="work-intro-laser h-[1px] bg-gradient-to-r from-transparent via-[#FF2222] to-transparent w-full shadow-[0_0_12px_rgba(255,34,34,0.8)]" />

            {/* Pivot statement: WHO I AM ──► WHAT I CREATE */}
            <div className="work-intro-pivot py-3 md:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 md:gap-4 font-mono text-[10px] md:text-[12px] tracking-[0.24em] text-white/70">
              <div className="flex items-center gap-2.5">
                <span className="text-[#FF2222] font-semibold">TRANSITION</span>
                <span className="text-white/30">|</span>
                <span className="text-white/50 uppercase">01 WHO I AM</span>
                <span className="text-[#FF2222] font-bold">──────►</span>
                <span className="text-white uppercase font-medium">02 WHAT I CREATE</span>
              </div>
              <div className="text-white/40 text-[9px] md:text-[11px] tracking-[0.2em] uppercase">
                AUTONOMOUS ARCHITECTURES & LIVING INTERFACES
              </div>
            </div>
          </div>

          {/* TIER 2: "WORK" (Masked Lower Horizon, Staggered Right) */}
          <div className="overflow-hidden py-1 md:py-2">
            <h1 className="work-intro-work font-display font-black text-[13.5vw] md:text-[11.5vw] lg:text-[10.5vw] leading-[0.84] tracking-[-0.035em] uppercase text-ghost text-right select-none will-change-transform drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
              WORK
            </h1>
          </div>

        </div>

        {/* ═════════════════════════════════════════════════════════════════
            GATEWAY APERTURE: PROJECT 01 HINT & TELEMETRY VIEWPORT
           ═════════════════════════════════════════════════════════════════ */}
        <div className="work-intro-gateway absolute inset-0 z-40 flex items-center justify-center pointer-events-none px-6 md:px-16">
          
          {/* Deep Architectural Numeral 'SYS.00' */}
          <span className="work-intro-numeral font-display font-black text-[20vw] md:text-[18vw] leading-none text-white/[0.04] select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tracking-tighter pointer-events-none whitespace-nowrap">
            SYS.00
          </span>


        </div>

        {/* ═════════════════════════════════════════════════════════════════
            SECTION FOOTER: DIRECTORY STATUS & TRACK PROGRESSION
           ═════════════════════════════════════════════════════════════════ */}
        <footer className="work-intro-footer relative z-20 w-full flex items-center justify-between border-t border-white/5 pt-4 md:pt-5">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[9px] md:text-[11px] tracking-[0.3em] text-white/50 uppercase">
              SYSTEMS DIRECTORY
            </span>
          </div>

          {/* Track Indicators */}
          <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] tracking-[0.28em]">
            <span className="text-[#FF2222] font-semibold">[ 01 ]</span>
            <span className="text-white/20">—</span>
            <span className="text-white/40">[ 02 ]</span>
            <span className="text-white/20">—</span>
            <span className="text-white/40">[ 03 ]</span>
            <span className="text-white/20">—</span>
            <span className="text-white/40">[ 04 ]</span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[9px] md:text-[11px] tracking-[0.3em] text-[#FF2222]">
            <span className="uppercase font-medium">APPROACHING PROJECT 01</span>
            <ArrowDown className="w-3 h-3 animate-bounce" />
          </div>
        </footer>

      </div>
    </section>
  );
}
