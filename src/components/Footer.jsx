"use client";

import { Github, Linkedin, Twitter, ArrowUp, Mail } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
    { icon: <Github className="w-4 h-4" />, label: "GitHub", href: "https://github.com/Vishnuvardhanvemula" },
    { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn", href: "https://linkedin.com/in/vishnuvardhanvemula" },
    { icon: <Twitter className="w-4 h-4" />, label: "Twitter", href: "https://twitter.com/vishnu_dev" },
    { icon: <Mail className="w-4 h-4" />, label: "Email", href: "mailto:vishnuvardhan2431s@gmail.com" },
];

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
];

export default function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer className="w-full border-t border-white/5 bg-background/80 backdrop-blur-sm py-16 z-10 relative">
            <div className="max-w-7xl mx-auto px-6">

                {/* Top Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-12">

                    {/* Brand */}
                    <div>
                        <a href="#" className="text-2xl font-heading font-bold text-white tracking-tight block mb-2">
                            Vishnu<span className="text-primary">.</span>dev
                        </a>
                        <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                            Building intelligent systems at the intersection of code and data.
                        </p>

                        {/* Availability */}
                        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                            </span>
                            <span className="text-xs font-medium text-green-400">Open to full-time roles</span>
                        </div>
                    </div>

                    {/* Nav Links */}
                    <div className="flex gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Back to top */}
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-sm text-muted-foreground hover:text-foreground"
                    >
                        <ArrowUp className="w-4 h-4" />
                        Back to top
                    </motion.button>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                {/* Bottom Row */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Vishnu Vardhan. Crafted with ❤️ and caffeine.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-2">
                        {socials.map((s) => (
                            <motion.a
                                key={s.label}
                                href={s.href}
                                target={s.href.startsWith("http") ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                title={s.label}
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-foreground hover:bg-white/10 hover:border-white/20 transition-all"
                            >
                                {s.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
}
