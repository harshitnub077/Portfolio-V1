"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tags = ["Philomath", "Open To Work", "AI / ML", "Builder", "CSE Undergrad", "2nd Year"];

export default function About() {
    const containerRef = useRef<HTMLElement>(null);
    const bioLine1Ref = useRef<HTMLParagraphElement>(null);
    const bioLine2Ref = useRef<HTMLParagraphElement>(null);
    const bioLine3Ref = useRef<HTMLParagraphElement>(null);
    const tagsRef = useRef<HTMLDivElement>(null);
    const statusRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            // Animate bio text with a kinetic stagger
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%"
                }
            });

            tl.fromTo(
                [bioLine1Ref.current, bioLine2Ref.current, bioLine3Ref.current],
                { y: 60, opacity: 0, rotationX: -45, transformOrigin: "top center" },
                {
                    y: 0, opacity: 1, rotationX: 0,
                    duration: 1, stagger: 0.2, ease: "power4.out"
                }
            );

            // Stagger in technical badges
            if (tagsRef.current) {
                tl.fromTo(
                    tagsRef.current.children,
                    { scale: 0.8, opacity: 0, x: -20 },
                    {
                        scale: 1, opacity: 1, x: 0,
                        duration: 0.6, stagger: 0.1, ease: "back.out(2)",
                    },
                    "-=0.5"
                );
            }

            // Slide in the terminal status block
            tl.fromTo(
                statusRef.current,
                { x: 50, opacity: 0, scale: 0.95 },
                {
                    x: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out",
                },
                "-=0.8"
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative flex flex-col items-center justify-center min-h-screen w-screen px-[5%] md:px-[10%] box-border bg-background border-b-2 border-primary/20 py-20 overflow-hidden"
        >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

            {/* Decorative vertical grid lines */}
            <div className="absolute top-0 left-[10%] w-[1px] h-full bg-primary/20 hidden md:block" />
            <div className="absolute top-0 right-[10%] w-[1px] h-full bg-primary/20 hidden md:block" />

            {/* Section Label */}
            <div className="w-full flex justify-between items-end mb-16 border-b border-primary/30 pb-4 text-primary relative z-10">
                <h2 className="font-space-mono text-sm uppercase tracking-tighter font-bold bg-primary text-primary-foreground px-4 py-1">
                    SYS.ABOUT // 01
                </h2>
                <span className="font-space-mono text-xs uppercase tracking-widest opacity-80 animate-pulse">
                    &lt; ORIGIN: SONIPAT_HR &gt;
                </span>
            </div>

            {/* Main 2-column grid */}
            <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative z-10">

                {/* Left: Bio */}
                <div className="w-full lg:w-[60%] flex flex-col gap-10">
                    <div className="flex flex-col gap-4 text-2xl md:text-4xl lg:text-5xl font-inter font-bold leading-[1.2] tracking-tight text-foreground">
                        <p ref={bioLine1Ref} className="perspective-1000">
                            I&apos;m{" "}
                            <span className="text-primary">Harshit Kudhial</span>
                            {" "}— a 2nd year B.Tech undergrad
                        </p>
                        <p ref={bioLine2Ref} className="perspective-1000">
                            pursuing CSE (AI/ML) at{" "}
                            <span className="italic text-primary/80">Newton School of Technology</span>.{" "}
                        </p>
                        <p ref={bioLine3Ref} className="text-xl md:text-2xl font-medium text-foreground/80 leading-relaxed mt-4 perspective-1000">
                            A passionate{" "}
                            <span className="text-primary font-bold">philomath</span>{" "}
                            currently building
                            {" "}<span className="font-bold text-foreground">Cognify</span> and
                            exploring the frontiers of artificial intelligence.
                            Open to challenging opportunities to make a real-life impact.
                        </p>
                    </div>

                    {/* Technical Badges */}
                    <div ref={tagsRef} className="flex flex-wrap gap-4 mt-4">
                        {tags.map((tag, i) => (
                            <span
                                key={i}
                                className="font-space-mono text-xs font-bold uppercase tracking-widest px-4 py-2 bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_rgba(223,255,0,0.6)] hover:scale-105 transition-all duration-300 cursor-default"
                            >
                                [ {tag} ]
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right: Status Terminal */}
                <div ref={statusRef} className="w-full lg:w-[40%] flex flex-col gap-6 perspective-1000">
                    {/* Glowing Terminal Block */}
                    <div className="bg-background/80 backdrop-blur-md border border-primary/40 p-8 flex flex-col gap-6 shadow-[0_0_30px_rgba(223,255,0,0.1)] relative overflow-hidden group">
                        {/* Terminal Scanline effect */}
                        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50" />

                        <div className="font-space-mono text-sm uppercase tracking-widest text-primary mb-2 border-b border-primary/30 pb-3 relative z-10 flex justify-between items-center">
                            <span>&gt;_ ROOT_ACCESS_STATUS</span>
                            <span className="w-2 h-4 bg-primary animate-ping" />
                        </div>

                        <div className="flex items-center gap-4 relative z-10">
                            <span className="w-3 h-3 rounded-none bg-primary animate-pulse shrink-0" />
                            <span className="font-space-mono text-sm text-foreground/80">BUILDING: <span className="text-foreground font-bold tracking-wider hover:text-white transition-colors">COGNIFY_V1</span></span>
                        </div>
                        <div className="flex items-center gap-4 relative z-10">
                            <span className="w-3 h-3 rounded-none bg-primary animate-pulse shrink-0 drop-shadow-[0_0_8px_rgba(223,255,0,0.8)]" />
                            <span className="font-space-mono text-sm text-foreground/80">STATUS: <span className="text-foreground font-bold tracking-wider">OPEN_TO_WORK</span></span>
                        </div>
                        <div className="flex items-center gap-4 relative z-10">
                            <span className="w-3 h-3 rounded-none bg-primary/50 shrink-0" />
                            <span className="font-space-mono text-sm text-foreground/80">FOCUS: <span className="text-primary font-bold tracking-wider">AI_ML_SYSTEMS</span></span>
                        </div>
                        <div className="flex items-center gap-4 relative z-10">
                            <span className="w-3 h-3 rounded-none bg-primary/50 shrink-0" />
                            <span className="font-space-mono text-sm text-foreground/80">LOCALE: <span className="text-primary font-bold tracking-wider">NST_SONIPAT</span></span>
                        </div>
                    </div>

                    {/* Philosophy Quote */}
                    <div className="border-l-4 border-primary pl-6 py-2 ml-2">
                        <p className="font-inter italic text-base text-foreground/70 leading-relaxed font-medium">
                            &quot;Architecting systems in the real world to become better —
                            one terminal command at a time.&quot;
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
