"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);
    const name1Ref = useRef<HTMLHeadingElement>(null);
    const name2Ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            // Kinetic Marquee Animation
            if (marqueeRef.current) {
                gsap.to(marqueeRef.current.children, {
                    xPercent: -50,
                    repeat: -1,
                    duration: 10,
                    ease: "linear"
                });
            }

            // Staggered Brutal Reveal
            const tl = gsap.timeline({ delay: 1 }); // Wait for preloader
            tl.fromTo(
                [name1Ref.current, name2Ref.current],
                { y: "110%", clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
                {
                    y: "0%",
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    duration: 1,
                    stagger: 0.1,
                    ease: "power4.out"
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const marqueeText = Array(20).fill("SWISS KINETIC BLUEPRINT").join(" • ");

    return (
        <section
            ref={containerRef}
            className="relative flex flex-col w-screen min-h-screen bg-white structural-grid pt-24 border-b-2 border-black"
        >
            {/* Top Meta Data Bar */}
            <div className="absolute top-0 left-0 w-full h-16 border-b-2 border-black flex items-center justify-between px-6 bg-white z-20">
                <div className="font-space-mono text-xs font-bold uppercase tracking-tighter">HK / 0.7.0</div>
                <div className="font-space-mono text-xs font-bold uppercase tracking-tighter flex gap-8 hidden md:flex">
                    <span>Lat: 28.6139° N</span>
                    <span>Lon: 77.2090° E</span>
                </div>
                <div className="font-space-mono text-xs font-bold uppercase tracking-tighter bg-primary px-3 py-1 border-2 border-black">
                    System Online
                </div>
            </div>

            {/* Main Structural Quadrants */}
            <div className="flex-1 flex flex-col md:flex-row w-full mt-[-24px]">
                {/* Left Column (Main Name) */}
                <div className="w-full md:w-[70%] border-r-2 border-black flex flex-col justify-end p-6 md:p-12 overflow-hidden h-[60vh] md:h-auto">
                    <div className="overflow-hidden">
                        <h1 ref={name1Ref} className="text-[18vw] md:text-[14vw] font-inter font-black leading-[0.8] tracking-tighter uppercase text-black">
                            HARSHIT
                        </h1>
                    </div>
                    <div className="overflow-hidden mt-[-2vw]">
                        <h1 ref={name2Ref} className="text-[18vw] md:text-[14vw] font-inter font-black leading-[0.8] tracking-tighter uppercase text-outline">
                            KUDHIAL
                        </h1>
                    </div>
                </div>

                {/* Right Column (Details) */}
                <div className="w-full md:w-[30%] flex flex-col">
                    <div className="flex-1 border-b-2 border-black p-6 md:p-12 flex flex-col justify-end bg-black text-white">
                        <h3 className="font-inter font-bold text-2xl md:text-3xl uppercase leading-none mb-4">
                            Full Stack<br />Engineer
                        </h3>
                        <p className="font-space-mono text-xs leading-tight opacity-70">
                            Architecting scalable web infrastructure and integrating machine learning pipelines for high-performance applications.
                        </p>
                    </div>
                    <div className="h-32 md:h-1/3 bg-white p-6 md:p-12 flex items-center">
                        <div className="w-16 h-16 md:w-24 md:h-24 border-4 border-black rounded-full flex items-center justify-center">
                            <span className="font-space-mono text-2xl font-bold animate-[spin_4s_linear_infinite]">↓</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Acid Green Horizontal Kinetic Marquee */}
            <div className="w-full border-t-2 border-black bg-primary overflow-hidden flex items-center py-2 z-10">
                <div ref={marqueeRef} className="flex whitespace-nowrap">
                    <div className="font-space-mono font-bold text-black text-sm md:text-lg uppercase px-4 pointer-events-none">
                        {marqueeText}
                    </div>
                    <div className="font-space-mono font-bold text-black text-sm md:text-lg uppercase px-4 pointer-events-none">
                        {marqueeText}
                    </div>
                </div>
            </div>

        </section>
    );
}
