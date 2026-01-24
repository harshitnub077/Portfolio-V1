"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const textContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // Initial Reveal - Staggered Kinetic Text
            tl.from(".kinetic-text", {
                y: 150,
                skewY: 10,
                opacity: 0,
                duration: 1.5,
                stagger: 0.15,
                ease: "power4.out",
                delay: 0.5,
            }).from(
                ".hero-meta",
                {
                    opacity: 0,
                    y: 20,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power2.out",
                },
                "-=1"
            );

            // Scroll Effect - Text Separation
            gsap.to(".kinetic-row-1", {
                xPercent: -10,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
            });

            gsap.to(".kinetic-row-2", {
                xPercent: 10,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
            });

            gsap.to(".kinetic-row-3", {
                xPercent: -5,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex flex-col justify-center px-4 overflow-hidden bg-[#0a0a0a]"
        >
            <div ref={textContainerRef} className="relative z-10 flex flex-col items-center md:items-start w-full max-w-[90vw] mx-auto perspective-[1000px]">
                {/* Row 1 */}
                <div className="kinetic-row-1 w-full text-center md:text-left mix-blend-difference">
                    <h1 className="kinetic-text text-[15vw] md:text-[11vw] font-bold font-heading leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-500">
                        DIGITAL
                    </h1>
                </div>

                {/* Row 2 */}
                <div className="kinetic-row-2 w-full text-center md:text-right mix-blend-difference">
                    <h1 className="kinetic-text text-[15vw] md:text-[11vw] font-bold font-heading leading-[0.8] tracking-tighter text-white">
                        ALCHEMIST
                    </h1>
                </div>

                {/* Row 3 - Name */}
                <div className="kinetic-row-3 w-full text-center md:text-left mt-8 md:mt-0">
                    <p className="kinetic-text text-xl md:text-3xl font-sans text-blue-500 font-bold tracking-widest uppercase">
                        Harshit Kudhial
                    </p>
                </div>
            </div>

            {/* Meta Info / Footer of Hero */}
            <div className="absolute bottom-10 left-0 w-full px-6 flex justify-between items-end">
                <div className="hero-meta hidden md:block">
                    <p className="text-sm text-neutral-500 font-mono uppercase">
                        Based in India
                        <br />
                        Available for freelance
                    </p>
                </div>

                <div className="hero-meta flex flex-col items-center gap-2">
                    <span className="text-xs text-neutral-500 uppercase tracking-widest">Scroll</span>
                    <ArrowDown className="w-5 h-5 text-white animate-bounce" />
                </div>

                <div className="hero-meta hidden md:block text-right">
                    <p className="text-sm text-neutral-500 font-mono uppercase">
                        Portfolio 2026
                        <br />
                        V1.0.0
                    </p>
                </div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-violet-600/20 rounded-full blur-[150px] opacity-40 pointer-events-none" />

        </section>
    );
}
