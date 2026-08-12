"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        type: "education",
        title: "B.Tech in Computer Science",
        org: "University / College",
        period: "2022 – 2026",
        description: "Specializing in AI & Machine Learning. Core courses: Data Structures, Algorithms, ML, DBMS, OS, Computer Networks.",
        tags: ["CS", "AI/ML", "B.Tech"],
        accent: "from-indigo-500 to-violet-500",
    },
    {
        type: "project",
        title: "Placement Series Platform",
        org: "Personal Project",
        period: "2025",
        description: "Built a full-stack interview prep platform with AI-powered explanations, 500+ DSA questions, and real-time leaderboards.",
        tags: ["Next.js", "OpenAI", "PostgreSQL"],
        accent: "from-cyan-500 to-blue-500",
    },
    {
        type: "project",
        title: "AgriMind — ML Crop Diagnostics",
        org: "Hackathon / Project",
        period: "2023",
        description: "Built an offline-capable mobile app for crop disease detection using TensorFlow and model quantization. Won recognition at college tech fest.",
        tags: ["TensorFlow", "React Native", "IoT"],
        accent: "from-yellow-500 to-orange-500",
    },
    {
        type: "project",
        title: "FinYatra — Gamified Finance",
        org: "Personal Project",
        period: "2024",
        description: "Designed and built a MERN stack app that gamifies financial literacy with XP systems, streaks, and reward mechanics.",
        tags: ["React", "Node.js", "MongoDB"],
        accent: "from-green-500 to-emerald-500",
    },
    {
        type: "learning",
        title: "Cognitive Search — RAG System",
        org: "Open Source / Personal",
        period: "2024",
        description: "Implemented a production-grade RAG pipeline with vector embeddings, cross-encoder reranking, and multi-turn conversation support.",
        tags: ["LangChain", "OpenAI", "Python"],
        accent: "from-violet-500 to-purple-500",
    },
];

const typeColors = {
    education: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    project: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    learning: "bg-green-500/10 text-green-400 border-green-500/20",
};

const typeLabels = {
    education: "Education",
    project: "Project",
    learning: "Research",
};

function SectionLabel({ number, label }) {
    return (
        <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-primary/70 tracking-widest">// {number.toString().padStart(2, "0")}</span>
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">{label}</span>
        </div>
    );
}

export default function Experience() {
    return (
        <section id="experience" className="w-full max-w-7xl mx-auto px-6 py-24 z-10 relative">
            <SectionLabel number={3} label="Journey" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left: Heading */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
                        The{" "}
                        <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            Journey
                        </span>{" "}
                        So Far
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                        Every project is a lesson. Every failure is a data point. Here's how I've been building my craft — one system at a time.
                    </p>

                    {/* Stats */}
                    <div className="mt-12 grid grid-cols-3 gap-6">
                        {[
                            { value: "3+", label: "Years Coding" },
                            { value: "10+", label: "Projects Built" },
                            { value: "3", label: "Domains" },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                                <div className="text-3xl font-bold font-heading text-white mb-1">{stat.value}</div>
                                <div className="text-xs text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Availability badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-green-500/10 border border-green-500/20"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                        </span>
                        <span className="text-sm font-medium text-green-400">Open to full-time roles & collaborations</span>
                    </motion.div>
                </motion.div>

                {/* Right: Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

                    <div className="space-y-8">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="relative pl-12"
                            >
                                {/* Dot */}
                                <div className={`absolute left-0 top-1.5 w-8 h-8 rounded-full bg-gradient-to-br ${exp.accent} flex items-center justify-center shadow-lg`}>
                                    <div className="w-2.5 h-2.5 rounded-full bg-white/80" />
                                </div>

                                {/* Card */}
                                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 group">
                                    <div className="flex flex-wrap items-center gap-2 mb-3">
                                        <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${typeColors[exp.type]}`}>
                                            {typeLabels[exp.type]}
                                        </span>
                                        <span className="text-xs text-muted-foreground font-mono">{exp.period}</span>
                                    </div>

                                    <h3 className="font-bold text-white text-base mb-0.5 group-hover:text-primary transition-colors">
                                        {exp.title}
                                    </h3>
                                    <p className="text-xs text-muted-foreground mb-3">{exp.org}</p>
                                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{exp.description}</p>

                                    <div className="flex flex-wrap gap-1.5">
                                        {exp.tags.map((tag) => (
                                            <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60 font-mono">
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
