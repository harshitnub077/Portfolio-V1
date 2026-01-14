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
            gsap.from(".exp-card", {
                x: 50,
                opacity: 0,
                duration: 1.2,
                stagger: 0.3,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                }
            });

            gsap.from(".timeline-line", {
                scaleY: 0,
                transformOrigin: "top",
                duration: 2,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                    end: "bottom 80%",
                    scrub: true,
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="w-full bg-transparent py-48 md:py-80 relative overflow-hidden px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-24">
                {/* Section Header */}
                <div className="flex flex-col items-start">
                    <span className="text-[10px] font-mono text-accent-flow uppercase tracking-[0.8em] mb-4">The Evolution / Experience</span>
                    <h2 className="text-5xl md:text-8xl font-heading uppercase text-white tracking-tighter">
                        Journey <span className="opacity-30 italic">So Far</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Vertical Timeline Line */}
                    <div className="timeline-line absolute left-4 md:left-8 top-0 w-px h-[90%] bg-gradient-to-b from-accent-flow via-accent-flow/20 to-transparent" />

                    <div className="flex flex-col gap-16 md:gap-32 ml-12 md:ml-24">
                        {EXPERIENCE_DATA.map((exp, i) => (
                            <div key={i} className="exp-card relative group">
                                {/* Timeline Dot - Enhanced */}
                                <div className="absolute -left-[32px] md:-left-[64px] top-4 w-4 h-4 rounded-full border-2 border-accent-flow bg-dark-100 group-hover:bg-accent-flow transition-all duration-500 glow-flow group-hover:scale-125" />

                                <div className="glass p-8 md:p-12 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-xl group-hover:bg-white/[0.05] transition-all duration-500 flex flex-col md:flex-row gap-12 justify-between items-start">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="font-mono text-[10px] text-accent-flow uppercase px-3 py-1 border border-accent-flow/20 rounded-full">
                                                {exp.type}
                                            </span>
                                            <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                                                {exp.year}
                                            </span>
                                        </div>

                                        <h3 className="text-3xl md:text-5xl font-heading text-white uppercase mb-4 tracking-tighter">
                                            {exp.role}
                                        </h3>
                                        <p className="text-gray-400 text-lg font-light leading-relaxed max-w-2xl">
                                            {exp.desc}
                                        </p>
                                    </div>

                                    <div className="flex flex-col items-end">
                                        <span className="text-xl md:text-3xl font-heading text-white text-right mb-2">
                                            {exp.company}
                                        </span>
                                        <div className="w-12 h-[2px] bg-accent-flow/20 group-hover:w-24 group-hover:bg-accent-flow transition-all duration-700" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Enhanced Background Decor */}
            <div className="absolute top-1/2 -right-48 w-96 h-96 bg-accent-flow/10 rounded-full blur-[150px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent-flow/5 rounded-full blur-[100px] pointer-events-none" />
        </section>
    );
};

export default Experience;
