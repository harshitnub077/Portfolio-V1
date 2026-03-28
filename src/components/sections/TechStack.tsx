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
        <section className="min-h-screen bg-background relative border-b border-orange-500/10 px-6 md:px-12 overflow-hidden flex flex-col justify-center">
            
            {/* Ambient Multiverse Effect */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[50vw] h-[50vh] bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/4 w-[30vw] h-[30vh] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

            {/* Faint Grid Lines with Orange tint */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-40">
                <div
                    className="absolute w-[200vw] h-[200vh]"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(6, 182, 212, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.05) 1px, transparent 1px)`,
                        backgroundSize: '80px 80px',
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center relative z-10 w-full">

                {/* Left Side: Massive Title */}
                <div ref={titleRef} className="w-full md:w-[40%]">
                    <div className="mb-6 inline-flex items-center gap-3 px-4 py-2 border border-cyan-500/30 bg-cyan-500/10 font-space-mono font-bold text-xs uppercase text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                        <span className="w-2 h-2 bg-cyan-500 animate-pulse shadow-[0_0_10px_rgba(6,182,212,1)]"/>
                        05 // Core Technologies
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black font-inter tracking-tighter text-foreground leading-[1.1] uppercase drop-shadow-[0_0_20px_rgba(6,182,212,0.15)] group">
                        Tools I <br/>
                        <span className="text-outline text-transparent group-hover:text-cyan-400 transition-colors" style={{ WebkitTextStroke: "2px #06b6d4" }}>Build</span> With.
                    </h2>
                </div>

                {/* Right Side: Aesthetic Hover Pills */}
                <div ref={containerRef} className="w-full md:w-[60%] flex flex-wrap gap-4 justify-start md:justify-end">
                    {skills.map((skill, idx) => (
                        <div
                            key={idx}
                            className="tech-pill px-6 py-4 bg-black/40 border border-white/10 rounded-sm text-sm lg:text-base font-bold font-space-mono tracking-widest uppercase text-foreground/80 hover:text-white hover:bg-cyan-600 hover:border-cyan-400 transition-all duration-300 transform-gpu cursor-default shadow-[0_0_15px_rgba(6,182,212,0.0)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:-translate-y-1"
                        >
                            {skill}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
