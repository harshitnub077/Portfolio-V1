import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EXPERIENCE_DATA = [
    {
        role: "B.Tech in CS & AI",
        company: "Newton School of Technology",
        year: "2023 - 2027",
        desc: "Specializing in Artificial Intelligence and User Experience. Building the foundation for next-gen software.",
        type: "EDUCATION"
    },
    {
        role: "Full Stack Developer",
        company: "Freelance",
        year: "2024 - Present",
        desc: "Delivering high-performance web applications with modern tech stacks (Next.js, Tailwind, GSAP).",
        type: "WORK"
    }
];

const Experience = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".exp-item", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="w-full py-32 px-6 bg-black relative">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <div className="mb-4">
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em]">
                            Timeline
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tighter leading-[0.9] mb-6">
                        Work Log
                    </h2>
                    <div className="w-24 h-[1px] bg-white mx-auto"></div>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-12 top-0 bottom-0 w-[1px] bg-white/10"></div>

                    <div className="space-y-16">
                        {EXPERIENCE_DATA.map((exp, i) => (
                            <div key={i} className="exp-item relative pl-20 md:pl-24">
                                {/* Timeline Dot */}
                                <div className="absolute left-[30px] md:left-[46px] top-2 w-3 h-3 bg-white rounded-full border-4 border-black"></div>

                                {/* Content */}
                                <div className="space-y-3">
                                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white tracking-tight mb-1">
                                                {exp.role}
                                            </h3>
                                            <p className="text-sm md:text-base text-gray-400 font-light">
                                                {exp.company}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                                                {exp.type}
                                            </span>
                                            <span className="text-sm font-mono text-gray-500">
                                                {exp.year}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-base text-gray-400 font-light leading-relaxed max-w-2xl">
                                        {exp.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
