"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const experiences = [
    {
        type: "education",
        title: "B.Tech in Computer Science",
        org: "University / College",
        period: "2022 – 2026",
        description: "Specializing in AI & Machine Learning. Core courses: Data Structures, Algorithms, ML, DBMS, OS, Computer Networks.",
        tags: ["CS", "AI/ML", "B.Tech"],
        id: "LOG.01"
    },
    {
        type: "project",
        title: "Placement Series Platform",
        org: "Personal Project",
        period: "2025",
        description: "Built a full-stack interview prep platform with AI-powered explanations, 500+ DSA questions, and real-time leaderboards.",
        tags: ["Next.js", "OpenAI", "PostgreSQL"],
        id: "LOG.02"
    },
    {
        type: "project",
        title: "AgriMind — ML Crop Diagnostics",
        org: "Hackathon / Project",
        period: "2023",
        description: "Built an offline-capable mobile app for crop disease detection using TensorFlow and model quantization. Won recognition at college tech fest.",
        tags: ["TensorFlow", "React Native", "IoT"],
        id: "LOG.03"
    },
    {
        type: "project",
        title: "FinYatra — Gamified Finance",
        org: "Personal Project",
        period: "2024",
        description: "Designed and built a MERN stack app that gamifies financial literacy with XP systems, streaks, and reward mechanics.",
        tags: ["React", "Node.js", "MongoDB"],
        id: "LOG.04"
    },
    {
        type: "learning",
        title: "Cognitive Search — RAG System",
        org: "Open Source / Personal",
        period: "2024",
        description: "Implemented a production-grade RAG pipeline with vector embeddings, cross-encoder reranking, and multi-turn conversation support.",
        tags: ["LangChain", "OpenAI", "Python"],
        id: "LOG.05"
    },
];

const typeLabels = {
    education: "ACADEMIC",
    project: "DEPLOYMENT",
    learning: "RESEARCH",
};

const Crosshair = ({ className = "" }) => (
  <svg 
    className={cn(
      "w-3.5 h-3.5 text-[#FF2222] select-none pointer-events-none",
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

export default function Experience() {
    return (
        <section id="experience" className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-24 z-10 relative border-t border-white/5">
            <div className="flex items-center gap-4 text-[10px] font-mono tracking-widest text-[#FF2222] mb-12">
                <Crosshair />
                <span>04 — DEPLOYMENT TIMELINE & SYSTEM LOGS</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left: Heading & Stats */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="sticky top-24"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight tracking-tight uppercase mb-6 text-ghost">
                        The Journey <br/>So Far
                    </h2>
                    <p className="font-mono text-[10px] md:text-xs text-white/50 tracking-[0.2em] uppercase mb-8 leading-relaxed max-w-md">
                        Every project is a lesson. Every failure is a data point. Here's how I've been building my craft — one system at a time.
                    </p>

                    {/* Stats Grid */}
                    <div className="mt-12 grid grid-cols-3 gap-[1px] bg-white/10 border border-white/10">
                        {[
                            { value: "3+", label: "Years Coding" },
                            { value: "10+", label: "Projects Built" },
                            { value: "3", label: "Domains" },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center p-4 bg-background">
                                <div className="text-2xl font-bold font-mono text-white mb-2">{stat.value}</div>
                                <div className="font-mono text-[9px] text-[#FF2222] uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Availability badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 inline-flex items-center gap-3 px-5 py-3 border border-[#FF2222]/30 bg-[#FF2222]/5"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full bg-[#FF2222] opacity-75" />
                            <span className="relative inline-flex h-2.5 w-2.5 bg-[#FF2222]" />
                        </span>
                        <span className="font-mono text-[10px] tracking-widest text-white/80 uppercase">
                            Open to full-time roles & collaborations
                        </span>
                    </motion.div>
                </motion.div>

                {/* Right: Timeline Log */}
                <div className="relative">
                    {/* Vertical Laser line */}
                    <div className="absolute left-[15px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#FF2222] via-[#FF2222]/50 to-transparent" />

                    <div className="space-y-12 pb-12">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="relative pl-12 group"
                            >
                                {/* Crosshair Datum */}
                                <div className="absolute left-0 top-1 flex items-center justify-center w-8 h-8 bg-background group-hover:bg-[#FF2222]/10 transition-colors z-10">
                                    <Crosshair className="w-4 h-4 text-[#FF2222]" />
                                </div>

                                {/* Log Card */}
                                <div className="p-6 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
                                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                        <div className="flex items-center gap-3">
                                            <span className="font-mono text-[9px] px-2 py-1 bg-[#FF2222]/10 text-[#FF2222] border border-[#FF2222]/20 uppercase tracking-widest">
                                                {typeLabels[exp.type]}
                                            </span>
                                            <span className="font-mono text-[10px] text-white/40 tracking-[0.2em]">{exp.id}</span>
                                        </div>
                                        <span className="font-mono text-[10px] text-white/60 tracking-widest">{exp.period}</span>
                                    </div>

                                    <h3 className="font-display font-bold text-white text-xl tracking-wide uppercase mb-1">
                                        {exp.title}
                                    </h3>
                                    <p className="font-mono text-[10px] text-[#FF2222] tracking-widest uppercase mb-4">
                                        // {exp.org}
                                    </p>
                                    <p className="font-sans text-sm text-white/70 font-light leading-relaxed mb-6">
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tags.map((tag) => (
                                            <span key={tag} className="font-mono text-[9px] px-2 py-1 border border-white/10 text-white/50 uppercase tracking-widest">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
