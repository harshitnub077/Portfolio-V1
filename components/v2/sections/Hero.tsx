"use client";

import { View } from "@react-three/drei";
import HeroScene from "../scene/HeroScene";
import GlitchText from "@/components/v2/ui/GlitchText"; // Reusing the V1 component as it's good

export default function Hero() {
    return (
        <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">

            {/* 3D Scene Portal */}
            <View className="absolute inset-0 z-0 opacity-60">
                <HeroScene />
            </View>

            {/* HTML Content */}
            <div className="relative z-10 text-center mix-blend-difference">
                <p className="font-mono text-[#d4af37] text-xs tracking-[0.5em] mb-6 animate-pulse">
                    [ SUBJECT: HARSHIT ]
                </p>

                <h1 className="text-8xl md:text-[10rem] font-serif font-black text-white leading-none tracking-tighter hover:text-[#d4af37] transition-colors">
                    <GlitchText text="ALCHEMIST" />
                </h1>

                <div className="mt-8 flex items-center justify-center gap-4">
                    <div className="h-px w-12 bg-white/30" />
                    <p className="font-mono text-white/50 text-xs tracking-widest">
                        DIGITAL ARCHITECT & ML ENGINEER
                    </p>
                    <div className="h-px w-12 bg-white/30" />
                </div>
            </div>

        </section>
    );
}
