"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss,
    SiNodedotjs, SiExpress, SiPython, SiNumpy, SiPandas,
    SiScikitlearn, SiTensorflow, SiGit, SiGithub
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

gsap.registerPlugin(ScrollTrigger);

const techCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML", icon: SiHtml5, color: "#E34F26" },
            { name: "CSS", icon: SiCss3, color: "#1572B6" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
            { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
        ]
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "Express", icon: SiExpress, color: "#FFFFFF" },
        ]
    },
    {
        title: "AI / ML",
        skills: [
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "NumPy", icon: SiNumpy, color: "#013243" },
            { name: "Pandas", icon: SiPandas, color: "#150458" },
            { name: "Scikit-Learn", icon: SiScikitlearn, color: "#F7931E" },
            { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
        ]
    },
    {
        title: "Tools",
        skills: [
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "GitHub", icon: SiGithub, color: "#181717" },
            { name: "VS Code", icon: VscVscode, color: "#007ACC" },
        ]
    }
];

export default function TechStack() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".tech-category", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                },
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: "power3.out"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-900/30 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center font-heading">
                    Technical <span className="text-blue-500">Arsenal</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {techCategories.map((category, idx) => (
                        <div key={idx} className="tech-category bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors">
                            <h3 className="text-xl font-semibold mb-6 text-neutral-300 border-b border-white/10 pb-2">{category.title}</h3>
                            <div className="grid grid-cols-3 gap-4">
                                {category.skills.map((skill, sIdx) => (
                                    <div key={sIdx} className="group flex flex-col items-center gap-2 relative">
                                        <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors relative overflow-hidden">
                                            <skill.icon className="w-8 h-8 text-neutral-400 group-hover:text-white transition-colors" style={{ color: undefined }} />
                                            <div
                                                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                                                style={{ backgroundColor: skill.color }}
                                            />
                                        </div>
                                        <span className="text-xs text-neutral-500 group-hover:text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-5 whitespace-nowrap">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
