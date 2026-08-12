"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={cn(
                "fixed top-0 inset-x-0 z-50 w-full transition-all duration-300",
                scrolled ? "glass" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <a href="/" className="flex items-center gap-2.5 group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm font-heading shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                        V
                    </div>
                    <span className="text-xl font-heading font-bold tracking-tight group-hover:opacity-80 transition-opacity">
                        Vishnu<span className="text-primary">.</span>dev
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    <a href="#about" className="hover:text-foreground transition-colors">About</a>
                    <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
                    <a href="#work" className="hover:text-foreground transition-colors">Work</a>
                    <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
                    <ThemeToggle />
                    <a
                        href="mailto:vishnuvardhan2431s@gmail.com"
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600/80 to-violet-600/80 border border-indigo-500/30 text-white hover:opacity-90 transition-all text-sm"
                    >
                        Let&apos;s Talk
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden fixed inset-0 top-20 bg-background z-40 border-t border-white/10"
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-8">
                            <a href="#about" onClick={() => setIsOpen(false)} className="text-2xl font-medium text-muted-foreground hover:text-foreground">About</a>
                            <a href="#skills" onClick={() => setIsOpen(false)} className="text-2xl font-medium text-muted-foreground hover:text-foreground">Skills</a>
                            <a href="#work" onClick={() => setIsOpen(false)} className="text-2xl font-medium text-muted-foreground hover:text-foreground">Work</a>
                            <a href="#contact" onClick={() => setIsOpen(false)} className="text-2xl font-medium text-muted-foreground hover:text-foreground">Contact</a>
                            <div className="py-4">
                                <ThemeToggle />
                            </div>
                            <a
                                href="mailto:vishnuvardhan2431s@gmail.com"
                                onClick={() => setIsOpen(false)}
                                className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium"
                            >
                                Let's Talk
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
