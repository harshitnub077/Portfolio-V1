"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Quote1() {
    const containerRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!containerRef.current || !textRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                textRef.current,
                { y: 100, opacity: 0, rotationX: -20 },
                {
                    y: 0,
                    opacity: 1,
                    rotationX: 0,
                    duration: 1.5,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="w-full min-h-screen bg-primary flex items-center justify-center relative overflow-hidden px-6 py-20"
        >
            <div className="absolute inset-0 font-space-mono text-[20vw] font-bold text-black opacity-5 pointer-events-none leading-none select-none flex items-center justify-center">
                VISION
            </div>

            <div className="z-10 max-w-7xl mx-auto text-center perspective-1000">
                <h2
                    ref={textRef}
                    className="font-inter font-black text-black leading-[0.92] tracking-tighter uppercase text-center"
                    style={{ fontSize: "clamp(2rem, 5vw, 6rem)", transformStyle: "preserve-3d" }}
                >
                    &quot;DESIGN IS NOT JUST WHAT IT LOOKS LIKE. <br className="hidden md:block" />
                    <span className="text-white drop-shadow-[6px_6px_0_rgba(0,0,0,1)]">DESIGN IS HOW IT WORKS.&quot;</span>
                </h2>
                <div className="mt-10 font-space-mono text-base md:text-xl font-bold text-black border-t-2 border-black inline-block pt-5 tracking-[0.2em]">
                    — STEVE JOBS
                </div>
            </div>
        </section>
    );
}
