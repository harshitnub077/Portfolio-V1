"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Contact() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(".marquee-text", {
                xPercent: -50,
                repeat: -1,
                duration: 10,
                ease: "linear",
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen bg-[#000000] flex flex-col justify-between pt-20 pb-10 overflow-hidden">

            <div className="px-6 md:px-12 z-10 mix-blend-difference">
                <p className="font-mono text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-4">[ END_PROTOCOL ]</p>
                <h2 className="text-[12vw] leading-[0.85] font-serif font-light italic text-[#e0e0e0] tracking-tight">
                    Let&apos;s<br />Transmute<br /><span className="text-[#d4af37] not-italic">Reality</span>
                </h2>
            </div>

            {/* Marquee Email */}
            <div className="w-full bg-black py-8 rotate-[-2deg] scale-110 origin-left hover:rotate-0 transition-transform duration-500 relative z-20 border-y border-[#d4af37]/20">
                <div className="flex whitespace-nowrap overflow-hidden">
                    <div className="marquee-text flex gap-8 pr-8">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <a key={i} href="mailto:contact@harshit.dev" className="text-6xl md:text-8xl font-serif text-[#d4af37] hover:text-white transition-colors">
                                CONTACT@HARSHIT.DEV — INITIATE —
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="px-6 md:px-12 flex justify-between items-end text-[#666] font-mono text-xs z-10 uppercase tracking-widest">
                <div>
                    <p className="text-[#d4af37]">New Delhi, IN</p>
                    <p>{new Date().getFullYear()}</p>
                </div>
                <div className="text-right">
                    <p className="hover:text-white transition-colors cursor-pointer">Github / Twitter / LinkedIn</p>
                    <p>Designed by Harshit</p>
                </div>
            </div>

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#d4af37]/5 to-transparent pointer-events-none" />

        </section>
    );
}
