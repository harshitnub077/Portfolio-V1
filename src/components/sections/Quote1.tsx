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
            className="w-full min-h-[60vh] bg-primary flex items-center justify-center relative overflow-hidden px-6"
        >
            <div className="absolute inset-0 font-space-mono text-[20vw] font-bold text-black opacity-5 pointer-events-none leading-none select-none flex items-center justify-center">
                VISION
            </div>

            <div className="z-10 max-w-5xl mx-auto text-center perspective-1000">
                <h2
                    ref={textRef}
                    className="font-inter font-black text-black text-4xl md:text-6xl lg:text-8xl leading-[0.9] tracking-tighter uppercase"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    &quot;DESIGN IS NOT JUST WHAT IT LOOKS LIKE. <br className="hidden md:block" />
                    <span className="text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">DESIGN IS HOW IT WORKS.&quot;</span>
                </h2>
                <div className="mt-8 font-space-mono text-sm md:text-base font-bold text-black border-t-2 border-black inline-block pt-4 tracking-widest">
                    — STEVE JOBS
                </div>
            </div>
        </section>
    );
}
