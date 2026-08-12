"use client";

import { projects } from "@/data/projects";
import { notFound, useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import MagneticButton from "@/components/ui/MagneticButton";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Calendar } from "lucide-react";
import Link from "next/link";

const iconMap = {
    BookOpen: "📖",
    Trophy: "🏆",
    ShoppingBag: "🛍",
    Zap: "⚡",
    Upload: "📤",
    Search: "🔍",
    MessageSquare: "💬",
    RefreshCw: "🔄",
    Camera: "📷",
    Pill: "💊",
    WifiOff: "📴",
    Activity: "📊",
    Code2: "💻",
    Timer: "⏱",
    Sparkles: "✨",
    TrendingUp: "📈",
};

export default function ProjectPage() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    if (!project) notFound();

    return (
        <main className="min-h-screen bg-background text-foreground">
            <ScrollProgress />
            <Navbar />

            {/* Hero Banner */}
            <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden">
                {/* Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color || "from-indigo-500 to-violet-700"} opacity-25`} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />

                {/* Grid */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px"
                    }}
                />

                <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-16 pt-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        {/* Back */}
                        <Link href="/#work" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors group">
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            Back to Work
                        </Link>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-5">
                            {project.tags.map((tag) => (
                                <span key={tag} className="px-3 py-1 text-xs font-mono rounded-full bg-white/10 border border-white/10 text-white/80">
                                    {tag}
                                </span>
                            ))}
                            {project.year && (
                                <span className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-full bg-primary/10 border border-primary/20 text-primary">
                                    <Calendar className="w-3 h-3" />
                                    {project.year}
                                </span>
                            )}
                        </div>

                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tight mb-3">
                            {project.title}
                        </h1>
                        <p className="text-xl text-muted-foreground">{project.subtitle}</p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {/* Left: Content */}
                    <div className="lg:col-span-2 space-y-16">

                        {/* Overview */}
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                            <h2 className="text-xs font-mono text-primary/70 tracking-widest uppercase mb-4">// Overview</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
                        </motion.div>

                        {/* Features */}
                        {project.features && project.features.length > 0 && (
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                                <h2 className="text-xs font-mono text-primary/70 tracking-widest uppercase mb-6">// Key Features</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {project.features.map((feature) => (
                                        <div
                                            key={feature.title}
                                            className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all"
                                        >
                                            <div className="text-2xl mb-3">{iconMap[feature.icon] || "✦"}</div>
                                            <h3 className="font-bold text-white mb-2 text-base">{feature.title}</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Challenge & Solution */}
                        {project.challenges && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            >
                                <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/15">
                                    <h2 className="text-xs font-mono text-red-400/70 tracking-widest uppercase mb-4">// The Challenge</h2>
                                    <p className="text-muted-foreground leading-relaxed text-sm">{project.challenges}</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/15">
                                    <h2 className="text-xs font-mono text-green-400/70 tracking-widest uppercase mb-4">// The Solution</h2>
                                    <p className="text-muted-foreground leading-relaxed text-sm">{project.solution}</p>
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-6"
                    >
                        {/* CTAs */}
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                            <h3 className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-4">Links</h3>

                            {project.github && project.github !== "#" && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all group"
                                >
                                    <div className="flex items-center gap-3">
                                        <Github className="w-4 h-4 text-muted-foreground" />
                                        <span className="text-sm text-white">Source Code</span>
                                    </div>
                                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-white transition-colors" />
                                </a>
                            )}

                            {project.link && project.link !== "#" && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-3 rounded-xl bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 transition-all group"
                                >
                                    <div className="flex items-center gap-3">
                                        <ExternalLink className="w-4 h-4 text-primary" />
                                        <span className="text-sm text-white">Live Demo</span>
                                    </div>
                                    <ExternalLink className="w-3.5 h-3.5 text-primary group-hover:rotate-45 transition-transform" />
                                </a>
                            )}
                        </div>

                        {/* Tech Stack */}
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h3 className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-mono bg-primary/10 border border-primary/20 text-primary/80">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Other Projects */}
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h3 className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-4">Other Projects</h3>
                            <div className="space-y-2">
                                {projects
                                    .filter((p) => p.id !== project.id)
                                    .slice(0, 3)
                                    .map((p) => (
                                        <Link key={p.id} href={`/projects/${p.id}`}>
                                            <div className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer">
                                                <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${p.color || "from-indigo-400 to-violet-600"} shrink-0`} />
                                                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors truncate">
                                                    {p.title}
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
