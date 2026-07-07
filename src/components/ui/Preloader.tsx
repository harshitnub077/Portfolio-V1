"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLSpanElement>(null);

    // Simulate loading progress
    useEffect(() => {
        const target = { val: 0 };
        
        gsap.to(target, {
            val: 100,
            duration: 2,
            ease: "power2.inOut",
            onUpdate: () => {
                setProgress(Math.round(target.val));
            },
            onComplete: () => {
                setProgress(100);
            },
        });
    }, []);

    // Cinematic exit animation
    useEffect(() => {
        if (progress < 100) return;

        const tl = gsap.timeline({
            onComplete: () => setIsLoading(false),
        });

        // Fade out counter and text
        tl.to(".preloader-content", {
            opacity: 0,
            y: -30,
            duration: 0.5,
            ease: "power2.in",
        })
        // Split-curtain reveal
        .to(".preloader-left", {
            xPercent: -100,
            duration: 1,
            ease: "power4.inOut",
        }, "+=0.1")
        .to(".preloader-right", {
            xPercent: 100,
            duration: 1,
            ease: "power4.inOut",
        }, "<");
    }, [progress]);

    if (!isLoading) return null;

    return (
        <div ref={containerRef} className="fixed inset-0 z-[9990] pointer-events-none">
            {/* Left curtain */}
            <div className="preloader-left absolute top-0 left-0 w-1/2 h-full bg-[#050505] z-[9991]" />
            {/* Right curtain */}
            <div className="preloader-right absolute top-0 right-0 w-1/2 h-full bg-[#050505] z-[9991]" />

            {/* Content overlay */}
            <div className="preloader-content absolute inset-0 z-[9992] flex flex-col items-center justify-center">
                {/* HK Monogram */}
                <div className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white">
                    H<span className="text-gradient">K</span>
                </div>
                
                {/* Counter */}
                <div className="flex items-baseline gap-1">
                    <span
                        ref={counterRef}
                        className="font-space-mono text-6xl md:text-8xl font-bold text-white tabular-nums"
                    >
                        {progress > 100 ? 100 : progress}
                    </span>
                    <span className="font-space-mono text-2xl md:text-3xl text-white/50">%</span>
                </div>

                {/* Loading bar */}
                <div className="mt-8 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full transition-all duration-100"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                    />
                </div>
            </div>
        </div>
    );
}
