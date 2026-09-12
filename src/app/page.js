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
import ProjectShowcase from "@/components/ProjectShowcase";

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

                    {/* Project Archive: Dynamic Horizontal Scroll Showcase */}
                    <ProjectShowcase />

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
