"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Trophy, Code2, GitBranch, Users, Award, Flame } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const ACHIEVEMENTS = [
    {
        icon: Trophy,
        title: "IIT Roorkee Cognizance",
        description: "Finalist, Top 8 overall in a national-level hackathon competition",
        tag: "Hackathon",
        color: "#f59e0b",
        span: "md:col-span-2",
    },
    {
        icon: Flame,
        title: "Synap Syntax Hackathon",
        description: "Delivered a complete UI/UX frontend within a 2-hour live timed sprint",
        tag: "Hackathon",
        color: "#f43f5e",
        span: "md:col-span-1",
    },
    {
        icon: GitBranch,
        title: "GSSoC 2024 & 2026",
        description: "Contributor: features, bug fixes, and docs across web and ML repositories",
        tag: "Open Source",
        color: "#22c55e",
        span: "md:col-span-1",
    },
    {
        icon: Code2,
        title: "Hacktoberfest 2024",
        description: "Completed with meaningful PRs to the React/Node.js open-source ecosystem",
        tag: "Open Source",
        color: "#8b5cf6",
        span: "md:col-span-1",
    },
    {
        icon: Users,
        title: "LetsUpgrade Ambassador",
        description: "Student Brand Ambassador — Onboarded 100+ users via targeted digital outreach",
        tag: "Community",
        color: "#06b6d4",
        span: "md:col-span-1",
    },
    {
        icon: Award,
        title: "AI Fluency — Anthropic",
        description: "AI Fluency Framework & Foundations certification (Jun 2026)",
        tag: "Certification",
        color: "#a855f7",
        span: "md:col-span-1",
    },
    {
        icon: Award,
        title: "BCG Strategy Consulting",
        description: "Introduction to Strategy Consulting — Boston Consulting Group (Oct 2024)",
        tag: "Certification",
        color: "#3b82f6",
        span: "md:col-span-1",
    },
];

const COMPETITIVE = [
    { label: "LeetCode", value: "250+", color: "#f59e0b" },
    { label: "GeeksForGeeks", value: "75+", color: "#22c55e" },
    { label: "GitHub Contributions", value: "1,000+/yr", color: "#8b5cf6" },
];

export default function Achievements() {
    const container = useRef(null);

    useGSAP(() => {
        // Section label
        gsap.from(".achievements-label", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            },
            x: -30,
            opacity: 0,
            duration: 0.8,
        });

        // Achievement cards stagger
        gsap.from(".achievement-card", {
            scrollTrigger: {
                trigger: ".achievements-grid",
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            scale: 0.95,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
        });

        // Competitive stats
        gsap.from(".competitive-stat", {
            scrollTrigger: {
                trigger: ".competitive-row",
                start: "top 85%",
            },
            y: 30,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "back.out(1.7)",
        });
    }, { scope: container });

    return (
        <section
            ref={container}
            id="achievements"
            className="relative w-full py-32 md:py-40 px-6 md:px-8 max-w-7xl mx-auto"
        >
            {/* Section Label */}
            <div className="achievements-label section-label mb-16">
                [ 04 — Achievements & Certifications ]
            </div>

            {/* Competitive Programming Stats */}
            <div className="competitive-row grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                {COMPETITIVE.map((stat, i) => (
                    <div
                        key={i}
                        className="competitive-stat bento-card p-8 flex items-center justify-between group"
                    >
                        <div>
                            <div
                                className="text-3xl md:text-4xl font-bold font-space-mono"
                                style={{ color: stat.color }}
                            >
                                {stat.value}
                            </div>
                            <p className="text-sm text-white/40 mt-1">{stat.label}</p>
                        </div>
                        <div
                            className="w-3 h-3 rounded-full opacity-30 group-hover:opacity-80 transition-opacity"
                            style={{ backgroundColor: stat.color }}
                        />
                    </div>
                ))}
            </div>

            {/* Achievement Bento Grid */}
            <div className="achievements-grid grid grid-cols-1 md:grid-cols-2 gap-4">
                {ACHIEVEMENTS.map((achievement, i) => (
                    <div
                        key={i}
                        className={`achievement-card bento-card p-8 group relative overflow-hidden ${achievement.span}`}
                    >
                        {/* Hover glow */}
                        <div
                            className="absolute -right-16 -bottom-16 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-15 transition-opacity duration-700"
                            style={{ backgroundColor: achievement.color }}
                        />

                        <div className="relative z-10 flex items-start gap-5">
                            {/* Icon */}
                            <div
                                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                                style={{ backgroundColor: `${achievement.color}15` }}
                            >
                                <achievement.icon
                                    className="w-6 h-6"
                                    style={{ color: achievement.color }}
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <h4 className="text-lg font-semibold">{achievement.title}</h4>
                                    <span
                                        className="text-[10px] font-space-mono uppercase tracking-widest px-2 py-0.5 rounded-full border"
                                        style={{
                                            color: achievement.color,
                                            borderColor: `${achievement.color}30`,
                                            backgroundColor: `${achievement.color}10`,
                                        }}
                                    >
                                        {achievement.tag}
                                    </span>
                                </div>
                                <p className="text-sm text-white/50 leading-relaxed">
                                    {achievement.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
