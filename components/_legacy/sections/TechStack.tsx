"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const techList = [
    "NEXT.JS", "REACT", "THREE.JS", "WEBGL", "PYTHON", "PYTORCH", "SYSTEMS", "AGENTS"
];

export default function TechStack() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".holo-item", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%"
                },
                y: 30,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                ease: "power2.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 px-6 bg-[#000000] relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#d4af37] mb-16 text-center">
                    Manifestation Tools
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {techList.map((item, i) => (
                        <div key={i} className="holo-item glass-panel h-32 flex items-center justify-center relative overflow-hidden group hover:border-[#d4af37]/30 transition-colors bg-black/20">
                            <span className="font-mono text-lg text-white/50 group-hover:text-white transition-colors z-10">
                                {item}
                            </span>
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-[#d4af37] opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
