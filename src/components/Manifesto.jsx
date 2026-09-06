"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

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

export default function Manifesto() {
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

      // ── MASTER TIMELINE: 4-STAGE PINNED CHOREOGRAPHY ─────────────────────
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinEl,
          start: "top top",
          end: isDesktop ? "+=260%" : "+=160%",
          scrub: isDesktop ? 1.2 : 0.8,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Selectors
      const line1 = ".manifesto-line-1";
      const line2 = ".manifesto-line-2";
      const line3 = ".manifesto-line-3";
      const nonKeywords = ".manifesto-dimmable";
      const keywordAi = ".manifesto-keyword-ai";
      const keywordExp = ".manifesto-keyword-exp";
      const subtext = ".manifesto-subtext";
      const tags = ".manifesto-tag";
      const exitArea = ".manifesto-exit-area";
      const exitBeam = ".manifesto-exit-beam";
      const hudItems = ".manifesto-hud";
      const ambientGlow = ".manifesto-ambient";
      const blueprintGrid = ".blueprint-grid-manifesto";
      const scanBeam = ".manifesto-scanbeam";

      // ── INITIAL STATE (Explicit transforms) ──
      gsap.set(line1, { yPercent: 30, opacity: 0 });
      gsap.set(line2, { yPercent: 110, opacity: 0 });
      gsap.set(line3, { yPercent: 110, opacity: 0 });
      gsap.set(subtext, { y: 20, opacity: 0 });
      gsap.set(tags, { opacity: 0, x: isDesktop ? -20 : 0 });
      gsap.set(exitArea, { y: 16, opacity: 0 });
      gsap.set(exitBeam, { scaleY: 0, transformOrigin: "top center", opacity: 0 });
      gsap.set(hudItems, { opacity: 0.3 });
      gsap.set(ambientGlow, { opacity: 0.2 });
      gsap.set(blueprintGrid, { opacity: 0.35 });
      gsap.set(scanBeam, { yPercent: 0, opacity: 0 });

      // ── ENTRANCE (0.0 - 0.25): BLUEPRINT SCAN-BEAM & MANIFESTO MATERIALIZE ─
      // Digital scan-beam sweeps down the grid immediately upon entry
      tl.fromTo(scanBeam, {
        yPercent: 0,
        opacity: 0.9,
      }, {
        yPercent: 280,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      }, 0)
      // As scan passes, Line 1 materializes cleanly
      .to(line1, {
        yPercent: 0,
        opacity: 0.85,
        duration: 0.2,
        ease: "power2.out",
      }, 0.05)
      // Blueprint grid recedes to ambient schematic foundation
      .to(blueprintGrid, {
        opacity: 0.08,
        duration: 0.4,
        ease: "power2.inOut",
      }, 0.12)
      .to(hudItems, {
        opacity: 0.8,
        duration: 0.2,
      }, 0.05)
      .to(ambientGlow, {
        opacity: 0.45,
        duration: 0.3,
      }, 0)

      // Line 2 reveals with architectural authority
      .to(line1, {
        yPercent: -15,
        opacity: 0.35,
        duration: 0.2,
        ease: "power2.inOut",
      }, 0.2)
      .to(line2, {
        yPercent: 0,
        opacity: 1,
        duration: 0.35,
        ease: "power3.out",
      }, 0.2);

      // ── SCROLL 2: REVEAL EDITORIAL SERIF "AND CRAFT LIVING EXPERIENCES" ─
      tl.to(line3, {
        yPercent: 0,
        opacity: 1,
        duration: 0.38,
        ease: "power3.out",
      }, 0.36)
      .to(tags, {
        opacity: 0.85,
        x: 0,
        stagger: 0.08,
        duration: 0.28,
        ease: "power2.out",
      }, 0.42);

      // ── SCROLL 3: SELECTIVE DOMINANCE (AI & EXPERIENCES RADIATE) ─────────
      tl.to(nonKeywords, {
        opacity: 0.26,
        duration: 0.3,
        ease: "power2.inOut",
      }, 0.62)
      .to(keywordAi, {
        color: "#FFFFFF",
        textShadow: "0 0 24px rgba(255,255,255,0.45), 0 0 45px rgba(255,255,255,0.15)",
        scale: isDesktop ? 1.015 : 1,
        duration: 0.3,
        ease: "power2.out",
      }, 0.62)
      .to(keywordExp, {
        color: "#FF2222",
        textShadow: "0 0 28px rgba(255,34,34,0.55), 0 0 50px rgba(230,0,0,0.2)",
        scale: isDesktop ? 1.015 : 1,
        duration: 0.3,
        ease: "power2.out",
      }, 0.62)
      .to(subtext, {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      }, 0.66);

      // ── SCROLL 4: UNIFIED RESOLUTION + SEAMLESS HANDOFF TO WORK ─────────
      tl.to(exitArea, {
        y: 0,
        opacity: 0.85,
        duration: 0.15,
        ease: "power2.out",
      }, 0.82)
      .to(exitBeam, {
        scaleY: 1,
        opacity: 0.9,
        duration: 0.15,
        ease: "power2.out",
      }, 0.82)
      // ── PHASE 5 (0.90 - 1.00): DISSOLVE TO VOID & PROJECT VERTICAL LASER HANDOFF
      // Statement gently recedes upward into depth
      .to([line1, line2, line3, subtext, tags], {
        y: -30,
        opacity: 0.15,
        duration: 0.18,
        stagger: 0.02,
        ease: "power2.in",
      }, 0.90)
      // Top and bottom HUDs dissolve cleanly so no borders or labels clash with incoming section
      .to([hudItems, exitArea], {
        opacity: 0,
        y: -10,
        duration: 0.16,
        ease: "power2.in",
      }, 0.92)
      // Central vertical laser beam accelerates and projects through the bottom boundary
      .to(exitBeam, {
        scaleY: 3.0,
        opacity: 1,
        duration: 0.18,
        ease: "power2.out",
      }, 0.90);

    }, containerRef);

    return () => mm.revert();
  }, [prefersReduced]);

  const scrollToWork = () => {
    const target = document.getElementById("work");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      ref={containerRef} 
      id="about" 
      data-section="manifesto" 
      className="relative w-full bg-void text-foreground select-none"
    >
      {/* Pinned Screen Viewport with generous top breathing room */}
      <div 
        ref={pinRef} 
        className="relative h-screen w-full overflow-hidden flex flex-col justify-between px-6 md:px-16 pt-24 md:pt-28 pb-8 md:pb-12"
      >
        {/* Continuous Atmospheric Background (Seamless flow from Hero) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Soft top crimson aura that inherits Hero's ambient glow */}
          <div className="manifesto-ambient absolute -top-[15vw] left-1/2 -translate-x-1/2 w-[65vw] h-[30vw] bg-red-900/20 rounded-full blur-[140px] mix-blend-screen transition-opacity" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] bg-neutral-900/20 rounded-full blur-[160px] mix-blend-screen" />
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[45vw] h-[20vw] bg-red-950/15 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute inset-0 opacity-30 mix-blend-overlay hero-grain" />
          {/* Top feather mask */}
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-void via-void/50 to-transparent pointer-events-none" />
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            BLUEPRINT MATRIX GRID RAILS (MATCHING HERO TRANSITION)
           ═════════════════════════════════════════════════════════════════ */}
        <div className="blueprint-grid-manifesto absolute inset-0 pointer-events-none z-10 opacity-35">
          {/* Horizontal Rails */}
          <div className="absolute top-20 left-0 right-0 h-[1px] bg-white/10" />
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/10" />
          <div className="absolute bottom-20 left-0 right-0 h-[1px] bg-white/10" />

          {/* Vertical Rails */}
          <div className="absolute top-0 bottom-0 left-7 md:left-12 w-[1px] bg-white/10" />
          <div className="absolute top-0 bottom-0 right-7 md:right-12 w-[1px] bg-white/10" />
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/5" />

          {/* Grid Crosshairs at Intersections */}
          <div className="absolute top-20 left-7 md:left-12 -translate-x-1/2 -translate-y-1/2 font-mono text-[11px] text-[#FF2222]/80">┼</div>
          <div className="absolute top-20 right-7 md:right-12 translate-x-1/2 -translate-y-1/2 font-mono text-[11px] text-[#FF2222]/80">┼</div>
          <div className="absolute bottom-20 left-7 md:left-12 -translate-x-1/2 translate-y-1/2 font-mono text-[11px] text-[#FF2222]/80">┼</div>
          <div className="absolute bottom-20 right-7 md:right-12 translate-x-1/2 translate-y-1/2 font-mono text-[11px] text-[#FF2222]/80">┼</div>

          {/* Digital Scan-beam Laser Line */}
          <div className="manifesto-scanbeam absolute top-20 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF2222] to-transparent shadow-[0_0_15px_rgba(255,34,34,0.9)] opacity-0 pointer-events-none" />
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            PERIMETER HUD: CLEAN EDITORIAL CADENCE
           ═════════════════════════════════════════════════════════════════ */}
        <header className="manifesto-hud relative z-10 w-full flex items-center justify-between border-b border-white/5 pb-4 md:pb-5">
          <div className="flex items-center gap-3">
            <Crosshair />
            <span className="font-mono text-[10px] md:text-[12px] tracking-[0.35em] text-white/80 uppercase font-medium">
              01 — PHILOSOPHY
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline font-mono text-[10px] md:text-[11px] tracking-[0.28em] text-white/40 uppercase">
              PERSPECTIVE · COGNITION & CRAFT
            </span>
            <span className="font-mono text-[10px] md:text-[12px] tracking-[0.3em] text-[#FF2222] font-semibold">
              01 · 04
            </span>
          </div>
        </header>

        {/* ═════════════════════════════════════════════════════════════════
            CENTER TYPOGRAPHIC STATEMENT
           ═════════════════════════════════════════════════════════════════ */}
        <div className="relative z-10 my-auto w-full max-w-6xl mx-auto flex flex-col justify-center">
          
          {/* INITIAL: Subdued Hook */}
          <div className="overflow-hidden pb-1 mb-3 md:mb-5">
            <p className="manifesto-line-1 font-mono text-xs md:text-sm tracking-[0.32em] uppercase text-white/65 flex items-center gap-3">
              <span className="text-[#FF2222] font-semibold tracking-wider">—</span>
              <span>I DON&apos;T JUST BUILD WEBSITES.</span>
            </p>
          </div>

          {/* SCROLL 1: Line 2 — Architectural Industrial Sans */}
          <div className="overflow-hidden py-1.5 md:py-2">
            <h2 className="manifesto-line-2 font-display font-bold text-[7.2vw] md:text-[5.4vw] lg:text-[4.6vw] leading-[1.0] tracking-[-0.02em] uppercase text-ghost">
              <span className="manifesto-dimmable inline-block mr-3 sm:mr-4 md:mr-5 transition-all">I ENGINEER</span>
              <span className="manifesto-keyword-ai inline-block text-ghost transition-all drop-shadow-none font-bold">
                INTELLIGENT SYSTEMS
              </span>
            </h2>
          </div>

          {/* SCROLL 2: Line 3 — Architectural Industrial Sans */}
          <div className="overflow-hidden py-1.5 md:py-2 mt-1 md:mt-2">
            <h2 className="manifesto-line-3 font-display font-bold text-[7.2vw] md:text-[5.4vw] lg:text-[4.6vw] leading-[1.0] tracking-[-0.02em] uppercase text-ghost">
              <span className="manifesto-dimmable inline-block mr-3 sm:mr-4 md:mr-5 transition-all">AND CRAFT</span>
              <span className="manifesto-keyword-exp inline-block text-ghost transition-all drop-shadow-none font-bold">
                LIVING EXPERIENCES.
              </span>
            </h2>
          </div>

          {/* SCROLL 3: Sub-Manifesto & Architectural Index (Replaces stacked pills) */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mt-8 md:mt-12 gap-8 pt-6 border-t border-white/5">
            
            {/* Philosophical Subtext */}
            <div className="manifesto-subtext max-w-xl">
              <p className="font-sans text-sm md:text-[15px] leading-relaxed text-white/70 font-light tracking-wide">
                Where autonomous neural architectures converge with fluid, tactile interaction. 
                Every system is built to reason; every interface is engineered to resonate.
              </p>
            </div>

            {/* Architectural Telemetry Index — Minimalist lines instead of clunky pill buttons */}
            <div className="manifesto-tags-list flex flex-col sm:flex-row md:flex-col gap-2.5 sm:gap-6 md:gap-2 font-mono text-[10px] md:text-[11px] tracking-[0.24em] text-white/50 shrink-0">
              <div className="manifesto-tag flex items-center gap-3">
                <span className="text-[#FF2222] font-semibold text-[11px]">01</span>
                <span className="w-5 h-[1px] bg-white/20" />
                <span className="text-white/85 uppercase font-medium tracking-[0.26em]">NEURAL ARCHITECTURE</span>
              </div>
              <div className="manifesto-tag flex items-center gap-3">
                <span className="text-[#FF2222] font-semibold text-[11px]">02</span>
                <span className="w-5 h-[1px] bg-white/20" />
                <span className="text-white/85 uppercase font-medium tracking-[0.26em]">AGENTIC WORKFLOWS</span>
              </div>
              <div className="manifesto-tag flex items-center gap-3">
                <span className="text-[#FF2222] font-semibold text-[11px]">03</span>
                <span className="w-5 h-[1px] bg-white/20" />
                <span className="text-white/85 uppercase font-medium tracking-[0.26em]">TACTILE INTERACTION</span>
              </div>
            </div>

          </div>

        </div>

        {/* ═════════════════════════════════════════════════════════════════
            SECTION EXIT: ANTICIPATION INTO SELECTED WORK
           ═════════════════════════════════════════════════════════════════ */}
        <footer className="relative z-10 w-full flex items-center justify-between border-t border-white/5 pt-4 md:pt-5">
          
          <div className="manifesto-exit-area flex items-center gap-3">
            <span className="font-mono text-[9px] md:text-[11px] tracking-[0.3em] text-white/40 uppercase">
              01 — PHILOSOPHICAL FOUNDATION
            </span>
          </div>

          <div className="manifesto-exit-area">
            <button
              onClick={scrollToWork}
              className="group flex items-center gap-3 cursor-pointer py-1.5 px-3 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10 transition-all focus:outline-none"
              aria-label="Scroll toward Work Archive"
            >
              <span className="font-mono text-[10px] md:text-[12px] tracking-[0.32em] text-[#FF2222] font-semibold uppercase group-hover:text-[#FF4444] transition-colors drop-shadow-[0_0_10px_rgba(255,34,34,0.4)]">
                ENTER ARCHIVE
              </span>
              <div className="w-6 h-6 rounded-full border border-[#FF2222]/40 flex items-center justify-center text-[#FF2222] group-hover:border-[#FF2222] group-hover:bg-[#FF2222]/10 transition-all">
                <ArrowDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
              </div>
            </button>
          </div>

          {/* Central Vertical Kinetic Guide Line */}
          <div className="manifesto-exit-beam absolute -bottom-8 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-gradient-to-b from-[#FF2222]/80 to-transparent pointer-events-none" />

        </footer>

      </div>
    </section>
  );
}
