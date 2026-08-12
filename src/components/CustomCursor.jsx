"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const ringRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const mouse = useRef({ x: 0, y: 0 });
    const cursorPos = useRef({ x: 0, y: 0 });
    const ringPos = useRef({ x: 0, y: 0 });
    const rafId = useRef(null);

    useEffect(() => {
        // Only run on desktop
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const onMouseMove = (e) => {
            mouse.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);
        };

        const onMouseDown = () => setIsClicking(true);
        const onMouseUp = () => setIsClicking(false);

        const onMouseOver = (e) => {
            const target = e.target;
            if (
                target.closest("a") ||
                target.closest("button") ||
                target.closest("[data-cursor-hover]") ||
                target.tagName === "INPUT" ||
                target.tagName === "TEXTAREA"
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const animate = () => {
            // Cursor dot — fast follow
            cursorPos.current.x += (mouse.current.x - cursorPos.current.x) * 0.5;
            cursorPos.current.y += (mouse.current.y - cursorPos.current.y) * 0.5;

            // Ring — slower, trailing
            ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.12;
            ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.12;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px) translate(-50%, -50%)`;
            }
            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
            }

            rafId.current = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mouseup", onMouseUp);
        document.addEventListener("mouseover", onMouseOver);
        rafId.current = requestAnimationFrame(animate);

        // Hide default cursor
        document.body.style.cursor = "none";

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mouseup", onMouseUp);
            document.removeEventListener("mouseover", onMouseOver);
            cancelAnimationFrame(rafId.current);
            document.body.style.cursor = "auto";
        };
    }, [isVisible]);

    // Hide on mobile
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
        return null;
    }

    return (
        <div className="pointer-events-none fixed inset-0 z-[9998]" aria-hidden="true">
            {/* Dot */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 will-change-transform"
                style={{ opacity: isVisible ? 1 : 0 }}
            >
                <motion.div
                    animate={{
                        width: isHovering ? 8 : isClicking ? 6 : 8,
                        height: isHovering ? 8 : isClicking ? 6 : 8,
                        backgroundColor: isHovering ? "#a855f7" : "#6366f1",
                    }}
                    transition={{ duration: 0.15 }}
                    className="rounded-full"
                />
            </div>

            {/* Ring */}
            <div
                ref={ringRef}
                className="fixed top-0 left-0 will-change-transform"
                style={{ opacity: isVisible ? 1 : 0 }}
            >
                <motion.div
                    animate={{
                        width: isHovering ? 44 : isClicking ? 28 : 36,
                        height: isHovering ? 44 : isClicking ? 28 : 36,
                        borderColor: isHovering ? "rgba(168, 85, 247, 0.6)" : "rgba(99, 102, 241, 0.4)",
                        backgroundColor: isHovering ? "rgba(168, 85, 247, 0.08)" : "rgba(0, 0, 0, 0)",
                    }}
                    transition={{ duration: 0.2 }}
                    className="rounded-full border"
                />
            </div>
        </div>
    );
}
