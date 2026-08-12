"use client";

import NeuralBackground from "@/components/ui/NeuralBackground";
import GlitchText from "@/components/ui/GlitchText";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowRight, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center">
            {/* Background Layer */}
            <NeuralBackground />

            {/* Content Layer */}
            <div className="z-10 px-4 max-w-5xl w-full flex flex-col items-center gap-6">

                {/* Tagline / Terminal Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-xs md:text-sm font-mono text-primary"
                >
                    <Terminal size={12} />
                    <span>SYSTEM_ONLINE</span>
                    <span className="relative flex h-2 w-2 ml-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                </motion.div>

                {/* Main Heading with Glitch Effect */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-4">
                    <div className="flex flex-col md:block">
                        <span>ARCHITECTING</span>{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-cyan-500">
                            <GlitchText text="INTELLIGENCE" />
                        </span>
                    </div>
                </h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance leading-relaxed"
                >
                    I build <span className="text-foreground font-medium">living systems</span> that bridge the gap between human intent and machine execution.
                </motion.p>

                {/* Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 mt-8"
                >
                    <MagneticButton>
                        <a href="#work" className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-primary px-8 font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105 shadow-[0_0_20px_-5px_rgba(79,70,229,0.5)]">
                            <span className="mr-2">Initialize Projects</span>
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </MagneticButton>

                    <a href="https://github.com/Vishnuvardhanvemula" target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center px-8 font-mono text-sm font-medium transition-colors hover:text-primary hover:bg-white/5 border border-transparent hover:border-white/10 rounded-md">
                        ./view_github_profile
                    </a>
                </motion.div>
            </div>

            {/* Decoder Overlay - Decorative */}
            <div className="absolute bottom-10 left-10 hidden md:block text-xs font-mono text-muted-foreground/30">
                <p>COORDINATES: 12.9716° N, 77.5946° E</p>
                <p>STATUS: OPTIMIZED</p>
            </div>
        </section>
    );
}
