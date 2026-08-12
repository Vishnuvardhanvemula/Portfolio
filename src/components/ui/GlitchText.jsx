"use client";

import { useState, useEffect, useRef } from "react";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+";

export default function GlitchText({ text, className = "" }) {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef(null);
    const iterations = useRef(0);

    useEffect(() => {
        const animate = () => {
            let iteration = 0;

            clearInterval(intervalRef.current);

            intervalRef.current = setInterval(() => {
                setDisplayText((prev) =>
                    text
                        .split("")
                        .map((letter, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            return characters[Math.floor(Math.random() * characters.length)];
                        })
                        .join("")
                );

                if (iteration >= text.length) {
                    clearInterval(intervalRef.current);
                }

                iteration += 1 / 3; // Speed control
            }, 30);
        };

        // Trigger on mount
        animate();

        return () => clearInterval(intervalRef.current);
    }, [text]);

    // Re-trigger on hover? Optional.
    const handleHover = () => {
        let iteration = 0;
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setDisplayText(
                text.split("").map((letter, index) => {
                    if (index < iteration) return text[index];
                    return characters[Math.floor(Math.random() * characters.length)];
                }).join("")
            );
            if (iteration >= text.length) clearInterval(intervalRef.current);
            iteration += 1 / 3;
        }, 30);
    };

    return (
        <span
            className={`font-mono ${className}`} // Assuming monospace for best glitch effect
            onMouseEnter={handleHover}
        >
            {displayText}
        </span>
    );
}
