"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useTheme } from "next-themes";
import * as THREE from "three";

export default function FloatingShape() {
    const meshRef = useRef(null);
    const materialRef = useRef(null);
    const [hovered, setHover] = useState(false);
    const { theme } = useTheme();

    useFrame((state, delta) => {
        if (!meshRef.current) return;
        const time = state.clock.getElapsedTime();

        // 1. Continuous Rotation
        // Slower rotation when hovered for a "focused" feel, or faster? 
        // Let's keep it steady logic but maybe slightly faster on hover.
        meshRef.current.rotation.x = time * 0.2;
        meshRef.current.rotation.y = time * 0.3;

        // 2. Float Effect
        meshRef.current.position.y = Math.sin(time / 2) * 0.1;

        // 3. Smooth Scale Transition (Lerp)
        // Target scale: 2.5 when hovered, 2 when not
        const targetScale = hovered ? 2.4 : 2;
        meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 3);

        // 4. Material Transition (Distort & Speed)
        if (materialRef.current) {
            // Smoothly interpolate speed
            // Target speed: 5 when hovered, 1.5 when not (Slow motion at rest looks clearer, fast turbulence on hover)
            const targetSpeed = hovered ? 5 : 1.5;
            materialRef.current.speed = THREE.MathUtils.lerp(materialRef.current.speed, targetSpeed, delta * 2);

            // Smoothly interpolate distortion strength
            // Target distort: 0.6 when hovered, 0.3 when not
            const targetDistort = hovered ? 0.6 : 0.3;
            materialRef.current.distort = THREE.MathUtils.lerp(materialRef.current.distort, targetDistort, delta * 2);
        }
    });

    const isDark = theme === 'dark' || !theme;
    const color = isDark ? "#4f46e5" : "#6366f1";

    return (
        <Sphere
            ref={meshRef}
            args={[1, 64, 64]}
            onPointerOver={() => {
                document.body.style.cursor = 'pointer';
                setHover(true);
            }}
            onPointerOut={() => {
                document.body.style.cursor = 'auto';
                setHover(false);
            }}
        >
            <MeshDistortMaterial
                ref={materialRef}
                color={color}
                attach="material"
                distort={0.3} // Initial value, controlled by useFrame
                speed={1.5}   // Initial value, controlled by useFrame
                roughness={0.2}
                metalness={0.9} // Increased metalness for more premium look
                wireframe={false}
            />
        </Sphere>
    );
}
