"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const skillCategories = [
    {
        label: "FRONTEND_ARCH",
        id: "SYS.01",
        skills: ["React", "Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "Three.js", "GSAP"]
    },
    {
        label: "BACKEND_SERVICES",
        id: "SYS.02",
        skills: ["Node.js", "Express", "FastAPI", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
        label: "AI_ML_PIPELINES",
        id: "SYS.03",
        skills: ["Python", "TensorFlow", "LangChain", "OpenAI API", "Vector DB", "RAG Systems"]
    },
    {
        label: "CLOUD_INFRA",
        id: "SYS.04",
        skills: ["Git", "Docker", "Vercel", "AWS", "Prisma", "n8n"]
    },
];

const tools = [
    "REACT", "NEXT.JS", "NODE.JS", "PYTHON", "TYPESCRIPT", "TENSORFLOW",
    "LANGCHAIN", "OPENAI", "MONGODB", "POSTGRESQL", "REDIS", "DOCKER",
    "FRAMER MOTION", "THREE.JS", "FASTAPI", "TAILWIND CSS", "PRISMA", "N8N",
    "VECTOR DB", "AWS", "VERCEL", "EXPRESS", "GIT", "RAG SYSTEMS",
];

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

export default function Skills() {
    return (
        <section id="skills" className="w-full max-w-7xl mx-auto px-6 py-24 z-10 relative">
            <div className="flex items-center gap-4 text-[10px] font-mono tracking-widest text-[#FF2222] mb-12">
                <Crosshair />
                <span>03 — SYSTEM CAPABILITIES & COMPUTE</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-white/10 pt-12 relative">
                
                {/* Background Decor */}
                <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/5 hidden lg:block -z-10" />

                {/* Left: Heading & Compute Allocation */}
                <motion.div
                    className="lg:col-span-5"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight tracking-tight uppercase mb-6 text-ghost">
                        Tech Arsenal
                    </h2>
                    <p className="font-mono text-[10px] md:text-xs text-white/50 tracking-[0.2em] uppercase mb-8 leading-relaxed max-w-md">
                        A full-stack architecture spanning from high-fidelity interfaces to intelligent backend nodes. Calibrated for speed and scale.
                    </p>

                    {/* Compute Allocation Bars */}
                    <div className="mt-12 space-y-6">
                        <div className="font-mono text-[9px] text-[#FF2222] tracking-widest uppercase mb-4 border-b border-white/10 pb-2">
                            Compute Allocation Matrix
                        </div>
                        {[
                            { label: "FRONTEND_UI", pct: 88, mem: "16GB" },
                            { label: "AI_ML_LOGIC", pct: 82, mem: "24GB" },
                            { label: "SYSTEM_DESIGN", pct: 75, mem: "8GB" },
                            { label: "BACKEND_OPS", pct: 78, mem: "12GB" },
                        ].map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                            >
                                <div className="flex justify-between font-mono text-[10px] mb-2 text-white/70 tracking-wider">
                                    <span>[{item.label}]</span>
                                    <div className="flex gap-4">
                                        <span className="text-white/40 hidden sm:inline">MEM:{item.mem}</span>
                                        <span className="text-[#FF2222]">{item.pct}%</span>
                                    </div>
                                </div>
                                <div className="h-[2px] bg-white/5 w-full relative">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${item.pct}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                                        className="absolute top-0 left-0 h-full bg-[#FF2222]"
                                    />
                                    {/* Tick marks */}
                                    <div className="absolute inset-0 flex justify-between pointer-events-none opacity-20">
                                        {[...Array(10)].map((_, j) => (
                                            <div key={j} className="h-[6px] -translate-y-[2px] w-[1px] bg-white" />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right: Category Specs */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
                    {skillCategories.map((cat, catIdx) => (
                        <motion.div
                            key={cat.label}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                            className="bg-background p-6 sm:p-8 flex flex-col relative group hover:bg-[#FF2222]/[0.02] transition-colors"
                        >
                            <div className="absolute top-3 right-3 font-mono text-[9px] text-white/20 group-hover:text-[#FF2222]/50 transition-colors">
                                {cat.id}
                            </div>
                            <div className="font-mono text-[10px] tracking-[0.2em] text-[#FF2222] mb-6">
                                // {cat.label}
                            </div>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {cat.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-[10px] px-2 py-1 bg-white/5 border border-white/10 text-white/70 font-mono uppercase tracking-wider"
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
            <div className="mt-24 relative overflow-hidden border-y border-white/10 bg-[#FF2222]/5">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                <div className="flex gap-8 animate-marquee whitespace-nowrap py-3">
                    {[...tools, ...tools].map((tool, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center gap-3 text-[10px] text-white/50 font-mono tracking-[0.2em] shrink-0"
                        >
                            <span className="w-1.5 h-1.5 bg-[#FF2222]/70" />
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
