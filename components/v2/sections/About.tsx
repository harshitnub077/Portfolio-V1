"use client";

import { View } from "@react-three/drei";
import AboutScene from "../scene/AboutScene";
import GlitchText from "@/components/v2/ui/GlitchText";

export default function About() {
    return (
        <section id="about" className="min-h-screen relative flex items-center py-20 overflow-hidden">

            {/* Left: Content */}
            <div className="w-full md:w-1/2 px-8 md:px-20 relative z-10">
                <h2 className="font-mono text-[#d4af37] text-xs tracking-[0.5em] mb-8">
                    [ IDENTITY_MATRIX ]
                </h2>

                <div className="space-y-12">
                    <div>
                        <h3 className="text-4xl font-serif text-white mb-4">
                            The <span className="italic text-[#d4af37]">Ghost</span> in the Machine.
                        </h3>
                        <p className="text-white/60 font-light leading-relaxed max-w-md">
                            I am a multidisciplinary engineer obsessed with the intersection of <GlitchText text="CHAOS" /> and <GlitchText text="CONTROL" />.
                            My work transforms rigid code into organic, fluid experiences.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 font-mono text-xs">
                        <div>
                            <p className="text-[#666] mb-2">STATUS</p>
                            <p className="text-white">OPERATIONAL</p>
                        </div>
                        <div>
                            <p className="text-[#666] mb-2">ORIGIN</p>
                            <p className="text-white">NEW DELHI, IN</p>
                        </div>
                        <div>
                            <p className="text-[#666] mb-2">CLASS</p>
                            <p className="text-white">TECHNO-WIZARD</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: 3D DNA */}
            <div className="absolute inset-0 md:static md:w-1/2 h-full min-h-[50vh] md:min-h-screen">
                <View className="absolute inset-0 w-full h-full">
                    <AboutScene />
                    <ambientLight intensity={0.5} />
                </View>
            </div>

        </section>
    );
}
