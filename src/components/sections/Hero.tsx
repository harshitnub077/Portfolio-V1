"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ChevronDown } from "lucide-react";
import HeroBackground3D from "@/components/ui/HeroBackground3D";

export default function Hero() {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ delay: 2.5 });

        // Animate status badge
        tl.from(".hero-status", {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power3.out",
        })
        // Animate each line of the name
        .from(".hero-name-line", {
            y: "120%",
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.15,
        }, "-=0.4")
        // Animate subtitle
        .from(".hero-subtitle", {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
        }, "-=0.5")
        // Animate role tags
        .from(".hero-tag", {
            opacity: 0,
            y: 20,
            scale: 0.9,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
        }, "-=0.3")
        // Animate scroll indicator
        .from(".hero-scroll", {
            opacity: 0,
            duration: 0.8,
        }, "-=0.2");

    }, { scope: container });

    return (
        <section
            ref={container}
            id="hero"
            className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
        >
            {/* 3D Background */}
            <HeroBackground3D />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
                {/* Status Badge */}
                <div className="hero-status inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10">
                    <div className="status-dot" />
                    <span className="text-sm font-space-mono text-white/70 tracking-wide">
                        Available for Opportunities
                    </span>
                </div>

                {/* Name - Massive Display Typography */}
                <div className="mb-6">
                    <div className="overflow-hidden">
                        <h1 className="hero-name-line text-[12vw] md:text-[8vw] lg:text-[7vw] font-bold tracking-tighter leading-[0.9] text-white">
                            HARSHIT
                        </h1>
                    </div>
                    <div className="overflow-hidden">
                        <h1 className="hero-name-line text-[12vw] md:text-[8vw] lg:text-[7vw] font-bold tracking-tighter leading-[0.9] text-gradient">
                            KUDHIAL
                        </h1>
                    </div>
                </div>

                {/* Subtitle */}
                <p className="hero-subtitle text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
                    AI/ML Engineer specializing in agentic AI systems, RAG, and LLM orchestration.
                    <br className="hidden md:block" />
                    Building production-grade intelligent systems.
                </p>

                {/* Role Tags */}
                <div className="flex flex-wrap justify-center gap-3">
                    {["Agentic AI", "RAG Systems", "Full-Stack", "LLM Orchestration"].map((tag) => (
                        <span
                            key={tag}
                            className="hero-tag px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/60 font-space-mono tracking-wide"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="section-label">Scroll</span>
                <ChevronDown className="w-5 h-5 text-white/40 scroll-indicator" />
            </div>
        </section>
    );
}
