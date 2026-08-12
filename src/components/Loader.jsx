"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onComplete }) {
    const [progress, setProgress] = useState(0);
    const [done, setDone] = useState(false);

    useEffect(() => {
        let start = null;
        const duration = 1400;

        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;
            const pct = Math.min((elapsed / duration) * 100, 100);
            setProgress(Math.floor(pct));

            if (pct < 100) {
                requestAnimationFrame(animate);
            } else {
                setTimeout(() => {
                    setDone(true);
                    setTimeout(() => onComplete?.(), 600);
                }, 200);
            }
        };

        requestAnimationFrame(animate);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {!done && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background overflow-hidden"
                >
                    {/* Background grid */}
                    <div className="absolute inset-0 opacity-5"
                        style={{
                            backgroundImage: `linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)`,
                            backgroundSize: "60px 60px"
                        }}
                    />

                    {/* Center content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative flex flex-col items-center gap-8"
                    >
                        {/* Logo / Monogram */}
                        <div className="relative w-20 h-20">
                            <svg viewBox="0 0 80 80" className="w-full h-full">
                                <motion.circle
                                    cx="40" cy="40" r="36"
                                    stroke="url(#loaderGradient)"
                                    strokeWidth="2"
                                    fill="none"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: progress / 100 }}
                                    transition={{ duration: 0.05 }}
                                />
                                <defs>
                                    <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#6366f1" />
                                        <stop offset="100%" stopColor="#a855f7" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-2xl font-heading font-bold text-white">VV</span>
                            </div>
                        </div>

                        {/* Name */}
                        <div className="text-center">
                            <p className="font-mono text-xs text-muted-foreground tracking-[0.3em] uppercase mb-1">
                                Loading Portfolio
                            </p>
                            <p className="font-mono text-primary text-sm font-bold">{progress}%</p>
                        </div>

                        {/* Progress bar */}
                        <div className="w-48 h-[1px] bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                                style={{ width: `${progress}%` }}
                                transition={{ duration: 0.05 }}
                            />
                        </div>
                    </motion.div>

                    {/* Wipe-out overlay */}
                    <AnimatePresence>
                        {done && (
                            <motion.div
                                initial={{ scaleY: 0, originY: 1 }}
                                animate={{ scaleY: 1, originY: 1 }}
                                exit={{ scaleY: 0, originY: 0 }}
                                transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                                className="absolute inset-0 bg-background"
                            />
                        )}
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
