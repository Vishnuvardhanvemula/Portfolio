"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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

export default function ProjectShowcase() {
    const sectionRef = useRef(null);
    const scrollContainerRef = useRef(null);
    const prefersReduced = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReduced || !sectionRef.current || !scrollContainerRef.current) return;

        const mm = gsap.matchMedia();

        mm.add({
            isDesktop: "(min-width: 1024px)",
            isMobile: "(max-width: 1023px)"
        }, (context) => {
            const { isDesktop } = context.conditions;
            
            if (!isDesktop) return; // Don't pin on mobile/tablet, let it stack normally

            const scrollContainer = scrollContainerRef.current;
            const sections = gsap.utils.toArray(".showcase-panel");

            // Horizontal Scroll Timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (sections.length - 1),
                    // the total scrolling distance should equal the width of all panels combined
                    end: () => "+=" + scrollContainer.scrollWidth,
                }
            });

            tl.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none"
            });
            
            return () => {
                tl.kill();
            };
        });

        return () => mm.revert();
    }, [prefersReduced]);

    return (
        <section ref={sectionRef} id="project-showcase" className="relative lg:h-screen w-full bg-void overflow-hidden flex items-center lg:items-stretch py-24 lg:py-0 border-y border-white/5">
            
            {/* Background Details */}
            <div className="absolute inset-0 pointer-events-none opacity-30 hidden lg:block z-0">
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/5" />
                <div className="absolute top-24 left-0 right-0 h-[1px] bg-white/10" />
                <div className="absolute bottom-24 left-0 right-0 h-[1px] bg-white/10" />
                <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-white/10" />
                <div className="absolute top-0 bottom-0 right-12 w-[1px] bg-white/10" />
            </div>

            {/* Title HUD */}
            <div className="lg:absolute lg:top-6 lg:left-6 xl:left-16 z-20 flex items-center gap-4 text-[10px] md:text-xs font-mono tracking-widest text-[#FF2222] px-6 lg:px-0 mb-12 lg:mb-0">
                <Crosshair className="text-[#FF2222] hidden lg:block" />
                <span>ARCHIVE // ACTIVE DEPLOYMENTS</span>
            </div>

            {/* Horizontal Scroll Container */}
            <div 
                ref={scrollContainerRef} 
                className="flex flex-col lg:flex-row h-full w-full lg:w-fit items-center z-10 relative"
            >
                {projects.map((project, index) => (
                    <div 
                        key={project.id} 
                        className="showcase-panel w-full lg:w-screen h-full flex-shrink-0 flex flex-col justify-center px-6 lg:px-16 xl:px-32 mb-20 lg:mb-0"
                    >
                        <div className="w-full h-full lg:h-[70vh] max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 relative">
                            
                            {/* Visual Block (Left) */}
                            <div className="relative w-full lg:w-1/2 h-64 lg:h-full border border-white/15 bg-black/50 overflow-hidden group rounded-sm">
                                <div className="absolute top-3 left-3 font-mono text-[9px] text-[#FF2222] z-20">
                                    SYS.{index.toString().padStart(2, "0")}
                                </div>
                                
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 mix-blend-screen group-hover:opacity-40 transition-opacity duration-700 z-10`} />
                                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-10" />
                                
                                {/* Big Abstract Letter/Number for visual */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000 z-10">
                                    <span className="font-display font-black text-[20vh] lg:text-[40vh] select-none pointer-events-none text-white">
                                        {(index + 1).toString().padStart(2, "0")}
                                    </span>
                                </div>
                            </div>

                            {/* Data Block (Right) */}
                            <div className="w-full lg:w-1/2 h-full flex flex-col justify-center lg:py-12">
                                <div className="font-mono text-xs text-[#FF2222] tracking-widest mb-4 uppercase">
                                    [ {project.year} // {project.tags[0]} ]
                                </div>
                                <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-ghost tracking-tight uppercase mb-2">
                                    {project.title}
                                </h2>
                                <p className="font-mono text-[10px] md:text-xs text-white/50 tracking-widest uppercase mb-8">
                                    {project.subtitle}
                                </p>

                                <p className="text-sm md:text-base text-white/70 leading-relaxed font-light mb-8 lg:mb-12 max-w-lg">
                                    {project.description}
                                </p>

                                {/* Telemetry Data Grid */}
                                <div className="grid grid-cols-2 gap-4 border-y border-white/10 py-6 mb-8 max-w-lg">
                                    <div>
                                        <div className="font-mono text-[9px] text-[#FF2222] uppercase tracking-widest mb-1.5">Architecture</div>
                                        <div className="font-mono text-[10px] text-white/80 uppercase tracking-wider truncate">{project.tags.slice(0,2).join(" · ")}</div>
                                    </div>
                                    <div>
                                        <div className="font-mono text-[9px] text-[#FF2222] uppercase tracking-widest mb-1.5">Status</div>
                                        <div className="font-mono text-[10px] text-white/80 uppercase tracking-wider">DEPLOYED // ACTIVE</div>
                                    </div>
                                </div>

                                <div>
                                    <Link href={`/projects/${project.id}`}>
                                        <div className="inline-flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-widest text-[#FF2222] hover:text-white transition-colors group cursor-pointer border border-[#FF2222]/30 hover:border-white/50 px-6 py-3 bg-[#FF2222]/5 hover:bg-white/5">
                                            ACCESS SYSTEM LOG
                                            <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-6 right-6 md:right-16 z-20 items-center gap-4 text-[10px] font-mono tracking-widest text-white/40 hidden lg:flex">
                <span>SCROLL TO TRAVERSE HORIZONTALLY</span>
                <div className="w-12 h-[1px] bg-white/20 relative overflow-hidden">
                    <div className="absolute inset-y-0 left-0 w-1/3 bg-[#FF2222] animate-marquee" />
                </div>
            </div>
        </section>
    );
}
