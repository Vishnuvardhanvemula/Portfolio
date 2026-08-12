"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useVelocity, useTransform } from "framer-motion";

export default function MouseMask({ children, revealContent, size = 300 }) {
    const containerRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth mouse movement for the mask
    const smoothX = useSpring(mouseX, { damping: 20, stiffness: 200, mass: 0.8 });
    const smoothY = useSpring(mouseY, { damping: 20, stiffness: 200, mass: 0.8 });

    // Calculate velocity for distortion
    const velocityX = useVelocity(smoothX);
    const velocityY = useVelocity(smoothY);

    // Velocity-based scale (Jelly Effect)
    const scaleX = useTransform(velocityX, [-1500, 0, 1500], [1.25, 1, 1.25]);
    const scaleY = useTransform(velocityY, [-1500, 0, 1500], [0.8, 1, 0.8]);

    // Rotation based on movement direction
    const rotate = useTransform([velocityX, velocityY], ([vx, vy]) => {
        if (Math.abs(vx) < 5 && Math.abs(vy) < 5) return 0;
        const angle = Math.atan2(vy, vx) * (180 / Math.PI);
        return angle;
    });

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative w-full h-full overflow-hidden"
        >
            <div className="absolute inset-0">
                {children}
            </div>

            <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                    clipPath: "url(#jelly-mask)"
                }}
            >
                <div className="w-full h-full pointer-events-auto">
                    {revealContent}
                </div>
            </div>

            <svg className="absolute w-0 h-0">
                <defs>
                    <clipPath id="jelly-mask">
                        <motion.ellipse
                            cx={smoothX}
                            cy={smoothY}
                            rx={size / 2}
                            ry={size / 2}
                            style={{
                                rotate: rotate,
                                scaleX: scaleX,
                                scaleY: scaleY,
                                originX: smoothX, // Important: transform origin follows the circle
                                originY: smoothY
                            }}
                        />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}
