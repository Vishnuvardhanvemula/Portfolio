"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const pinRef = useRef(null);
  
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // 1. Cinematic Scroll Choreography
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: "+=150%", // Pin for 150% of viewport height
          scrub: 1.2,    // Buttery smooth scrub
          pin: true,
          anticipatePin: 1,
        }
      });

      const lockupFirst = ".lockup-first";
      const lockupLast = ".lockup-last";
      const microTexts = gsap.utils.toArray(".micro-text");
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
        yPercent: -30, // Moves slightly slower than the first name to create parallax
        opacity: 0,
        filter: "blur(12px)",
        ease: "power2.inOut",
      }, 0)
      .to(microTexts, {
        opacity: 0,
        y: -20,
        stagger: 0.02,
        ease: "power2.in",
      }, 0);

    }, containerRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section ref={containerRef} className="relative w-full bg-void">
      {/* Pinned Container - Exact match to Preloader DOM */}
      <div ref={pinRef} className="relative h-screen w-full overflow-hidden">
        
        {/* Structural Crosshairs */}
        <svg className="absolute top-8 left-8 w-3 h-3 text-white/40 z-10 pointer-events-none" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1"><path d="M6 0V12M0 6H12"/></svg>
        <svg className="absolute top-8 right-8 w-3 h-3 text-white/40 z-10 pointer-events-none" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1"><path d="M6 0V12M0 6H12"/></svg>
        <svg className="absolute bottom-8 left-8 w-3 h-3 text-white/40 z-10 pointer-events-none" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1"><path d="M6 0V12M0 6H12"/></svg>
        <svg className="absolute bottom-8 right-8 w-3 h-3 text-white/40 z-10 pointer-events-none" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1"><path d="M6 0V12M0 6H12"/></svg>

        {/* Ambient Cinematic Background (Crimson & Ember) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-[50vw] h-[50vw] bg-red-600/20 rounded-full blur-[100px] mix-blend-screen animate-ambient-1" />
          <div className="absolute bottom-[10%] right-[10%] w-[60vw] h-[60vw] bg-orange-600/20 rounded-full blur-[120px] mix-blend-screen animate-ambient-2" />
          <div className="absolute top-[40%] left-[40%] w-[40vw] h-[40vw] bg-purple-900/30 rounded-full blur-[90px] mix-blend-screen animate-ambient-3" />
          <div className="absolute inset-0 opacity-40 mix-blend-overlay hero-grain" />
        </div>

        {/* Perimeter Micro-Grid */}
        <div className="absolute inset-0 z-10 p-6 md:p-12 pointer-events-none flex flex-col justify-between">
          {/* Top */}
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-1 overflow-hidden">
              <span className="font-mono text-[9px] tracking-[0.4em] text-white uppercase block micro-text">
                AI Engineer
              </span>
              <span className="font-mono text-[9px] tracking-[0.4em] text-white/70 uppercase block micro-text">
                Creative Developer
              </span>
            </div>
            <div className="overflow-hidden">
              <span className="font-mono text-[9px] tracking-[0.4em] text-white/70 uppercase block micro-text">
                [ ONLINE ]
              </span>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex justify-between items-end">
            <div className="overflow-hidden">
              <span className="font-mono text-[9px] tracking-[0.4em] text-white/70 uppercase block micro-text">
                Based in India
              </span>
            </div>
            <div className="flex gap-6 overflow-hidden">
              <span className="font-mono text-[9px] tracking-[0.4em] text-white uppercase block micro-text">Github</span>
              <span className="font-mono text-[9px] tracking-[0.4em] text-white uppercase block micro-text">LinkedIn</span>
            </div>
            <div className="overflow-hidden">
              <span className="font-mono text-[9px] tracking-[0.4em] text-accent uppercase block micro-text drop-shadow-[0_0_8px_rgba(230,0,0,0.8)]">
                Scroll to Explore
              </span>
            </div>
          </div>
        </div>

        {/* Massive Typographic Lockup */}
        <div className="relative z-20 flex-1 flex flex-col items-center justify-center pointer-events-none w-full h-full">
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
