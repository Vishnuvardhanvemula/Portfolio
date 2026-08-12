"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
    {
        label: "Frontend",
        color: "from-cyan-500/20 to-blue-500/20",
        border: "border-cyan-500/20",
        icon: "⚡",
        skills: ["React", "Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "Three.js"]
    },
    {
        label: "Backend",
        color: "from-green-500/20 to-emerald-500/20",
        border: "border-green-500/20",
        icon: "🛠",
        skills: ["Node.js", "Express", "FastAPI", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
        label: "AI / ML",
        color: "from-violet-500/20 to-purple-500/20",
        border: "border-violet-500/20",
        icon: "🧠",
        skills: ["Python", "TensorFlow", "LangChain", "OpenAI API", "Vector DB", "RAG Systems"]
    },
    {
        label: "Tools & Cloud",
        color: "from-orange-500/20 to-yellow-500/20",
        border: "border-orange-500/20",
        icon: "☁️",
        skills: ["Git", "Docker", "Vercel", "AWS", "Prisma", "n8n"]
    },
];

// Marquee tools ticker
const tools = [
    "React", "Next.js", "Node.js", "Python", "TypeScript", "TensorFlow",
    "LangChain", "OpenAI", "MongoDB", "PostgreSQL", "Redis", "Docker",
    "Framer Motion", "Three.js", "FastAPI", "Tailwind CSS", "Prisma", "n8n",
    "Vector DB", "AWS", "Vercel", "Express", "Git", "RAG Systems",
];

function SectionLabel({ number, label }) {
    return (
        <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-primary/70 tracking-widest">// {number.toString().padStart(2, "0")}</span>
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">{label}</span>
        </div>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="w-full max-w-7xl mx-auto px-6 py-24 z-10 relative">
            <SectionLabel number={2} label="Skills & Tools" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left: Heading */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
                        My Tech{" "}
                        <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            Arsenal
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                        A full-stack skill set spanning from pixel-perfect UIs to intelligent backend systems. I pick the right tool for the job — and I ship fast.
                    </p>

                    {/* Proficiency bars */}
                    <div className="mt-10 space-y-4">
                        {[
                            { label: "Full Stack Development", pct: 88 },
                            { label: "AI / Machine Learning", pct: 82 },
                            { label: "System Design", pct: 75 },
                            { label: "UI / UX Design", pct: 78 },
                        ].map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                            >
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-foreground font-medium">{item.label}</span>
                                    <span className="text-muted-foreground">{item.pct}%</span>
                                </div>
                                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${item.pct}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right: Category Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skillCategories.map((cat, catIdx) => (
                        <motion.div
                            key={cat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                            className={`p-5 rounded-2xl bg-gradient-to-br ${cat.color} border ${cat.border} backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300`}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-xl">{cat.icon}</span>
                                <span className="font-bold text-white text-sm">{cat.label}</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-xs px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-white/80 font-mono"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Marquee Ticker */}
            <div className="mt-20 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                <div className="flex gap-6 animate-marquee whitespace-nowrap">
                    {[...tools, ...tools].map((tool, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-muted-foreground font-mono shrink-0"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
