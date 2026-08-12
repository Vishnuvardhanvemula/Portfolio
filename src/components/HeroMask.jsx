"use client";

import MouseMask from "@/components/ui/MouseMask";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="h-screen w-full relative overflow-hidden bg-background">
            <MouseMask
                size={400}
                revealContent={
                    <div className="w-full h-full flex flex-col items-center justify-center bg-[#ec4e39] text-white">
                        <div className="max-w-5xl px-4 text-center">
                            <h1 className="text-8xl md:text-[8rem] font-bold tracking-tighter leading-[0.9]">
                                CRAFTING <br />
                                DIGITAL <span className="italic font-serif">ART</span>
                            </h1>
                            <p className="mt-8 text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto">
                                I build immersive web experiences that defy expectations.
                            </p>
                        </div>
                    </div>
                }
            >
                {/* Default Content (Base Layer) */}
                <div className="w-full h-full flex flex-col items-center justify-center bg-transparent text-foreground">
                    <div className="max-w-5xl px-4 text-center">
                        <h1 className="text-8xl md:text-[8rem] font-bold tracking-tighter leading-[0.9] text-transparent stroke-text"
                            style={{ WebkitTextStroke: "2px currentColor" }}>
                            CRAFTING <br />
                            DIGITAL <span className="italic font-serif">ART</span>
                        </h1>
                        <p className="mt-8 text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto opacity-50">
                            Move your cursor to reveal the magic.
                        </p>
                    </div>
                </div>
            </MouseMask>

            {/* Floating Action Button */}
            <div className="absolute bottom-12 right-12 z-10">
                <MagneticButton>
                    <button className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                        <ArrowRight size={32} />
                    </button>
                </MagneticButton>
            </div>
        </section>
    );
}
