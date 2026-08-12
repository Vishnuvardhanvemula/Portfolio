"use client";

import { motion } from "framer-motion";
import { Code, Brain, Zap, Layout, Github, Linkedin, Mail } from "lucide-react";

const features = [
    {
        icon: <Code className="w-5 h-5" />,
        title: "Full Stack Engineering",
        description: "Building scalable web applications with Next.js, Node.js, and modern databases.",
        color: "from-cyan-500/20 to-blue-500/20",
        border: "border-cyan-500/20",
        iconBg: "bg-cyan-500/10 text-cyan-400",
        iconHoverBg: "group-hover:bg-cyan-500 group-hover:text-white",
    },
    {
        icon: <Brain className="w-5 h-5" />,
        title: "AI & Machine Learning",
        description: "Integrating LLMs, RAG systems, and predictive models into user-facing products.",
        color: "from-violet-500/20 to-purple-500/20",
        border: "border-violet-500/20",
        iconBg: "bg-violet-500/10 text-violet-400",
        iconHoverBg: "group-hover:bg-violet-500 group-hover:text-white",
    },
    {
        icon: <Zap className="w-5 h-5" />,
        title: "Agentic Workflows",
        description: "Automating complex processes using AI agents and n8n workflows.",
        color: "from-yellow-500/20 to-orange-500/20",
        border: "border-yellow-500/20",
        iconBg: "bg-yellow-500/10 text-yellow-400",
        iconHoverBg: "group-hover:bg-yellow-500 group-hover:text-white",
    },
    {
        icon: <Layout className="w-5 h-5" />,
        title: "Premium UI/UX",
        description: "Crafting fluid, interactive interfaces that feel alive and responsive.",
        color: "from-pink-500/20 to-rose-500/20",
        border: "border-pink-500/20",
        iconBg: "bg-pink-500/10 text-pink-400",
        iconHoverBg: "group-hover:bg-pink-500 group-hover:text-white",
    }
];

const socials = [
    { icon: <Github className="w-4 h-4" />, label: "GitHub", href: "https://github.com/Vishnuvardhanvemula" },
    { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn", href: "https://linkedin.com/in/vishnuvardhanvemula" },
    { icon: <Mail className="w-4 h-4" />, label: "Email", href: "mailto:vishnuvardhan2431s@gmail.com" },
];

function SectionLabel({ number, label }) {
    return (
        <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-primary/70 tracking-widest">// {number.toString().padStart(2, "0")}</span>
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">{label}</span>
        </div>
    );
}

export default function About() {
    return (
        <section id="about" className="w-full max-w-7xl mx-auto px-6 py-24 z-10 relative">
            <SectionLabel number={1} label="About Me" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Left Column: Bio */}
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
                            More than just{" "}
                            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                writing code.
                            </span>
                        </h2>

                        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                I&apos;m <strong className="text-foreground">Vishnu Vardhan</strong>, a Computer Science Engineer passionate about the intersection of{" "}
                                <strong className="text-foreground">Systems</strong> and{" "}
                                <strong className="text-foreground">Intelligence</strong>.
                            </p>
                            <p>
                                While others build static pages, I build dynamic, learning ecosystems.
                                My toolkit spans the entire stack — from training ML models to crafting pixel-perfect React UIs.
                            </p>
                            <p>
                                Currently focused on building{" "}
                                <span className="text-primary font-medium">AI-native applications</span>{" "}
                                that solve real-world problems in finance, agriculture, and education.
                            </p>
                        </div>

                        {/* Social links */}
                        <div className="mt-8 flex items-center gap-3">
                            {socials.map((s) => (
                                <motion.a
                                    key={s.label}
                                    href={s.href}
                                    target={s.href.startsWith("http") ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-foreground hover:bg-white/10 hover:border-white/20 transition-all text-sm"
                                >
                                    {s.icon}
                                    <span className="hidden sm:inline">{s.label}</span>
                                </motion.a>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="mt-10 pt-8 border-t border-white/5">
                            <div className="grid grid-cols-3 gap-6">
                                {[
                                    { value: "3+", label: "Years Coding" },
                                    { value: "10+", label: "Projects Built" },
                                    { value: "3", label: "Domains" },
                                ].map((stat) => (
                                    <div key={stat.label} className="text-center">
                                        <div className="text-3xl font-bold font-heading bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-1">
                                            {stat.value}
                                        </div>
                                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Feature Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`p-6 rounded-2xl bg-gradient-to-br ${feature.color} border ${feature.border} hover:scale-[1.02] transition-all duration-300 group backdrop-blur-sm`}
                        >
                            <div className={`mb-4 p-3 rounded-xl w-fit ${feature.iconBg} ${feature.iconHoverBg} transition-colors duration-300`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-base font-bold mb-2 text-white">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
