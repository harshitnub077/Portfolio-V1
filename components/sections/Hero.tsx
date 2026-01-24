"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setCursorPos({ x: e.clientX, y: e.clientY });

            // Magnetic Effect
            const chars = document.querySelectorAll(".hero-char");
            chars.forEach((char) => {
                const rect = (char as HTMLElement).getBoundingClientRect();
                const charCenter = {
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2
                };

                const dist = Math.hypot(e.clientX - charCenter.x, e.clientY - charCenter.y);
                const maxDist = 300; // Radius of effect

                if (dist < maxDist) {
                    const strength = (maxDist - dist) / maxDist;
                    gsap.to(char, {
                        y: -strength * 30, // Move up slightly
                        scale: 1 + strength * 0.2, // Scale up
                        color: "white",
                        duration: 0.3,
                        ease: "power2.out"
                    });
                } else {
                    gsap.to(char, {
                        y: 0,
                        scale: 1,
                        color: "rgba(255,255,255,0.9)",
                        duration: 0.3,
                        ease: "power2.out"
                    });
                }
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // Elegant Reveal
            tl.from(".hero-char", {
                y: 100,
                opacity: 0,
                rotateX: -90,
                stagger: 0.05,
                duration: 1.5,
                ease: "power4.out",
                delay: 0.5,
            }).from(
                ".hero-subtitle",
                {
                    opacity: 0,
                    y: 20,
                    duration: 1.5,
                    ease: "power2.out",
                },
                "-=1"
            );

            // Scroll Fade
            gsap.to(textRef.current, {
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
                y: 100,
                opacity: 0,
                scale: 0.95
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden"
        >
            {/* Spotlight Effect */}
            <div
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-1000"
                style={{
                    background: `radial-gradient(800px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(50,50,50,0.15), transparent 40%)`
                }}
            />

            <div ref={textRef} className="relative z-10 text-center px-4 mix-blend-difference">
                {/* Subtle decorative line */}
                <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent mx-auto mb-8" />

                <p className="hero-subtitle text-xs md:text-sm font-sans tracking-[0.3em] uppercase text-neutral-500 mb-6">
                    Digital Experiences
                </p>

                <h1 className="text-[12vw] md:text-[10vw] leading-none font-heading font-black tracking-tighter text-white/90 whitespace-nowrap overflow-hidden cursor-default">
                    {"HARSHIT KUDHIAL".split("").map((char, i) => (
                        <span key={i} className="hero-char inline-block origin-bottom transition-colors will-change-transform">
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </h1>

                <div className="hero-subtitle mt-8 md:mt-12 flex flex-col items-center gap-6">
                    <p className="text-sm md:text-base font-sans text-neutral-400 max-w-lg leading-relaxed tracking-wide">
                        Crafting award-winning web interfaces with a focus on luxury, precision, and immersive interaction.
                    </p>
                </div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/20 animate-pulse">
                <ArrowDown className="w-6 h-6" />
            </div>

        </section>
    );
}
