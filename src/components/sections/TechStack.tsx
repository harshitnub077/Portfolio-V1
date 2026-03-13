"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
    "Python", "HTML", "CSS", "JavaScript", "Next.js", "Node.js",
    "Pandas", "React", "TypeScript", "Tailwind CSS", "GSAP",
    "Git", "GitHub", "SQL", "NumPy", "Framer Motion", "MongoDB"
];

export default function TechStack() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !titleRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                }
            });

            // Slide in Title
            tl.fromTo(
                titleRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
            );

            // Stagger Pills
            tl.fromTo(
                ".tech-pill",
                { scale: 0.8, opacity: 0, y: 20 },
                {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    stagger: 0.05,
                    ease: "back.out(2)",
                },
                "-=0.4"
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-32 bg-background relative border-b border-primary/20 px-6 md:px-12 overflow-hidden">
            
            {/* Ambient Background Effect */}
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[50vw] h-[50vh] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

            {/* Faint Grid Lines */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-30">
                <div
                    className="absolute w-[200vw] h-[200vh]"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(223, 255, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(223, 255, 0, 0.05) 1px, transparent 1px)`,
                        backgroundSize: '100px 100px',
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center relative z-10">

                {/* Left Side: Massive Title */}
                <div ref={titleRef} className="w-full md:w-[40%]">
                    <div className="mb-6 inline-flex items-center gap-3 px-4 py-2 border border-primary/30 bg-primary/5 font-space-mono font-bold text-xs uppercase text-primary">
                        <span className="w-2 h-2 bg-primary animate-pulse"/>
                        04 // Core Technologies
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black font-inter tracking-tighter text-foreground leading-[1.1] uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        Tools I <br/>
                        <span className="text-outline text-transparent" style={{ WebkitTextStroke: "2px var(--color-primary)" }}>Build</span> With.
                    </h2>
                </div>

                {/* Right Side: Hollow Neon Hover Pills */}
                <div ref={containerRef} className="w-full md:w-[60%] flex flex-wrap gap-4 justify-start md:justify-end">
                    {skills.map((skill, idx) => (
                        <div
                            key={idx}
                            className="tech-pill px-6 py-4 bg-transparent border border-primary/40 rounded-sm text-sm lg:text-base font-bold font-space-mono tracking-widest uppercase text-foreground/80 hover:text-primary-foreground hover:bg-primary hover:border-primary transition-all duration-300 transform-gpu cursor-default shadow-[0_0_15px_rgba(223,255,0,0.0)] hover:shadow-[0_0_20px_rgba(223,255,0,0.4)] hover:-translate-y-1"
                        >
                            {skill}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
