"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const quoteLines = [
    { text: `"DESIGN IS NOT JUST`, fill: "solid" },
    { text: `WHAT IT LOOKS LIKE.`, fill: "outline" },
    { text: `DESIGN IS HOW`, fill: "solid" },
    { text: `IT WORKS."`, fill: "accent" },
];

const facts = [
    { num: "01", label: "Identity", body: "Not a typical coder — I build with intent." },
    { num: "02", label: "LeetCode", body: "75%+ acceptance rate. 230+ problems solved." },
    { num: "03", label: "Stack", body: "Python · Next.js · React · TypeScript · ML" },
    { num: "04", label: "Status", body: "Open to work · Learning every day." },
];

export default function Quote1() {
    const containerRef = useRef<HTMLElement>(null);
    const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
    const authorRef = useRef<HTMLDivElement>(null);
    const dividerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 65%",
                }
            });

            // Lines stagger up from bottom
            quoteLines.forEach((_, i) => {
                tl.fromTo(lineRefs.current[i],
                    { yPercent: 110, opacity: 0 },
                    { yPercent: 0, opacity: 1, duration: 0.8, ease: "expo.out" },
                    i * 0.1
                );
            });

            // Author slides in
            tl.fromTo(authorRef.current,
                { x: -30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
                0.45
            );

            // Divider scaleX
            tl.fromTo(dividerRef.current,
                { scaleX: 0, transformOrigin: "left" },
                { scaleX: 1, duration: 1, ease: "expo.out" },
                0.5
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-[80vh] bg-background structural-grid flex flex-col border-b border-primary/20 overflow-hidden"
        >
            {/* Top accent rule */}
            <div className="w-full h-[2px] bg-primary/20 shrink-0" />

            {/* ── Quote block — takes flex-1 growing space ── */}
            <div className="flex-1 flex flex-col justify-center px-8 md:px-14 xl:px-20 py-12 md:py-0 relative">

                {/* Section index */}
                <div className="absolute top-6 right-8 md:right-14 font-space-mono text-[10px] uppercase tracking-[0.25em] text-primary/50 font-bold">
                    Philosophy / 01
                </div>

                {/* Massive quote lines */}
                <div className="flex flex-col gap-0 mb-8 mt-12 md:mt-0">
                    {quoteLines.map((line, i) => (
                        <div key={i} className="overflow-hidden leading-[0.82]">
                            <div ref={el => { lineRefs.current[i] = el; }}>
                                {line.fill === "solid" && (
                                    <h2
                                        className="font-inter font-black uppercase tracking-tighter text-foreground"
                                        style={{ fontSize: "clamp(2.8rem, 7vw, 9vw)" }}
                                    >
                                        {line.text}
                                    </h2>
                                )}
                                {line.fill === "outline" && (
                                    <h2
                                        className="font-inter font-black uppercase tracking-tighter text-outline"
                                        style={{
                                            fontSize: "clamp(2.8rem, 7vw, 9vw)",
                                        }}
                                    >
                                        {line.text}
                                    </h2>
                                )}
                                {line.fill === "accent" && (
                                    <h2
                                        className="font-inter font-black uppercase tracking-tighter text-black bg-primary inline-block px-3"
                                        style={{ fontSize: "clamp(2.8rem, 7vw, 9vw)" }}
                                    >
                                        {line.text}
                                    </h2>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Attribution */}
                <div ref={authorRef} className="flex items-center gap-4">
                    <div className="w-8 h-[2px] bg-primary shrink-0" />
                    <div>
                        <p className="font-space-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
                            Steve Jobs
                        </p>
                        <p className="font-space-mono text-[9px] uppercase tracking-widest text-foreground/50 mt-[1px]">
                            Co-Founder, Apple Inc.
                        </p>
                    </div>
                </div>
            </div>

            {/* ── Full-width divider ── */}
            <div ref={dividerRef} className="w-full h-[1px] bg-primary/30 shrink-0 shadow-[0_0_15px_rgba(223,255,0,0.5)]" />

        </section>
    );
}
