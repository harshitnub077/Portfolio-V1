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
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
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
            className="relative flex flex-col md:flex-row min-h-screen w-screen bg-white border-b-2 border-black structural-grid"
        >
            {/* Left Column: Terminal Counters */}
            <div className="w-full md:w-[50%] border-r-2 border-black flex flex-col">
                <div className="border-b-2 border-black p-4 bg-primary flex justify-between">
                    <span className="font-space-mono text-xs font-bold uppercase">02 // Metrics Dashboard</span>
                    <span className="font-space-mono text-xs font-bold uppercase">Status: OK</span>
                </div>

                <div className="flex-1 flex flex-col justify-center p-8 md:p-16 gap-12">
                    {metrics.map((metric, idx) => (
                        <div key={idx} className="flex flex-col border-l-4 border-secondary pl-6">
                            <div className="text-[12vw] md:text-[8vw] font-inter font-black leading-none text-black tracking-tighter">
                                <TerminalCounter target={metric.target} /><span className="text-primary">+</span>
                            </div>
                            <div className="font-space-mono font-bold tracking-tight uppercase text-sm mt-2">
                                &gt;_ {metric.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Column: Tech Arsenal */}
            <div className="w-full md:w-[50%] flex flex-col bg-black text-white">
                <div className="border-b-2 border-white/20 p-4 flex justify-between bg-[#111]">
                    <span className="font-space-mono text-xs font-bold uppercase">03 // Tech Stack Allocation</span>
                    <span className="font-space-mono text-xs font-bold uppercase text-primary">Active</span>
                </div>

                <div className="flex-1 w-full flex items-center justify-center p-8 md:p-16">
                    <div ref={techRef} className="flex flex-wrap gap-4">
                        {technologies.map((tech, idx) => (
                            <div
                                key={idx}
                                className="bg-white text-black px-6 py-4 font-inter font-black tracking-tighter text-xl md:text-2xl uppercase hover:bg-primary hover:scale-105 transition-all duration-300 transform-gpu cursor-none"
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
