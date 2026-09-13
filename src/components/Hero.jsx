"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const Crosshair = ({ className = "" }) => (
  <svg 
    className={cn(
      "w-4 h-4 text-white/50 group-hover:text-white group-hover:rotate-90 transition-all duration-500 ease-out select-none pointer-events-none",
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

export default function Hero() {
  const containerRef = useRef(null);
  const pinRef = useRef(null);
  const [istTime, setIstTime] = useState("");
  
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { 
        timeZone: "Asia/Kolkata", 
        hour: "2-digit", 
        minute: "2-digit", 
        second: "2-digit", 
        hour12: false 
      };
      setIstTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Simple Cross-Dissolve Choreography
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top", 
          scrub: 1.0,
        }
      });

      const lockupFirst = ".lockup-first";
      const lockupLast = ".lockup-last";
      const hudTop = ".hud-corner-top";
      const hudBottom = ".hud-corner-bottom";
      const ambient1 = ".animate-ambient-1";
      const ambient2 = ".animate-ambient-2";

      // ── SIMPLE CROSS-DISSOLVE EFFECT ──────────────
      // Slow fade and slight drift upwards
      tl.to([lockupFirst, lockupLast, ".blueprint-box"], {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      }, 0)
      // Fade out HUDs cleanly
      .to(hudTop, {
        y: -20,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      }, 0)
      .to(hudBottom, {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      }, 0)
      // Subtle parallax on ambients
      .to([ambient1, ambient2], {
        yPercent: -15,
        opacity: 0.2,
        duration: 1,
        ease: "none",
      }, 0);

    }, containerRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  const scrollToContent = () => {
    const target = document.getElementById("about");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-void">
      <section 
        ref={containerRef} 
        id="home" 
        className="relative h-screen w-full overflow-hidden bg-void flex flex-col justify-between px-4 sm:px-6 md:px-12 lg:px-16 pt-28 pb-8 md:pb-12 text-foreground"
      >
        
        {/* Ambient Cinematic Background (Crimson & Ember) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-[50vw] h-[50vw] bg-red-600/20 rounded-full blur-[100px] mix-blend-screen animate-ambient-1" />
          <div className="absolute bottom-[10%] right-[10%] w-[60vw] h-[60vw] bg-orange-600/20 rounded-full blur-[120px] mix-blend-screen animate-ambient-2" />
          <div className="absolute top-[40%] left-[40%] w-[40vw] h-[40vw] bg-red-950/30 rounded-full blur-[110px] mix-blend-screen animate-ambient-3" />
          <div className="absolute inset-0 opacity-40 mix-blend-overlay hero-grain" />
          {/* Seamless Bottom Feather Mask */}
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent to-void pointer-events-none" />
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            PERIMETER HUD CORNER SPECIFICATIONS
           ═════════════════════════════════════════════════════════════════ */}

        {/* 1. TOP-LEFT: Crosshair + AI ENGINEER / CREATIVE DEVELOPER */}
        <div className="hud-corner-top absolute top-7 left-7 md:top-12 md:left-12 z-20 flex flex-col items-start gap-3 group cursor-default select-none pointer-events-auto">
          <Crosshair />
          <div className="flex flex-col gap-1.5 ml-5 md:ml-6 transition-transform duration-300 ease-out group-hover:translate-x-1.5">
            <span className="font-mono text-[11px] md:text-[13px] tracking-[0.32em] text-white font-medium drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]">
              AI ENGINEER
            </span>
            <span className="font-mono text-[11px] md:text-[13px] tracking-[0.32em] text-white/65 font-medium group-hover:text-white/90 transition-colors">
              CREATIVE DEVELOPER
            </span>
          </div>
        </div>

        {/* 2. TOP-RIGHT: Crosshair + Quotation */}
        <div className="hud-corner-top absolute top-7 right-7 md:top-12 md:right-12 z-20 flex flex-col items-end gap-3 group cursor-default select-none pointer-events-auto">
          <Crosshair />
          <div className="flex flex-col items-end mr-5 md:mr-6 transition-transform duration-300 ease-out group-hover:-translate-x-1.5 text-right">
            <span className="font-mono text-[11px] md:text-[13px] tracking-[0.28em] text-white/90 font-medium uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] group-hover:text-white transition-colors">
              “FORM FOLLOWS INTELLIGENCE”
            </span>
            <span className="font-mono text-[10px] md:text-[11px] tracking-[0.24em] text-white/50 uppercase mt-0.5 group-hover:text-white/75 transition-colors">
              WHERE CODE MEETS AESTHETICS
            </span>
          </div>
        </div>

        {/* 3. BOTTOM-LEFT: BASED IN INDIA + Crosshair */}
        <div className="hud-corner-bottom absolute bottom-7 left-7 md:bottom-12 md:left-12 z-20 flex flex-col items-start gap-3 group cursor-default select-none pointer-events-auto">
          <div className="flex flex-col ml-5 md:ml-6 transition-transform duration-300 ease-out group-hover:translate-x-1.5">
            <span className="font-mono text-[11px] md:text-[13px] tracking-[0.32em] text-white/85 font-medium group-hover:text-white transition-colors">
              BASED IN INDIA
            </span>
            {istTime && (
              <span className="font-mono text-[9px] md:text-[10px] tracking-[0.24em] text-white/40 uppercase mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {istTime} IST • 17.3850° N, 78.4867° E
              </span>
            )}
          </div>
          <Crosshair />
        </div>

        {/* 4. BOTTOM-RIGHT: SCROLL TO EXPLORE + Crosshair */}
        <div className="hud-corner-bottom absolute bottom-7 right-7 md:bottom-12 md:right-12 z-20 flex flex-col items-end gap-3 group select-none pointer-events-auto">
          <button 
            onClick={scrollToContent}
            className="flex items-center mr-5 md:mr-6 transition-transform duration-300 ease-out group-hover:-translate-x-1.5 cursor-pointer focus:outline-none"
            aria-label="Scroll to explore portfolio sections"
          >
            <span className="font-mono text-[11px] md:text-[13px] tracking-[0.32em] text-[#FF2222] font-semibold uppercase drop-shadow-[0_0_10px_rgba(255,34,34,0.75)] group-hover:drop-shadow-[0_0_18px_rgba(255,34,34,1)] group-hover:text-[#FF4444] transition-all">
              SCROLL TO EXPLORE
            </span>
          </button>
          <Crosshair className="group-hover:text-[#FF2222] group-hover:scale-110" />
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            BLUEPRINT MATRIX GRID RAILS (TRANSITION TO MANIFESTO)
           ═════════════════════════════════════════════════════════════════ */}
        <div className="blueprint-grid absolute inset-0 pointer-events-none z-10 opacity-0">
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

          {/* Blueprint Telemetry Readout */}
          <div className="blueprint-telemetry absolute bottom-28 left-1/2 -translate-x-1/2 font-mono text-[9px] md:text-[10px] tracking-[0.35em] text-white/50 uppercase opacity-0 text-center whitespace-nowrap">
            [ DECONSTRUCTING IDENTITY · COMPILING SYSTEM LOGIC ]
          </div>
        </div>

        {/* Center Typographic Lockup */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center pointer-events-none w-full h-full">
          <div className="blueprint-box relative flex flex-col items-center leading-[0.8] tracking-tighter p-6 md:p-12">
            {/* Wireframe Bounding Brackets */}
            <span className="blueprint-bracket absolute top-0 left-0 font-mono text-xl text-[#FF2222] opacity-0 select-none">┌</span>
            <span className="blueprint-bracket absolute top-0 right-0 font-mono text-xl text-[#FF2222] opacity-0 select-none">┐</span>
            <span className="blueprint-bracket absolute bottom-0 left-0 font-mono text-xl text-[#FF2222] opacity-0 select-none">└</span>
            <span className="blueprint-bracket absolute bottom-0 right-0 font-mono text-xl text-[#FF2222] opacity-0 select-none">┘</span>

            <div className="overflow-hidden pb-2">
              <h1 className="font-display font-bold text-[18vw] md:text-[14vw] text-ghost uppercase lockup-first tracking-[-0.04em]">
                VISHNU
              </h1>
            </div>
            <div className="overflow-hidden -mt-[6vw] md:-mt-[4vw] ml-[20vw] pb-6">
              <h1 className="font-serif italic font-medium text-[20vw] md:text-[16vw] text-outline lockup-last pr-4 mix-blend-screen">
                Vardhan.
              </h1>
            </div>
          </div>
        </div>

      </section>
    </section>
  );
}
