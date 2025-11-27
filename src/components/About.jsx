"use client";

import { motion } from "framer-motion";
import { Code, Brain, Zap, Layout } from "lucide-react";

const features = [
    {
        icon: <Code className="w-6 h-6" />,
        title: "Full Stack Engineering",
        description: "Building scalable web applications with Next.js, Node.js, and modern databases."
    },
    {
        icon: <Brain className="w-6 h-6" />,
        title: "AI & Machine Learning",
        description: "Integrating LLMs, RAG systems, and predictive models into user-facing products."
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Agentic Workflows",
        description: "Automating complex processes using AI agents and n8n workflows."
    },
    {
        icon: <Layout className="w-6 h-6" />,
        title: "Premium UI/UX",
        description: "Crafting fluid, interactive interfaces that feel alive and responsive."
    }
];

export default function About() {
    return (
        <section id="about" className="w-full max-w-7xl mx-auto px-6 py-24 z-10 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Left Column: Bio */}
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
                            More than just <br />
                            <span className="text-muted-foreground">writing code.</span>
                        </h2>

                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                I’m Vishnu, a Computer Science Engineer passionate about the intersection of
                                <strong className="text-foreground"> Systems</strong> and <strong className="text-foreground">Intelligence</strong>.
                            </p>
                            <p>
                                While others build static pages, I build dynamic, learning ecosystems.
                                My toolkit spans the entire stack—from training ML models to crafting pixel-perfect React UIs.
                            </p>
                            <p>
                                Currently, I'm focused on building <span className="text-primary">AI-native applications</span> that solve real-world problems in finance, agriculture, and education.
                            </p>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/5">
                            <div className="flex gap-8">
                                <div>
                                    <div className="text-3xl font-bold text-white mb-1">2+</div>
                                    <div className="text-sm text-muted-foreground">Years Coding</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-white mb-1">10+</div>
                                    <div className="text-sm text-muted-foreground">Projects Built</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-white mb-1">AI</div>
                                    <div className="text-sm text-muted-foreground">Specialization</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Grid of Skills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                        >
                            <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
