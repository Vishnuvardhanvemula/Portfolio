"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Loader from "@/components/Loader";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import { projects } from "@/data/projects";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function SectionLabel({ number, label }) {
    return (
        <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-primary/70 tracking-widest">// {number.toString().padStart(2, "0")}</span>
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">{label}</span>
        </div>
    );
}

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) return;

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: "vertical",
            gestureDirection: "vertical",
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, [loading]);

    return (
        <>
            {/* Custom Cursor */}
            <CustomCursor />

            {/* Loader */}
            {loading && <Loader onComplete={() => setLoading(false)} />}

            {/* Main Content */}
            <main
                className="min-h-screen bg-background text-foreground overflow-hidden"
                style={{ opacity: loading ? 0 : 1, transition: "opacity 0.3s ease" }}
            >
                {/* Scroll progress bar */}
                <ScrollProgress />

                <Navbar />

                {/* Hero */}
                <Hero />

                {/* Sections */}
                <div className="relative z-10 bg-background">

                    {/* About */}
                    <div className="section-divider" />
                    <About />

                    {/* Skills */}
                    <div className="section-divider" />
                    <Skills />

                    {/* Experience / Journey */}
                    <div className="section-divider" />
                    <Experience />

                    {/* Selected Work */}
                    <div className="section-divider" />
                    <section id="work" className="w-full max-w-7xl mx-auto px-6 py-24">
                        <SectionLabel number={4} label="Selected Work" />

                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 leading-tight">
                                    Selected{" "}
                                    <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                        Work
                                    </span>
                                </h2>
                                <p className="text-muted-foreground max-w-md text-base leading-relaxed">
                                    A collection of systems designed to solve real-world problems through intelligence and automation.
                                </p>
                            </div>
                            <MagneticButton>
                                <a
                                    href="https://github.com/Vishnuvardhanvemula"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors px-5 py-2.5 rounded-full border border-white/10 hover:bg-white/5 text-muted-foreground"
                                >
                                    View All Repositories <ArrowRight className="w-4 h-4" />
                                </a>
                            </MagneticButton>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                            {projects && projects.length > 0 ? (
                                projects.map((project, index) => (
                                    <ProjectCard key={project.id} project={project} index={index} />
                                ))
                            ) : (
                                <p className="text-muted-foreground col-span-2 text-center py-20">No projects found.</p>
                            )}
                        </div>
                    </section>

                    {/* Contact */}
                    <div className="section-divider" />
                    <Contact />

                    <Footer />
                </div>
            </main>
        </>
    );
}
