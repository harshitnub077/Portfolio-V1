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
            className="w-full py-32 bg-background flex flex-col items-center justify-center border-b border-primary/20 relative px-6 md:px-24 overflow-hidden"
        >
             {/* Neon Glow */}
             <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[30vw] h-[50vh] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-12 relative z-10">
                <div
                    ref={lineRef}
                    className="w-full md:w-32 h-[2px] bg-primary origin-left shadow-[0_0_15px_rgba(223,255,0,0.5)]"
                />
                <div ref={textRef} className="flex-1">
                    <h3 className="font-inter font-black text-3xl md:text-5xl lg:text-7xl text-foreground leading-[1.1] tracking-tighter uppercase mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        &quot;Elegance is not the abundance of simplicity.<br/> It is the absence of <span className="text-outline text-transparent" style={{ WebkitTextStroke: "2px var(--color-primary)" }}>complexity</span>.&quot;
                    </h3>
                    <p className="font-space-mono text-sm uppercase tracking-widest font-bold text-primary">
                        — DEITER RAMS / PRINCIPLES OF GOOD DESIGN
                    </p>
                </div>
            </div>
        </section>
    );
}
