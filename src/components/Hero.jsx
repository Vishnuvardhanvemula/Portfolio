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
      // Cinematic Scroll Choreography
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        }
      });

      const lockupFirst = ".lockup-first";
      const lockupLast = ".lockup-last";
      const hudTop = ".hud-corner-top";
      const hudBottom = ".hud-corner-bottom";
      const ambient1 = ".animate-ambient-1";
      const ambient2 = ".animate-ambient-2";
      const grain = ".hero-grain";

      tl.to(ambient1, {
        scale: 1.5,
        opacity: 0.8,
        yPercent: -20,
        ease: "none",
      }, 0)
      .to(ambient2, {
        scale: 1.5,
        opacity: 0.8,
        yPercent: 20,
        ease: "none",
      }, 0)
      .to(grain, {
        opacity: 0.7,
        ease: "none",
      }, 0)
      .to(lockupFirst, {
        yPercent: -50,
        opacity: 0,
        filter: "blur(12px)",
        ease: "power2.inOut",
      }, 0)
      .to(lockupLast, {
        yPercent: -30,
        opacity: 0,
        filter: "blur(12px)",
        ease: "power2.inOut",
      }, 0)
      .to(hudTop, {
        opacity: 0,
        y: -30,
        filter: "blur(6px)",
        stagger: 0.04,
        ease: "power2.in",
      }, 0)
      .to(hudBottom, {
        opacity: 0,
        y: 30,
        filter: "blur(6px)",
        stagger: 0.04,
        ease: "power2.in",
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
    <section ref={containerRef} className="relative w-full bg-void">
      {/* Pinned Viewport Container */}
      <div ref={pinRef} className="relative h-screen w-full overflow-hidden">
        
        {/* Ambient Cinematic Background (Crimson & Ember) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-[50vw] h-[50vw] bg-red-600/20 rounded-full blur-[100px] mix-blend-screen animate-ambient-1" />
          <div className="absolute bottom-[10%] right-[10%] w-[60vw] h-[60vw] bg-orange-600/20 rounded-full blur-[120px] mix-blend-screen animate-ambient-2" />
          <div className="absolute top-[40%] left-[40%] w-[40vw] h-[40vw] bg-purple-900/30 rounded-full blur-[90px] mix-blend-screen animate-ambient-3" />
          <div className="absolute inset-0 opacity-40 mix-blend-overlay hero-grain" />
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

        {/* Center Typographic Lockup */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center pointer-events-none w-full h-full">
          <div className="flex flex-col items-center leading-[0.8] tracking-tighter">
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

      </div>
    </section>
  );
}
