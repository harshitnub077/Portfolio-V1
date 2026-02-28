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
            className="w-full py-32 bg-white flex flex-col items-center justify-center relative px-6 md:px-24"
        >
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-12">
                <div
                    ref={lineRef}
                    className="w-full md:w-32 h-1 bg-black origin-left"
                />
                <div ref={textRef} className="flex-1">
                    <h3 className="font-inter font-black text-3xl md:text-5xl lg:text-6xl text-black leading-tight tracking-tighter uppercase mb-6">
                        &quot;Elegance is not the abundance of simplicity. It is the absence of complexity.&quot;
                    </h3>
                    <p className="font-space-mono text-sm uppercase tracking-widest font-bold text-black/60">
                        — DEITER RAMS / PRINCIPLES OF GOOD DESIGN
                    </p>
                </div>
            </div>
        </section>
    );
}
