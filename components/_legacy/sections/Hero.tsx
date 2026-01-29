"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { ArrowDown } from "lucide-react";
import Scene from "@/components/3d/Scene";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const subTextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // Reveal Animation
            tl.from(".hero-line", {
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: "power4.out",
                delay: 0.5
            })
                .from(subTextRef.current, {
                    opacity: 0,
                    y: 20,
                    duration: 1,
                    ease: "power2.out",
                }, "-=0.8");

            // Scroll Parallax
            gsap.to(textRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
                y: 150,
                scale: 1.05,
                opacity: 0.5,
                filter: "blur(5px)",
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen w-full bg-[#000000] flex flex-col justify-center items-center overflow-hidden">

            {/* 3D Scene Background */}
            <Scene />

            <div ref={textRef} className="z-10 flex flex-col items-center justify-center leading-[0.8] select-none mix-blend-difference text-center">
                <div className="overflow-hidden">
                    <h1 className="hero-line text-[14vw] md:text-[16vw] font-black text-[#ffffff] tracking-tighter cursor-default">
                        HARSHIT
                    </h1>
                </div>
                <div className="overflow-hidden">
                    <h1 className="hero-line text-[14vw] md:text-[16vw] font-black text-[#ffffff] tracking-tighter cursor-default">
                        KUDHIAL
                    </h1>
                </div>
            </div>

            {/* Subtext */}
            <div ref={subTextRef} className="absolute bottom-12 left-0 w-full px-8 md:px-16 flex justify-between items-end z-20 text-[#ffffff] mix-blend-exclusion">
                <div className="flex flex-col font-mono text-xs md:text-sm tracking-widest opacity-80 gap-1">
                    <span>CREATIVE DEVELOPER</span>
                    <span>ML ENGINEER</span>
                </div>

                <div className="flex flex-col items-center gap-2 animate-bounce">
                    <span className="text-[10px] font-mono opacity-50">EXPLORE</span>
                    <ArrowDown className="w-4 h-4 text-white" />
                </div>

                <div className="font-mono text-xs md:text-sm tracking-widest opacity-80 text-right gap-1 flex flex-col">
                    <span>NEW DELHI, IN</span>
                    <span>OPEN FOR WORK</span>
                </div>
            </div>
        </section>
    );
}
