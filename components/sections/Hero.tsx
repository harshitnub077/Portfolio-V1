"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.5 } });

            // Dramatic Entrance
            tl.from(nameRef.current, {
                scale: 1.5,
                opacity: 0,
                filter: "blur(20px)",
                duration: 2,
            })
                .from(".hero-sub", {
                    y: 50,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 1,
                }, "-=1")
                .from(".hero-btn", {
                    scale: 0,
                    opacity: 0,
                    duration: 0.8,
                    ease: "back.out(1.7)",
                }, "-=0.5");

            // Scroll Parallax for Name
            gsap.to(nameRef.current, {
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 0.5,
                },
                y: 200,
                scale: 0.9,
                opacity: 0.2,
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4"
        >
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-violet-600/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-blue-600/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-neutral-800/20 rounded-full blur-[80px]" />
            </div>

            <div ref={textRef} className="relative z-10 text-center w-full max-w-[90vw]">
                <p className="hero-sub text-blue-500 font-bold tracking-[0.2em] uppercase mb-4 md:mb-8 text-sm md:text-base">
                    Portfolio V1.0
                </p>

                {/* MASSIVE Name Typography */}
                <h1
                    ref={nameRef}
                    className="text-[12vw] leading-[0.85] font-black font-heading tracking-tighter text-white mix-blend-difference select-none whitespace-nowrap"
                >
                    HARSHIT
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-800">
                        KUDHIAL
                    </span>
                </h1>

                <div className="hero-sub mt-12 flex flex-col items-center gap-6">
                    <p className="text-xl md:text-3xl text-neutral-400 font-light max-w-2xl">
                        Designing the <span className="text-white font-medium">Future</span> of Digital Interaction.
                    </p>

                    <div className="flex gap-6">
                        <button className="hero-btn group px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center gap-2">
                            Explore Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 zless pointer-events-none" />
        </section>
    );
}
