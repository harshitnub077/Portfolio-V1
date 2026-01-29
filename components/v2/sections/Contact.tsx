"use client";

import { View } from "@react-three/drei";
import ContactScene from "../scene/ContactScene";
import GlitchText from "@/components/v2/ui/GlitchText";

export default function Contact() {
    return (
        <section id="contact" className="min-h-screen relative flex items-center justify-center py-20 overflow-hidden">

            <div className="text-center relative z-10 max-w-2xl px-6">
                <h2 className="font-mono text-[#d4af37] text-xs tracking-[0.5em] mb-6">
                    [ TRANSMISSION_LINK ]
                </h2>

                <h3 className="text-5xl md:text-7xl font-serif text-white mb-8">
                    Ready to <GlitchText text="INITIATE" />?
                </h3>

                <p className="text-white/50 mb-12 font-light leading-relaxed">
                    Open for collaborations on experimental interfaces, AI research, and digital alchemy.
                </p>

                <a
                    href="mailto:hello@harshit.dev"
                    className="inline-block border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full text-sm font-mono tracking-widest text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300"
                >
                    ESTABLISH_UPLINK
                </a>
            </div>

            {/* Background 3D Object */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <View className="absolute inset-0 w-full h-full pointer-events-auto">
                    <ContactScene />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} color="#d4af37" />
                </View>
            </div>

        </section>
    );
}
