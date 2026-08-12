"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { motion, AnimatePresence } from "framer-motion";

const Scene = dynamic(() => import("@/components/3d/Scene"), { ssr: false });

const roles = [
    "AI Engineer",
    "Full Stack Developer",
    "ML Enthusiast",
    "Problem Solver",
];

function SectionLabel({ number, label }) {
    return (
        <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-primary/70 tracking-widest">// {number.toString().padStart(2, "0")}</span>
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">{label}</span>
        </div>
    );
}

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0 opacity-60">
                <Scene />
            </div>

            {/* Radial gradient overlay to fade 3D into background */}
            <div className="absolute inset-0 z-[1] bg-radial-gradient pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, var(--background) 100%)"
                }}
            />

            {/* Grid overlay */}
            <div
                className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
                    backgroundSize: "80px 80px"
                }}
            />

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-start justify-center">

                {/* Availability Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                    <span className="text-xs font-medium text-green-400 font-mono">Open to opportunities</span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold tracking-tighter text-white leading-none mb-4"
                >
                    Vishnu
                    <br />
                    <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                        Vardhan
                    </span>
                </motion.h1>

                {/* Animated Role */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-center gap-3 mb-8 h-10"
                >
                    <span className="text-muted-foreground text-lg md:text-2xl font-light">I&apos;m a</span>
                    <div className="relative overflow-hidden h-10 min-w-[200px]">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={roleIndex}
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -40, opacity: 0 }}
                                transition={{ duration: 0.35, ease: "easeInOut" }}
                                className="absolute text-lg md:text-2xl font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent whitespace-nowrap"
                            >
                                {roles[roleIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.7 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed mb-12 font-light"
                >
                    Building intelligent systems at the intersection of{" "}
                    <span className="text-foreground font-medium">code</span> and{" "}
                    <span className="text-foreground font-medium">data</span>.
                    From AI agents to full-stack apps — I ship things that matter.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="flex flex-wrap items-center gap-4"
                >
                    <MagneticButton>
                        <a
                            href="#work"
                            className="group inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-8 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30"
                        >
                            <span className="mr-2 text-base">View My Work</span>
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </MagneticButton>

                    <MagneticButton>
                        <a
                            href="/resume.pdf"
                            download
                            className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white/5 border border-white/15 text-white/90 px-8 font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/30"
                        >
                            <Download className="h-4 w-4 text-muted-foreground" />
                            <span className="text-base">Resume</span>
                        </a>
                    </MagneticButton>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="font-mono text-xs text-muted-foreground tracking-widest">SCROLL</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[1px] h-12 bg-gradient-to-b from-primary/60 to-transparent"
                />
            </motion.div>
        </section>
    );
}
