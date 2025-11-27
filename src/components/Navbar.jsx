"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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
                scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <a href="#" className="text-xl font-heading font-bold tracking-tight hover:opacity-80 transition-opacity">
                    Vishnu.dev
                </a>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    <a href="#work" className="hover:text-foreground transition-colors">Work</a>
                    <a href="#about" className="hover:text-foreground transition-colors">About</a>
                    <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
                    <a
                        href="mailto:vishnuvardhan2431s@gmail.com"
                        className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-foreground hover:bg-white/10 transition-colors"
                    >
                        Let's Talk
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}
