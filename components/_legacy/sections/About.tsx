"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import GlitchText from "@/components/ui/GlitchText";

const STATS = [
    { label: "STATUS", value: "OPERATIONAL" },
    { label: "LOCATION", value: "NEW DELHI, IN" },
    { label: "ARCHETYPE", value: "CREATIVE ENGINEER" },
    { label: "EXP_LEVEL", value: "LVL. 02 (UNDERGRAD)" },
];

const MISSIONS = [
    { id: "M01", name: "COGNIFY", type: "FOUNDER" },
    { id: "M02", name: "AI_RESEARCH", type: "R&D" },
    { id: "M03", name: "DIGITAL_ART", type: "CREATION" },
];

export default function About() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // HUD Entrance
            gsap.from(".hud-item", {
                x: -30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%",
                }
            });

            // Grid Line Scan Animation
            gsap.to(".scan-line", {
                top: "100%",
                ease: "linear",
                duration: 3,
                repeat: -1,
                yoyo: true
            });

            // Content Reveal
            gsap.from(".content-block", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".content-col",
                    start: "top 70%",
                }
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-screen bg-black py-20 md:py-32 overflow-hidden flex flex-col justify-center">

            {/* Neural Grid Background - CSS only for performance */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
            </div>

            <div className="max-w-[90vw] mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">

                {/* LEFT: THE HUD / DOSSIER */}
                <div className="md:col-span-4 relative">
                    <div className="sticky top-32 p-6 border border-[#333] bg-black/80 backdrop-blur-md relative overflow-hidden group">

                        {/* Scan Line Effect */}
                        <div className="scan-line absolute left-0 top-0 w-full h-[2px] bg-[#d4af37]/50 shadow-[0_0_10px_#d4af37] z-20 pointer-events-none" />

                        {/* Decor Header */}
                        <div className="flex justify-between items-center mb-8 border-b border-[#333] pb-2">
                            <span className="font-mono text-[10px] text-[#d4af37]">ID_8X92.LOG</span>
                            <div className="flex gap-1">
                                <div className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
                                <div className="w-2 h-2 rounded-full bg-[#333]" />
                            </div>
                        </div>

                        {/* Profile Image / Holo Placeholder */}
                        <div className="w-full aspect-square bg-[#0a0a0a] mb-8 relative border border-[#222] flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#d4af3710_3px)] opacity-20" />
                            <span className="font-mono text-xs text-[#555]">[ SUBJECT_IMG_MISSING ]</span>
                        </div>

                        {/* HUD Stats */}
                        <div className="space-y-4 font-mono text-xs">
                            {STATS.map((stat, i) => (
                                <div key={i} className="hud-item flex justify-between items-center border-b border-[#222] pb-1">
                                    <span className="text-[#666]">{stat.label}</span>
                                    <span className="text-[#e0e0e0] group-hover:text-[#d4af37] transition-colors">{stat.value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Mission Helix (Simplified) */}
                        <div className="mt-8 pt-4 border-t border-[#333]">
                            <p className="font-mono text-[10px] text-[#666] mb-3">ACTIVE_MISSIONS</p>
                            <div className="space-y-2">
                                {MISSIONS.map((m) => (
                                    <div key={m.id} className="hud-item flex items-center gap-3">
                                        <span className="text-[#d4af37] font-mono text-[10px]">{m.id}</span>
                                        <span className="text-white text-xs tracking-wider">{m.name}</span>
                                        <span className="text-[#444] text-[10px] ml-auto">[{m.type}]</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                {/* RIGHT: THE KINETIC MANIFESTO */}
                <div className="md:col-span-8 content-col flex flex-col justify-center">

                    <div className="content-block mb-12">
                        <p className="font-mono text-[#d4af37] text-xs tracking-[0.2em] mb-4">
                            / CLASSIFIED_MANIFESTO
                        </p>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[0.9] tracking-tight">
                            I am a <GlitchText text="PHILOMATH" /> <br />
                            seeking the <span className="text-[#333] selection:bg-[#d4af37] selection:text-black">Architecture</span> <br />
                            of the <GlitchText text="VOID" />.
                        </h2>
                    </div>

                    <div className="content-block max-w-2xl text-lg md:text-xl text-[#888] font-light leading-relaxed mb-12">
                        <p className="mb-6">
                            My work exists at the intersection of <span className="text-white">chaos</span> and <span className="text-white">control</span>.
                            I don&apos;t just write code; I orchestrate systems that behave like organic matter—adaptive, reactive, and alive.
                        </p>
                        <p>
                            From training <span className="text-[#d4af37]">Neural Networks</span> to replicate human dreaming, to architecting
                            immersive web experiences that dissolve the screen, I am obsessed with the <span className="italic text-white">Ghost in the Machine</span>.
                        </p>
                    </div>

                    {/* Signature / Stamp */}
                    <div className="content-block flex items-center gap-6 opacity-50">
                        <div className="h-px w-20 bg-[#333]" />
                        <div className="font-mono text-xs text-[#d4af37] border border-[#d4af37] px-2 py-1 rotate-[-2deg]">
                            APPROVED_FOR_RELEASE
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
