"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Github, Twitter, Linkedin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top,
                });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // 1. Grid Reveal
            tl.from(".grid-line", {
                scaleY: 0,
                duration: 1.5,
                stagger: 0.1,
                ease: "power3.inOut",
                transformOrigin: "top"
            })
                .from(".horizontal-line", {
                    scaleX: 0,
                    duration: 1.5,
                    ease: "power3.inOut",
                    transformOrigin: "left"
                }, "<")

                // 2. Content Reveal
                .from(".hero-content", {
                    y: 30,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power2.out",
                    delay: 0.2
                }, "-=0.5");

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen bg-black overflow-hidden pt-32 pb-20 px-4 md:px-8 flex flex-col justify-center"
        >
            {/* Spotlight Effect */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`,
                }}
            />

            {/* Grid Background Lines (Pseudo-Swiss Grid) */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Vertical Lines */}
                <div className="grid-line absolute left-8 md:left-16 top-0 bottom-0 w-px bg-white/5" />
                <div className="grid-line absolute right-8 md:right-16 top-0 bottom-0 w-px bg-white/5" />
                <div className="grid-line absolute left-1/2 top-0 bottom-0 w-px bg-white/5 hidden md:block" />

                {/* Horizontal Lines */}
                <div className="horizontal-line absolute top-32 left-0 right-0 h-px bg-white/5" />
                <div className="horizontal-line absolute bottom-20 left-0 right-0 h-px bg-white/5" />
            </div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 z-10">

                {/* Left Column: Typography */}
                <div className="flex flex-col justify-center md:pr-16 relative">
                    <div className="hero-content mb-8">
                        <Badge variant="outline" className="rounded-full px-4 py-1 text-xs font-mono text-neutral-400 border-white/10 bg-white/5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
                            v2.0 // 2026
                        </Badge>
                    </div>

                    <h1 className="hero-content text-6xl sm:text-7xl md:text-8xl font-bold font-heading text-white tracking-tighter leading-[0.9] mb-6">
                        HARSHIT<br />
                        <span className="text-neutral-500">KUDHIAL</span>
                    </h1>

                    <p className="hero-content text-lg text-neutral-400 max-w-md leading-relaxed mb-8">
                        Engineering precision-crafted digital experiences. Specializing in high-performance web applications and AI integration.
                    </p>

                    <div className="hero-content flex gap-4">
                        <Button className="rounded-full px-8 h-12 text-sm font-bold bg-white text-black hover:bg-neutral-200">
                            View Work
                        </Button>
                        <Button variant="outline" className="rounded-full px-8 h-12 text-sm font-bold border-white/20 hover:bg-white/5 text-white bg-transparent">
                            Contact
                        </Button>
                    </div>
                </div>

                {/* Right Column: Bento Grid Info */}
                <div className="flex flex-col justify-center md:pl-16 relative">
                    <div className="hero-content grid grid-cols-1 gap-6 md:gap-8">

                        {/* Stat Card */}
                        <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl hover:border-white/20 transition-colors">
                            <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-2">Current Focus</h3>
                            <p className="text-xl text-white font-medium">Building accessible AI interfaces & exploring WebGL.</p>
                        </div>

                        {/* Location / Tech */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl hover:border-white/20 transition-colors">
                                <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-2">Location</h3>
                                <p className="text-lg text-white">New Delhi, IN</p>
                                <p className="text-sm text-neutral-500">Remote Available</p>
                            </div>
                            <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl hover:border-white/20 transition-colors">
                                <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-2">Expertise</h3>
                                <p className="text-lg text-white">Next.js, React</p>
                                <p className="text-sm text-neutral-500">Tailwind, GSAP</p>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="flex gap-4 pt-4">
                            {[Github, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="p-3 border border-white/10 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
