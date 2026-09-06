"use client";

import { useScroll, motion, useSpring } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            style={{ scaleX }}
            className="fixed top-0 left-0 right-0 z-[9997] h-[2px] origin-left bg-gradient-to-r from-red-600 via-[#FF2222] to-red-500 shadow-[0_0_8px_rgba(255,34,34,0.6)]"
        />
    );
}
