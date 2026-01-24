"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
    const [percent, setPercent] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Counter Animation
        const interval = setInterval(() => {
            setPercent((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + Math.floor(Math.random() * 5) + 1;
            });
        }, 50);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (percent >= 100) {
            const tl = gsap.timeline();

            tl.to(".counter-num", {
                y: -100,
                opacity: 0,
                duration: 0.8,
                ease: "power2.in"
            })
                .to(containerRef.current, {
                    y: "-100%",
                    duration: 1.2,
                    ease: "expo.inOut",
                });
        }
    }, [percent]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#050505] text-white overflow-hidden"
        >
            <div className="relative overflow-hidden">
                <h1 className="counter-num text-9xl md:text-[12rem] font-bold font-heading tabular-nums leading-none tracking-tighter">
                    {Math.min(percent, 100)}%
                </h1>
            </div>

            <div className="counter-num mt-4 text-neutral-500 font-mono text-sm tracking-widest uppercase">
                Initializing Protocols...
            </div>

            {/* Progress Bar Line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-neutral-900">
                <div
                    className="h-full bg-white transition-all duration-75 ease-linear"
                    style={{ width: `${Math.min(percent, 100)}%` }}
                />
            </div>
        </div>
    );
}
