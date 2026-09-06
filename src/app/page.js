"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Manifesto from "@/components/Manifesto";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Preloader from "@/components/Preloader";

import { projects } from "@/data/projects";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import WorkIntro from "@/components/WorkIntro";

function SectionLabel({ number, label }) {
    return (
        <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-primary font-semibold tracking-widest">{number.toString().padStart(2, "0")} —</span>
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">{label}</span>
        </div>
    );
}

export default function Home() {
    const [loading, setLoading] = useState(true);

    return (
        <>
            {/* Skip link — keyboard/screen-reader accessibility */}
            <a href="#main-content" className="skip-link">Skip to content</a>

            {/* Preloader — sits above everything, exits via curtain sweep */}
            {loading && <Preloader onComplete={() => setLoading(false)} />}

            {/* Main Content */}
            <main
                id="main-content"
                className="min-h-screen bg-background text-foreground overflow-hidden"
            >
                <Navbar />

                {/* Hero */}
                <Hero />

                {/* Sections */}
                <div className="relative z-10 bg-background">

                    {/* 01: Manifesto / Introduction — continuous flow from Hero (WHO I AM) */}
                    <Manifesto />

                    {/* 02: Selected Work Gateway Introduction (TRANSITION: WHO I AM ──► WHAT I CREATE) */}
                    <WorkIntro />

                    {/* Project Archive (INTRODUCING PROJECT 01) */}
                    <section id="project-01" className="w-full max-w-7xl mx-auto px-6 py-20 relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 pb-6 border-b border-white/5 gap-6">
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="font-mono text-xs text-[#FF2222] font-semibold tracking-widest">02 — ARCHIVE</span>
                                    <span className="w-4 h-[1px] bg-white/20" />
                                    <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">CATALOGUE OF SYSTEMS</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tight">
                                    Featured Deployments
                                </h2>
                            </div>
                            <MagneticButton>
                                <a
                                    href="https://github.com/Vishnuvardhanvemula"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-xs font-mono tracking-wider hover:text-white transition-colors px-4 py-2 rounded border border-white/10 hover:border-white/20 hover:bg-white/5 text-muted-foreground uppercase"
                                >
                                    GitHub Archive <ArrowRight className="w-3.5 h-3.5" />
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

                    {/* Skills */}
                    <div className="section-divider" />
                    <Skills />

                    {/* Experience / Journey */}
                    <div className="section-divider" />
                    <Experience />

                    {/* Contact */}
                    <div className="section-divider" />
                    <Contact />

                    <Footer />
                </div>
            </main>
        </>
    );
}
