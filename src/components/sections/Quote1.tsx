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
            className="relative w-full min-h-screen bg-background flex flex-col border-b border-white/5 overflow-hidden"
        >
            {/* Atmospheric Aurora Background */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                {/* Noise Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.03] z-20 pointer-events-none" 
                     style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3Y%3Cfilter id='noiseFilter'%3Y%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3Y%3C/filter%3Y%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3Y%3C/svg%3E")` }} />
                
                {/* Large Soft Glows */}
                <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vh] bg-cyan-600/15 blur-[120px] rounded-full animate-pulse" 
                     style={{ animationDuration: '8s', backgroundColor: 'rgba(6, 182, 212, 0.15)' }} />
                <div className="absolute bottom-[0%] right-[-5%] w-[60vw] h-[60vh] bg-blue-600/10 blur-[100px] rounded-full animate-pulse" 
                     style={{ animationDuration: '12s', animationDelay: '2s', backgroundColor: 'rgba(59, 130, 246, 0.1)' }} />
                <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vh] bg-cyan-600/5 blur-[150px] rounded-full" style={{ backgroundColor: 'rgba(6, 182, 212, 0.05)' }} />

                {/* Refined Perspective Grid (Faint) */}
                <div
                    className="absolute w-[200vw] h-[200vh] -top-[50vh] left-[-50vw] opacity-15"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '120px 120px',
                        transform: 'perspective(1200px) rotateX(65deg) scale(1.4)',
                        transformOrigin: 'top center',
                    }}
                />

                {/* Depth Fades */}
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-90" />
            </div>

            {/* Top accent rule */}
            <div className="w-full h-[1px] bg-white/10 shrink-0 relative z-10" />

            {/* ── Quote block ── */}
            <div className="flex-1 flex flex-col justify-center px-8 md:px-14 xl:px-20 py-12 md:py-0 relative z-10">

                {/* Section index */}
                <div className="absolute top-12 right-8 md:right-14 font-space-mono text-[10px] uppercase tracking-[0.25em] text-cyan-400 font-bold bg-cyan-500/10 px-3 py-1 border border-cyan-500/20" style={{ color: '#22d3ee', backgroundColor: 'rgba(6, 182, 212, 0.1)', borderColor: 'rgba(6, 182, 212, 0.2)' }}>
                    Philosophy // 01
                </div>

                {/* Massive quote lines */}
                <div className="flex flex-col gap-0 mb-8 mt-12 md:mt-0">
                    {quoteLines.map((line, i) => (
                        <div key={i} className="overflow-hidden leading-[0.82]">
                            <div ref={el => { lineRefs.current[i] = el; }}>
                                {line.fill === "solid" && (
                                    <h2
                                        className="font-inter font-black uppercase tracking-tighter text-foreground"
                                        style={{ fontSize: "clamp(2.2rem, 5.5vw, 7.5vw)" }}
                                    >
                                        {line.text}
                                    </h2>
                                )}
                                {line.fill === "outline" && (
                                    <h2
                                        className="font-inter font-black uppercase tracking-tighter text-outline"
                                        style={{
                                            fontSize: "clamp(2.2rem, 5.5vw, 7.5vw)",
                                            WebkitTextStroke: "2px #06b6d4"
                                        }}
                                    >
                                        {line.text}
                                    </h2>
                                )}
                                {line.fill === "accent" && (
                                    <h2
                                        className="font-inter font-black uppercase tracking-tighter text-black bg-cyan-500 inline-block px-3 shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                                        style={{ fontSize: "clamp(2.2rem, 5.5vw, 7.5vw)", backgroundColor: '#06b6d4' }}
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
                    <div className="w-12 h-[2px] bg-cyan-500 shrink-0 shadow-[0_0_10px_rgba(6,182,212,0.5)]" style={{ backgroundColor: '#06b6d4' }} />
                    <div>
                        <p className="font-space-mono text-xs font-bold uppercase tracking-[0.2em] text-cyan-400" style={{ color: '#06b6d4' }}>
                            Steve Jobs
                        </p>
                        <p className="font-space-mono text-[9px] uppercase tracking-widest text-foreground/50 mt-[1px]">
                            Co-Founder, Apple Inc.
                        </p>
                    </div>
                </div>
            </div>

            {/* ── Full-width divider ── */}
            <div ref={dividerRef} className="w-full h-[1px] bg-indigo-500/20 shrink-0 shadow-[0_0_20px_rgba(99,102,241,0.1)] relative z-10" />

        </section>
    );
}
