"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const tags = ["Philomath", "Open To Work", "AI / ML", "Builder", "CSE Undergrad", "2nd Year"];

export default function About() {
    const containerRef = useRef<HTMLElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                }
            });

            // Stagger Cards popping up
            tl.fromTo(
                cardRefs.current,
                { y: 60, opacity: 0, scale: 0.95 },
                {
                    y: 0, opacity: 1, scale: 1,
                    duration: 0.8, stagger: 0.15, ease: "power3.out"
                }
            );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative flex flex-col items-center justify-center min-h-screen w-full px-[5%] md:px-[10%] xl:px-0 max-w-7xl mx-auto box-border bg-background border-b-2 border-primary/20 py-24 overflow-hidden"
        >
            {/* Ambient Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

            {/* Section Label */}
            <div className="w-full flex justify-between items-end mb-16 border-b border-primary/30 pb-4 text-primary relative z-10">
                <h2 className="font-space-mono text-sm uppercase tracking-tighter font-bold bg-primary text-primary-foreground px-4 py-1">
                    SYS.ABOUT // 01
                </h2>
                <span className="font-space-mono text-xs uppercase tracking-widest opacity-80 animate-pulse">
                    &lt; ORIGIN: SONIPAT_HR &gt;
                </span>
            </div>

            {/* Bento Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">

                {/* Card 1: Main Bio (Spans 2 columns on lg) */}
                <div 
                    ref={el => { cardRefs.current[0] = el; }}
                    className="col-span-1 md:col-span-2 lg:col-span-2 bg-background/50 backdrop-blur-md border border-primary/20 p-8 md:p-12 hover:border-primary/50 transition-colors duration-500 overflow-hidden relative group rounded-sm shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                >
                     {/* Subtle grid background for the card */}
                     <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(223,255,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(223,255,0,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-50" />
                     
                     <div className="relative z-10 flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                           <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                           <span className="font-space-mono text-xs text-primary uppercase tracking-widest">Identification Profile</span>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-inter font-bold leading-[1.1] tracking-tight text-foreground">
                            I&apos;m <span className="text-primary group-hover:drop-shadow-[0_0_10px_rgba(223,255,0,0.6)] transition-all duration-300">Harshit Kudhial</span>.
                        </h3>
                        <p className="text-xl md:text-2xl font-medium text-foreground/80 leading-relaxed max-w-2xl">
                            A 2nd-year B.Tech undergrad pursuing CSE (AI/ML) at <span className="italic text-foreground">Newton School of Technology</span>. 
                            I&apos;m a passionate <span className="text-primary font-bold">philomath</span> currently building <span className="text-foreground font-bold">Cognify</span> and exploring the frontiers of artificial intelligence.
                        </p>
                    </div>
                </div>

                {/* Card 2: Status Terminal */}
                <div 
                    ref={el => { cardRefs.current[1] = el; }}
                    className="col-span-1 bg-background border border-primary/30 p-8 flex flex-col gap-6 relative overflow-hidden group rounded-sm shadow-[0_0_30px_rgba(223,255,0,0.05)] hover:shadow-[0_0_40px_rgba(223,255,0,0.15)] transition-all duration-500"
                >
                    {/* Terminal Scanline effect */}
                    <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_4px] pointer-events-none z-10" />

                    <div className="font-space-mono text-sm uppercase tracking-widest text-primary mb-2 border-b border-primary/30 pb-3 relative z-20 flex justify-between items-center">
                        <span>&gt;_ ROOT_ACCESS</span>
                        <span className="w-2 h-4 bg-primary animate-ping" />
                    </div>

                    <div className="flex flex-col gap-4 relative z-20">
                        <div className="flex items-center gap-4">
                            <span className="w-3 h-3 rounded-none bg-primary animate-pulse shrink-0" />
                            <span className="font-space-mono text-xs text-foreground/80">BUILDING: <span className="text-foreground tracking-wider group-hover:text-primary transition-colors">COGNIFY_V1</span></span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="w-3 h-3 rounded-none bg-primary animate-pulse shrink-0 drop-shadow-[0_0_8px_rgba(223,255,0,0.8)]" />
                            <span className="font-space-mono text-xs text-foreground/80">STATUS: <span className="text-foreground font-bold tracking-wider group-hover:text-white transition-colors">OPEN_TO_WORK</span></span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="w-3 h-3 rounded-none bg-primary/50 shrink-0" />
                            <span className="font-space-mono text-xs text-foreground/80">FOCUS: <span className="text-primary tracking-wider">AI_ML_SYSTEMS</span></span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="w-3 h-3 rounded-none bg-primary/50 shrink-0" />
                            <span className="font-space-mono text-xs text-foreground/80">LOCALE: <span className="text-primary tracking-wider">NST_SONIPAT</span></span>
                        </div>
                    </div>
                </div>

                {/* Card 3: Badges / Attributes */}
                <div 
                    ref={el => { cardRefs.current[2] = el; }}
                    className="col-span-1 md:col-span-2 bg-accent/20 border border-primary/10 p-8 flex flex-col justify-center rounded-sm hover:bg-accent/40 transition-colors duration-500"
                >
                    <div className="font-space-mono text-xs text-foreground/50 uppercase tracking-widest mb-6">
                        {`// Attributes & Vectors`}
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {tags.map((tag, i) => (
                            <span
                                key={i}
                                className="font-space-mono text-xs xl:text-sm font-bold uppercase tracking-widest px-4 py-3 bg-background border border-primary/20 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default"
                            >
                                [ {tag} ]
                            </span>
                        ))}
                    </div>
                </div>

                {/* Card 4: Philosophy Mini-card */}
                <div 
                    ref={el => { cardRefs.current[3] = el; }}
                    className="col-span-1 bg-primary text-primary-foreground p-8 flex flex-col justify-between group rounded-sm hover:-translate-y-1 transition-transform duration-500"
                >
                    <MoveRight className="w-8 h-8 opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500" />
                    
                    <div className="mt-8">
                        <p className="font-inter font-bold text-lg leading-snug">
                            Architecting systems in the real world to become better — one terminal command at a time.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
