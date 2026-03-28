"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
    { target: 230, label: "LEETCODE SOLVED" },
    { target: 100, label: "GFG PROBLEMS" },
    { target: 8, label: "PROJECTS BUILT" },
];

const technologies = [
    "PYTHON", "NEXT.JS", "REACT", "TYPESCRIPT", "NODE.JS",
    "GSAP", "TAILWIND CSS", "JAVASCRIPT", "HTML", "CSS",
    "PANDAS", "NUMPY", "SQL", "GIT", "GITHUB"
];

// Reusable Counter Component
function TerminalCounter({ target }: { target: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        ScrollTrigger.create({
            trigger: ref.current,
            start: "top 80%",
            onEnter: () => {
                gsap.to({ val: 0 }, {
                    val: target,
                    duration: 2,
                    ease: "power2.out",
                    onUpdate: function () {
                        setCount(Math.floor(this.targets()[0].val));
                    }
                });
            },
            once: true
        });
    }, [target]);

    return <span ref={ref}>{count}</span>;
}

export default function Stats() {
    const containerRef = useRef<HTMLElement>(null);
    const techRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !techRef.current) return;

        const ctx = gsap.context(() => {
            // Stagger entrance for Tech Blocks
            gsap.fromTo(
                techRef.current!.children,
                { scale: 0.8, opacity: 0, y: 20 },
                {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.05,
                    ease: "back.out(2)",
                    scrollTrigger: {
                        trigger: techRef.current,
                        start: "top 85%",
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative flex flex-col md:flex-row min-h-screen w-screen bg-background border-b border-white/5 structural-grid overflow-hidden"
        >
            {/* Ambient Multiverse Glow */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[60vw] h-[60vh] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[40vw] h-[40vh] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

            {/* Left Column: Terminal Counters */}
            <div className="w-full md:w-[50%] border-r border-white/5 flex flex-col relative z-10 bg-background/50 backdrop-blur-sm">
                <div className="border-b border-cyan-500/20 p-4 bg-cyan-500/10 flex justify-between">
                    <span className="font-space-mono text-xs font-bold uppercase text-cyan-400 tracking-widest">03 // Metrics Dashboard</span>
                    <span className="font-space-mono text-xs font-bold uppercase text-blue-400 animate-pulse">Status: ANALYZING...</span>
                </div>

                <div className="flex-1 flex flex-col justify-center p-8 md:p-16 gap-16">
                    {metrics.map((metric, idx) => (
                        <div key={idx} className="flex flex-col border-l-2 border-cyan-500 pl-6 hover:translate-x-2 transition-transform duration-300 group">
                            <div className="text-[12vw] md:text-[8vw] font-inter font-black leading-none text-foreground tracking-tighter drop-shadow-[0_0_20px_rgba(6,182,212,0.2)] group-hover:text-cyan-400 transition-colors">
                                <TerminalCounter target={metric.target} /><span className="text-cyan-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]">+</span>
                            </div>
                            <div className="font-space-mono font-bold tracking-widest uppercase text-sm mt-3 text-foreground/70">
                                <span className="text-cyan-400">&gt;_</span> {metric.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Column: Tech Arsenal */}
            <div className="w-full md:w-[50%] flex flex-col relative z-10 bg-background/80 backdrop-blur-md">
                <div className="border-b border-white/5 p-4 flex justify-between bg-black/50">
                    <span className="font-space-mono text-xs font-bold uppercase text-foreground/50 tracking-widest">04 // Tech Stack Allocation</span>
                    <span className="font-space-mono text-xs font-bold uppercase text-cyan-400">Primary_Node</span>
                </div>

                <div className="flex-1 w-full flex items-center justify-center p-8 md:p-12 lg:p-16">
                    <div ref={techRef} className="flex flex-wrap gap-4">
                        {technologies.map((tech, idx) => (
                            <div
                                key={idx}
                                className="bg-transparent text-foreground border border-white/10 px-5 py-3 font-space-mono font-bold tracking-widest text-sm md:text-base uppercase hover:bg-indigo-600 hover:text-white hover:border-blue-400 transition-all duration-300 transform-gpu cursor-default shadow-[0_0_10px_rgba(99,102,241,0.0)] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:-translate-y-1 rounded-sm"
                            >
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}
