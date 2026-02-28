"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tags = ["Philomath", "Open To Work", "AI / ML", "Builder", "CSE Undergrad", "2nd Year"];

export default function About() {
    const containerRef = useRef<HTMLElement>(null);
    const bioRef = useRef<HTMLParagraphElement>(null);
    const tagsRef = useRef<HTMLDivElement>(null);
    const statusRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            // Animate bio text line by line
            gsap.fromTo(
                bioRef.current,
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1.2, ease: "power4.out",
                    scrollTrigger: { trigger: bioRef.current, start: "top 80%" }
                }
            );

            // Stagger in tags
            if (tagsRef.current) {
                gsap.fromTo(
                    tagsRef.current.children,
                    { scale: 0.8, opacity: 0, y: 15 },
                    {
                        scale: 1, opacity: 1, y: 0,
                        duration: 0.5, stagger: 0.07, ease: "back.out(2)",
                        scrollTrigger: { trigger: tagsRef.current, start: "top 85%" }
                    }
                );
            }

            // Fade in the status block
            gsap.fromTo(
                statusRef.current,
                { x: 30, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 1, ease: "power3.out",
                    scrollTrigger: { trigger: statusRef.current, start: "top 80%" }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative flex flex-col items-center justify-center min-h-screen w-screen px-[5%] md:px-[10%] box-border bg-black border-b-2 border-white/20 py-20"
        >
            {/* Decorative vertical lines */}
            <div className="absolute top-0 left-[10%] w-[1px] h-full bg-white/10 hidden md:block" />
            <div className="absolute top-0 right-[10%] w-[1px] h-full bg-white/10 hidden md:block" />

            {/* Section Label */}
            <div className="w-full flex justify-between items-end mb-16 border-b border-white/20 pb-4 text-white">
                <h2 className="font-space-mono text-sm uppercase tracking-tighter font-bold bg-white text-black px-3 py-1">
                    01 // About
                </h2>
                <span className="font-space-mono text-xs uppercase tracking-tighter opacity-70">
                    Origin: Sonipat, Haryana
                </span>
            </div>

            {/* Main 2-column grid */}
            <div className="w-full flex flex-col md:flex-row gap-12 md:gap-20 items-start">

                {/* Left: Bio */}
                <div className="w-full md:w-[60%] flex flex-col gap-8">
                    <p
                        ref={bioRef}
                        className="text-white/90 text-xl md:text-2xl lg:text-3xl font-inter font-medium leading-[1.55] tracking-tight"
                    >
                        I&apos;m{" "}
                        <span className="text-primary font-bold">Harshit Kudhial</span>
                        {" "}— a 2nd year B.Tech undergrad pursuing
                        Computer Science &amp; Engineering with a specialization in AI &amp; ML at{" "}
                        <span className="italic text-white/70">Newton School of Technology, Sonipat</span>.{" "}
                        A passionate{" "}
                        <span className="text-primary font-bold">philomath</span>{" "}
                        who learns with the flow, currently building
                        {" "}<span className="font-bold text-white">Cognify</span> and
                        exploring the frontiers of artificial intelligence.
                        Open to challenging opportunities where I can make real-life impact.
                    </p>

                    {/* Tags */}
                    <div ref={tagsRef} className="flex flex-wrap gap-3">
                        {tags.map((tag, i) => (
                            <span
                                key={i}
                                className="font-space-mono text-xs font-bold uppercase tracking-widest px-4 py-2 border border-white/30 text-white/80 hover:bg-primary hover:text-black hover:border-primary transition-all duration-200 cursor-default"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right: Status card */}
                <div ref={statusRef} className="w-full md:w-[40%] flex flex-col gap-6">
                    {/* Status block */}
                    <div className="border border-white/20 p-6 flex flex-col gap-4">
                        <div className="font-space-mono text-xs uppercase tracking-widest text-primary mb-2 border-b border-white/10 pb-2">
                            &gt;_ Current Status
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
                            <span className="font-space-mono text-sm text-white/80">Building: <span className="text-white font-bold">Cognify</span></span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                            <span className="font-space-mono text-sm text-white/80">Status: <span className="text-green-400 font-bold">Open To Work</span></span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-white/50 shrink-0" />
                            <span className="font-space-mono text-sm text-white/80">Focus: <span className="text-white font-bold">AI & ML</span></span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-white/50 shrink-0" />
                            <span className="font-space-mono text-sm text-white/80">Institution: <span className="text-white font-bold">Newton School of Technology</span></span>
                        </div>
                    </div>

                    {/* Philosophy */}
                    <div className="border-l-2 border-primary pl-4 py-1">
                        <p className="font-inter italic text-sm text-white/60 leading-relaxed">
                            &quot;Building projects in the real world to become better —
                            one system at a time.&quot;
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
