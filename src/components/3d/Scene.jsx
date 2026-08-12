"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import FloatingShape from "./FloatingShape";
import { Suspense } from "react";

export default function Scene() {
    return (
        <div className="absolute inset-0 z-0 h-full w-full">
            <Canvas className="h-full w-full" dpr={[1, 2]} gl={{ antialias: true, powerPreference: "high-performance" }}>
                <Suspense fallback={null}>
                    {/* Lighting */}
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} color="cyan" />

                    {/* The Object */}
                    <Float
                        speed={2} // Animation speed
                        rotationIntensity={1} // XYZ rotation intensity
                        floatIntensity={2} // Up/down float intensity
                    >
                        <FloatingShape />
                    </Float>

                    {/* Environment for reflections */}
                    <Environment preset="city" />

                    {/* Interaction */}
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed={0.5} />
                </Suspense>
            </Canvas>
        </div>
    );
}
