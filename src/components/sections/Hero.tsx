"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HKLogo from "@/components/ui/HKLogo";


gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);
    const marquee2Ref = useRef<HTMLDivElement>(null);
    const name1Ref = useRef<HTMLHeadingElement>(null);
    const name2Ref = useRef<HTMLHeadingElement>(null);
    const quoteRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        let marquee1Tween: gsap.core.Tween;
        let marquee2Tween: gsap.core.Tween;

        const ctx = gsap.context(() => {
            // Kinetic Marquee Animations
            if (marqueeRef.current) {
                marquee1Tween = gsap.to(marqueeRef.current.children, { xPercent: -50, repeat: -1, duration: 20, ease: "linear" });
            }
            if (marquee2Ref.current) {
                marquee2Tween = gsap.to(marquee2Ref.current.children, { xPercent: -50, repeat: -1, duration: 20, ease: "linear" });
            }

            // Staggered Brutal Reveal + Elegant Quote
            const tl = gsap.timeline({ delay: 1 });
            tl.fromTo(
                [name1Ref.current, name2Ref.current],
                { y: "110%", clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
                { y: "0%", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1, stagger: 0.1, ease: "power4.out" }
            );

            tl.fromTo(
                quoteRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
                "-=0.4"
            );

            // Scroll Interaction for Marquee Speed/Direction
            let currentDirection = 1;
            let currentVelocity = 0;

            ScrollTrigger.create({
                start: 0,
                end: "max",
                onUpdate: (self) => {
                    if (self.direction === 1 || self.direction === -1) {
                        currentDirection = self.direction;
                    }
                    currentVelocity = Math.abs(self.getVelocity()) / 200;
                }
            });

            // Smoothly animate the timeScale every frame to prevent stopping overrides
            const render = () => {
                currentVelocity += (0 - currentVelocity) * 0.05; // Decay
                const targetTimeScale = currentDirection * (1 + currentVelocity); // Base speed 1 + extra
                const clampedTimeScale = gsap.utils.clamp(-5, 5, targetTimeScale);

                if (marquee1Tween) marquee1Tween.timeScale(clampedTimeScale);
                if (marquee2Tween) marquee2Tween.timeScale(clampedTimeScale);
            };

            gsap.ticker.add(render);

            // Cleanup ticker
            return () => gsap.ticker.remove(render);
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const marqueeText = Array(20).fill("SWISS KINETIC BLUEPRINT").join(" • ");

    return (
        <section
            ref={containerRef}
            className="relative flex flex-col w-screen h-screen bg-white structural-grid pt-16 border-b-2 border-black overflow-hidden"
        >
            {/* Top Tilted Marquee (Absolute) */}
            <div className="absolute -top-[5%] -right-[30%] w-[150vw] md:w-[100vw] border-y-[3px] border-black bg-primary overflow-hidden flex items-center py-4 z-[40] rotate-[50deg] pointer-events-none hidden md:flex shadow-2xl">
                <div ref={marquee2Ref} className="flex whitespace-nowrap">
                    <div className="font-space-mono font-bold text-black text-lg uppercase px-4 pointer-events-none">
                        {marqueeText}
                    </div>
                    <div className="font-space-mono font-bold text-black text-lg uppercase px-4 pointer-events-none">
                        {marqueeText}
                    </div>
                </div>
            </div>


            {/* ─── Top Navigation Bar ─── */}
            <nav className="absolute top-0 left-0 w-full h-16 border-b-2 border-black flex items-stretch justify-between bg-white/90 backdrop-blur-sm z-50 overflow-hidden">

                {/* Logo / Monogram */}
                <div className="flex items-center gap-3 px-5 border-r-2 border-black shrink-0">
                    <HKLogo size={36} />
                    <span className="font-space-mono text-xs font-bold uppercase tracking-tighter hidden sm:block">
                        Harshit Kudhial
                    </span>
                </div>

                {/* Center Nav Links */}
                <div className="hidden md:flex items-stretch">
                    {[
                        { label: "About", href: "#about" },
                        { label: "Projects", href: "#projects" },
                        { label: "Stack", href: "#stack" },
                        { label: "Contact", href: "#contact" },
                    ].map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="flex items-center px-6 font-space-mono text-xs font-bold uppercase tracking-widest text-black border-r border-black/20 hover:bg-black hover:text-primary transition-colors duration-200"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Right: Open to Work Badge */}
                <div className="flex items-center gap-3 px-6 border-l-2 border-black shrink-0">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="font-space-mono text-xs font-bold uppercase tracking-tighter text-black hidden sm:block">
                        Open To Work
                    </span>
                </div>
            </nav>

            {/* Main Structural Quadrants */}
            <div className="flex-1 flex flex-col md:flex-row w-full z-20">
                {/* Left Column (Quote & Main Name) */}
                <div className="w-full md:w-[70%] border-r-2 border-black flex flex-col p-6 md:p-12 h-full overflow-hidden relative">

                    {/* Quote */}
                    <div ref={quoteRef} className="mt-auto mb-8 max-w-sm md:max-w-md border-l-2 border-secondary pl-4 py-1">
                        <p className="font-inter italic text-sm md:text-base font-medium text-black/70 leading-relaxed">
                            &quot;First, solve the problem. Then, write the code.&quot;
                        </p>
                        <p className="font-space-mono text-xs uppercase tracking-widest text-secondary font-bold mt-2">
                            — John Johnson
                        </p>
                    </div>

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
                <div className="w-full md:w-[30%] flex flex-col h-full bg-white relative z-20">
                    <div className="flex-1 border-b-2 border-black p-6 md:p-12 flex flex-col justify-end bg-black text-white">
                        <h3 className="font-inter font-bold text-2xl md:text-3xl uppercase leading-none mb-4">
                            Full Stack<br />Engineer
                        </h3>
                        <p className="font-space-mono text-xs leading-tight opacity-70">
                            Architecting scalable web infrastructure and integrating machine learning pipelines for high-performance applications.
                        </p>
                    </div>
                    <div className="h-32 md:h-1/3 bg-white p-6 md:p-12 flex items-center justify-center border-t border-black">
                        <div className="w-16 h-16 md:w-24 md:h-24 border-4 border-black rounded-full flex items-center justify-center">
                            <span className="font-space-mono text-2xl font-bold animate-[spin_4s_linear_infinite]">↓</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Acid Green Horizontal Kinetic Marquee (Bottom Flush) */}
            <div className="w-full border-t-2 border-black bg-primary overflow-hidden flex items-center py-4 z-30 shrink-0">
                <div ref={marqueeRef} className="flex whitespace-nowrap">
                    <div className="font-space-mono font-bold text-black text-lg uppercase px-4 pointer-events-none">
                        {marqueeText}
                    </div>
                    <div className="font-space-mono font-bold text-black text-lg uppercase px-4 pointer-events-none">
                        {marqueeText}
                    </div>
                </div>
            </div>

        </section >
    );
}
