"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
    const containerRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!containerRef.current || !textRef.current) return;

        // The Editorial Fill-In Animation
        const ctx = gsap.context(() => {
            gsap.to(textRef.current, {
                backgroundPosition: "0% 0",
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%",
                    end: "bottom 80%",
                    scrub: 1, // Tie it directly to the scrollbar
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative flex flex-col items-center justify-center min-h-screen w-screen px-[5%] md:px-[10%] box-border bg-white border-b-2 border-black structural-grid"
        >
            <div className="absolute top-0 left-[10%] w-[2px] h-full bg-black/10 hidden md:block" />
            <div className="absolute top-0 right-[10%] w-[2px] h-full bg-black/10 hidden md:block" />

            <div className="w-full flex justify-between items-end mb-12 border-b-2 border-black pb-4">
                <h2 className="font-space-mono text-sm uppercase tracking-tighter font-bold bg-black text-white px-2 py-1">
                    01 // Prologue
                </h2>
                <span className="font-space-mono text-xs uppercase tracking-tighter">
                    Origin: Earth
                </span>
            </div>

            <h1
                ref={textRef}
                className="text-fill-target w-full text-[8vw] md:text-[6vw] font-inter font-black leading-[1] text-left uppercase tracking-tighter"
            >
                I AM A FULL STACK & MACHINE LEARNING ENGINEER CRAFTING SCALABLE SYSTEMS AND INTELLIGENT INTERFACES. A RELENTLESS PHILOMATH, BRIDGING RAW DATA WITH DIGITAL ELEGANCE.
            </h1>

        </section>
    );
}
