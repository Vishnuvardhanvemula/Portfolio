"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        // Only show the navbar after scrolling past the Hero section (e.g. 500px)
        if (latest > 500) {
            setHidden(false);
        } else {
            setHidden(true);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: "-100%", opacity: 0 },
            }}
            initial="hidden"
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // expo.out equivalent
            className="fixed top-0 inset-x-0 z-[100] w-full mix-blend-difference pointer-events-none"
        >
            <div className="w-full px-6 py-6 flex items-start justify-between pointer-events-auto">
                {/* Left: Minimal Logo/System ID */}
                <a href="/" className="font-mono text-[10px] tracking-[0.3em] text-mist uppercase hover:text-white transition-colors">
                    V.V // System
                </a>

                {/* Right: Structural Navigation */}
                <div className="hidden md:flex flex-col items-end gap-2">
                    <div className="flex gap-8 font-mono text-[10px] tracking-[0.3em] text-mist uppercase">
                        <a href="#about" className="hover:text-white transition-colors">About</a>
                        <a href="#work" className="hover:text-white transition-colors">Work</a>
                        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden font-mono text-[10px] tracking-[0.3em] text-mist uppercase hover:text-white transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "[ CLOSE ]" : "[ MENU ]"}
                </button>
            </div>

            {/* Minimal Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="md:hidden absolute top-full left-0 w-full bg-void border-b border-white/5 pointer-events-auto"
                    >
                        <div className="flex flex-col px-6 py-8 gap-6 font-mono text-[11px] tracking-[0.3em] text-ghost uppercase">
                            <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-white">About</a>
                            <a href="#work" onClick={() => setIsOpen(false)} className="hover:text-white">Work</a>
                            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-white">Contact</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
