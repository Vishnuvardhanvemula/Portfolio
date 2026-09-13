"use client";

import { Github, Linkedin, Twitter, ArrowUp, Mail } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
    { icon: <Github className="w-4 h-4" />, label: "GITHUB", href: "https://github.com/Vishnuvardhanvemula" },
    { icon: <Linkedin className="w-4 h-4" />, label: "LINKEDIN", href: "https://linkedin.com/in/vishnuvardhanvemula" },
    { icon: <Twitter className="w-4 h-4" />, label: "TWITTER_X", href: "https://twitter.com/vishnu_dev" },
    { icon: <Mail className="w-4 h-4" />, label: "EMAIL", href: "mailto:vishnuvardhan2431s@gmail.com" },
];

const navLinks = [
    { label: "// ABOUT", href: "#about" },
    { label: "// SKILLS", href: "#skills" },
    { label: "// WORK", href: "#work" },
    { label: "// CONTACT", href: "#contact" },
];

export default function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer className="w-full border-t border-white/5 bg-background py-16 z-10 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
                
                {/* Top Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16">
                    
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 bg-[#FF2222] animate-pulse" />
                            <span className="font-mono text-[10px] tracking-[0.2em] text-[#FF2222]">SYSTEM_ONLINE</span>
                        </div>
                        <a href="#" className="text-3xl font-heading font-bold text-white tracking-tight block mb-2 uppercase">
                            Vishnu<span className="text-[#FF2222]">_</span>
                        </a>
                        <p className="font-mono text-[10px] text-white/50 tracking-widest uppercase max-w-xs leading-relaxed">
                            Building intelligent systems at the intersection of code and data.
                        </p>
                    </div>

                    {/* Nav Links */}
                    <div className="flex flex-wrap gap-x-8 gap-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="font-mono text-[10px] text-white/50 hover:text-[#FF2222] transition-colors tracking-widest"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Back to top */}
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden md:flex flex-col items-center gap-2 group"
                    >
                        <div className="p-3 border border-white/10 bg-white/5 group-hover:border-[#FF2222]/50 group-hover:text-[#FF2222] transition-colors">
                            <ArrowUp className="w-4 h-4 text-white/50 group-hover:text-[#FF2222]" />
                        </div>
                        <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest group-hover:text-[#FF2222] transition-colors">
                            RETURN_0
                        </span>
                    </motion.button>
                </div>

                {/* Divider with Crosshairs */}
                <div className="relative h-[1px] bg-white/10 mb-8">
                    <div className="absolute -top-1 -left-1 font-mono text-[9px] text-[#FF2222]">┼</div>
                    <div className="absolute -top-1 -right-1 font-mono text-[9px] text-[#FF2222]">┼</div>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4">
                        <p className="font-mono text-[9px] text-white/40 uppercase tracking-widest">
                            © {new Date().getFullYear()} VISHNU VARDHAN. ALL SYSTEMS NORMAL.
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target={s.href.startsWith("http") ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                title={s.label}
                                className="font-mono text-[10px] text-white/40 hover:text-[#FF2222] transition-colors tracking-widest"
                            >
                                [{s.label}]
                            </a>
                        ))}
                    </div>
                </div>
                
            </div>
        </footer>
    );
}
