"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Quote2() {
    const containerRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !textRef.current || !lineRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%",
                    end: "top 20%",
                    scrub: 1,
                }
            });

            tl.fromTo(
                lineRef.current,
                { scaleX: 0 },
                { scaleX: 1, ease: "none" }
            ).fromTo(
                textRef.current,
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, ease: "power2.out" },
                "<0.2"
            );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="w-full min-h-screen bg-background flex flex-col items-center justify-center border-b border-white/5 relative px-6 md:px-24 overflow-hidden"
        >
             {/* Cyan/Blue Aurora Glow */}
             <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[40vw] h-[60vh] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />
             <div className="absolute top-0 right-1/4 w-[30vw] h-[40vh] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-12 relative z-10">
                <div
                    ref={lineRef}
                    className="w-full md:w-32 h-[2px] bg-cyan-500 origin-left shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                />
                <div ref={textRef} className="flex-1">
                    <h3 className="font-inter font-black text-3xl md:text-5xl lg:text-7xl text-foreground leading-[1.1] tracking-tighter uppercase mb-6 drop-shadow-[0_0_20px_rgba(99,102,241,0.15)] group">
                        &quot;Elegance is not the abundance of simplicity.<br/> It is the absence of <span className="text-outline text-transparent group-hover:text-indigo-400 transition-colors" style={{ WebkitTextStroke: "2px var(--color-primary)" }}>complexity</span>.&quot;
                    </h3>
                    <p className="font-space-mono text-sm uppercase tracking-widest font-bold text-cyan-400 bg-cyan-500/10 px-4 py-1 inline-block border border-cyan-500/20">
                        — DEITER RAMS / PRINCIPLES OF GOOD DESIGN
                    </p>
                </div>
            </div>
        </section>
    );
}
