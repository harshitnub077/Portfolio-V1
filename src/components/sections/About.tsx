"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MapPin, GraduationCap } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const STATS = [
    { value: 12500, suffix: "+", label: "Lines of Code", prefix: "" },
    { value: 1000, suffix: "+", label: "GitHub Contributions/yr", prefix: "" },
    { value: 250, suffix: "+", label: "LeetCode Problems", prefix: "" },
    { value: 4, suffix: "", label: "Production AI Systems", prefix: "" },
];

function AnimatedCounter({ value, suffix, prefix }: { value: number; suffix: string; prefix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const obj = { val: 0 };
                    gsap.to(obj, {
                        val: value,
                        duration: 2,
                        ease: "power2.out",
                        onUpdate: () => setCount(Math.round(obj.val)),
                    });
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [value]);

    return (
        <div ref={ref} className="font-space-mono text-4xl md:text-5xl font-bold text-white tabular-nums">
            {prefix}{count.toLocaleString()}{suffix}
        </div>
    );
}

export default function About() {
    const container = useRef(null);

    useGSAP(() => {
        // Section label animation
        gsap.from(".about-label", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 75%",
            },
            x: -30,
            opacity: 0,
            duration: 0.8,
        });

        // Word-by-word color reveal on the main paragraph
        const words = gsap.utils.toArray(".about-word") as HTMLElement[];
        words.forEach((word, i) => {
            gsap.to(word, {
                scrollTrigger: {
                    trigger: container.current,
                    start: `top ${70 - i * 0.5}%`,
                    end: `top ${50 - i * 0.5}%`,
                    scrub: 1,
                },
                color: "rgba(255, 255, 255, 0.95)",
                ease: "none",
            });
        });

        // Stats cards stagger
        gsap.from(".stat-card", {
            scrollTrigger: {
                trigger: ".stats-grid",
                start: "top 80%",
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
        });

        // Info cards
        gsap.from(".info-card", {
            scrollTrigger: {
                trigger: ".info-row",
                start: "top 85%",
            },
            y: 30,
            opacity: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
        });
    }, { scope: container });

    const summaryText =
        "AI/ML Engineer specializing in agentic AI systems, Retrieval-Augmented Generation, LLM orchestration, and vector-based semantic search. Built and shipped four production-grade AI/ML systems spanning embedding generation, retrieval optimization, automated model evaluation, and secure multi-tenant backend architecture.";

    const summaryWords = summaryText.split(" ");

    return (
        <section
            ref={container}
            id="about"
            className="relative w-full py-32 md:py-40 px-6 md:px-8 max-w-7xl mx-auto"
        >
            {/* Section Label */}
            <div className="about-label section-label mb-16">[ 01 — About ]</div>

            {/* Main Content — Two Column */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
                {/* Left — Bio Text with word-by-word color reveal */}
                <div>
                    <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light tracking-tight">
                        {summaryWords.map((word, i) => (
                            <span key={i}>
                                <span
                                    className="about-word inline-block transition-colors"
                                    style={{ color: "rgba(255, 255, 255, 0.15)" }}
                                >
                                    {word}
                                </span>
                                {" "}
                            </span>
                        ))}
                    </p>
                </div>

                {/* Right — Stats Grid */}
                <div className="stats-grid grid grid-cols-2 gap-6">
                    {STATS.map((stat, i) => (
                        <div
                            key={i}
                            className="stat-card bento-card p-6 md:p-8 flex flex-col justify-between"
                        >
                            <AnimatedCounter
                                value={stat.value}
                                suffix={stat.suffix}
                                prefix={stat.prefix}
                            />
                            <p className="text-sm text-white/40 mt-3 font-space-mono">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Education & Location Row */}
            <div className="info-row grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="info-card bento-card p-8 flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-7 h-7 text-violet-400" />
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold">Newton School of Technology, Rishihood University</h4>
                        <p className="text-white/50 text-sm mt-1">B.Tech, Computer Science &amp; Engineering (AI/ML)</p>
                        <p className="text-white/35 text-xs font-space-mono mt-1">2024 — 2028 • Sonipat, Haryana</p>
                    </div>
                </div>

                <div className="info-card bento-card p-8 flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-7 h-7 text-cyan-400" />
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold">Delhi, India</h4>
                        <p className="text-white/50 text-sm mt-1">3rd Year B.Tech Student</p>
                        <p className="text-white/35 text-xs font-space-mono mt-1">Open to Remote &amp; On-site Opportunities</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
