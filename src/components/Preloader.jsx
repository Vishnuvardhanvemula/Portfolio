"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

const SplitText = ({ text, containerClassName }) => {
  return (
    <h1 className={cn("flex overflow-hidden", containerClassName)}>
      {text.split("").map((char, index) => (
        <span 
          key={index} 
          className="char-element inline-block"
          style={{ whiteSpace: "pre" }}
        >
          {char}
        </span>
      ))}
    </h1>
  );
};

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  
  const prefersReduced = usePrefersReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (prefersReduced) {
      const t = setTimeout(() => onComplete?.(), 300);
      return () => clearTimeout(t);
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });

      // 0. Initial Setup
      gsap.set(".char-element", { 
        yPercent: 150, 
        scale: 0.8,
        filter: "blur(20px)",
        rotationX: () => gsap.utils.random(-60, 60), 
        rotationY: () => gsap.utils.random(-60, 60), 
        rotationZ: () => gsap.utils.random(-20, 20),
        opacity: 0 
      });
      gsap.set(".system-text", { opacity: 0 });
      gsap.set(".progress-container", { opacity: 0, scale: 0.8, filter: "blur(10px)" });

      // STAGE 01: THE VOID (0 - 1s)
      tl.to(".system-text", {
        opacity: 0.6,
        duration: 0.1,
        stagger: { each: 0.1, yoyo: true, repeat: 1 },
        ease: "steps(1)"
      })
      .to(".system-text", {
        opacity: 0.3,
        duration: 0.1,
        stagger: 0.1,
      });

      // STAGE 02: IDENTITY ASSEMBLY (1s - 3s)
      tl.to(".char-element", {
        yPercent: 0,
        scale: 1,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        filter: "blur(0px)",
        opacity: 1,
        duration: 2,
        stagger: { each: 0.04, from: "random" },
        ease: "expo.out"
      }, "1.0");

      // STAGE 03: KINETIC PROGRESS (0 - 4s)
      const progressObj = { val: 0 };
      tl.to(progressObj, {
        val: 100,
        duration: 4.0,
        ease: "power3.inOut",
        onUpdate: () => setProgress(Math.floor(progressObj.val))
      }, 0)
      .to(".progress-container", {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "expo.out"
      }, 0.5);

      // STAGE 04: THE LEAK (Glimpses of Hero via opacity glitch)
      tl.to(".preloader-bg", {
        opacity: 0.3,
        duration: 0.05,
        ease: "none",
        yoyo: true,
        repeat: 5
      }, "2.5");

      // STAGE 05: THE 100% MOMENT (4.2s - 5.5s)
      tl.to(".progress-container", {
        scale: 1.5,
        opacity: 0,
        filter: "blur(20px)",
        duration: 0.8,
        ease: "expo.in"
      }, "4.2")
      .to(".system-text", {
        opacity: 0,
        duration: 0.2
      }, "4.2")
      // The massive wipe (Camera enters website)
      .to(".preloader-bg", {
        clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)", // Center split wipe
        duration: 1.2,
        ease: "expo.inOut"
      }, "4.4");

    }, containerRef);

    return () => ctx.revert();
  }, [mounted, prefersReduced, onComplete]);

  if (!mounted) return null;

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[999] pointer-events-none"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
      aria-busy={true}
      aria-label="Loading portfolio experience"
    >
      {/* The Black Background Mask (Tears open to reveal Hero) */}
      <div 
        className="absolute inset-0 bg-void preloader-bg origin-center" 
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }} 
      />

      {/* STAGE 01: The Void Text */}
      <div className="absolute inset-0 z-10 p-6 md:p-12 flex flex-col justify-between pointer-events-none">
        <div className="flex justify-between w-full mt-12 md:mt-24">
          <span className="font-mono text-[9px] md:text-[10px] tracking-[0.4em] text-white/70 uppercase system-text">
            SYSTEM DETECTED
          </span>
          <span className="font-mono text-[9px] md:text-[10px] tracking-[0.4em] text-white/70 uppercase system-text">
            BUILD 01
          </span>
        </div>
        <div className="flex justify-between w-full mb-12 md:mb-24">
          <span className="font-mono text-[9px] md:text-[10px] tracking-[0.4em] text-white/70 uppercase system-text">
            VISUAL ENGINE INITIALIZING
          </span>
          <span className="font-mono text-[9px] md:text-[10px] tracking-[0.4em] text-white/70 uppercase system-text">
            STATUS: ONLINE
          </span>
        </div>
      </div>

      {/* STAGE 03: Kinetic Progress */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-30 progress-container origin-bottom-right flex flex-col items-end gap-1 md:gap-2 text-right">
         <span className="font-mono text-[16vw] md:text-[12vw] text-accent font-bold tracking-tighter drop-shadow-[0_0_12px_rgba(230,0,0,0.8)] leading-none">
           {progress}%
         </span>
         <span className="font-mono text-[9px] md:text-[10px] tracking-[0.4em] text-white uppercase opacity-70">
           Calibrating
         </span>
      </div>

      {/* STAGE 02: Identity Assembly (Matches Hero Layout Exactly) */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col items-center leading-[0.8] tracking-tighter w-full max-w-[90vw] md:max-w-none">
          <div className="overflow-hidden pb-2">
            <SplitText 
              text="VISHNU" 
              containerClassName="font-display font-bold text-[18vw] md:text-[14vw] text-ghost uppercase lockup-first tracking-[-0.04em]" 
            />
          </div>
          <div className="overflow-hidden -mt-[6vw] md:-mt-[4vw] ml-[15vw] md:ml-[20vw] pb-6">
            <SplitText 
              text="Vardhan." 
              containerClassName="font-serif italic font-medium text-[20vw] md:text-[16vw] text-outline lockup-last pr-4 mix-blend-screen" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
