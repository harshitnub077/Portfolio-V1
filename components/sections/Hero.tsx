"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // 1. Initial State (Set via GSAP for better control than CSS)
            gsap.set(".hero-char", { filter: "blur(10px)", opacity: 0, y: 30 });
            gsap.set(".hero-elem", { opacity: 0, y: 20 });

            // 2. Blur Reveal Animation for Title
            tl.to(".hero-char", {
                filter: "blur(0px)",
                opacity: 1,
                y: 0,
                duration: 1.5,
                stagger: 0.05,
                ease: "power2.out",
                delay: 0.2
            })
                // 3. Reveal other elements
                .to(".hero-elem", {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power2.out"
                }, "-=1.0");

            // 4. Subtle Ambient Background Motion (Breathing)
            gsap.to(".ambient-glow", {
                scale: 1.2,
                opacity: 0.6,
                duration: 8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

        }, heroRef);
        return () => ctx.revert();
    }, []);

    const name = "Harshit Kudhial";

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden px-4"
        >
            <div ref={textRef} className="relative z-10 text-center max-w-4xl mx-auto space-y-8">

                <div className="hero-elem">
                    <Badge variant="secondary" className="px-4 py-2 text-sm rounded-full backdrop-blur-sm bg-white/5 border border-white/10 text-neutral-400 font-normal">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                        Available for new projects
                    </Badge>
                </div>

                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-foreground font-heading overflow-hidden pb-4">
                    {name.split("").map((char, i) => (
                        <span key={i} className="hero-char inline-block">
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </h1>

                <p className="hero-elem text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Full Stack Developer & AI Enthusiast. Building accessible, pixel-perfect, and performant web experiences.
                </p>

                <div className="hero-elem flex flex-col sm:flex-row gap-4 justify-center pt-6">
                    <Button size="lg" className="rounded-full text-base font-medium h-12 px-8">
                        View Projects
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full text-base font-medium h-12 px-8 bg-transparent hover:bg-secondary/50">
                        Contact Me
                    </Button>
                </div>

            </div>

            {/* Minimal Pattern Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {/* Ambient Glow */}
            <div className="ambient-glow absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#ffffff08,transparent)] pointer-events-none opacity-40" />

        </section>
    );
}
