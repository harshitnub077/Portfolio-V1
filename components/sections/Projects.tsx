"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "Portfolio V1",
        description: "My personal digital playground featuring high-performance animations and modern UI.",
        tech: ["Next.js", "GSAP", "Tailwind"],
        github: "#",
        live: "#"
    },
    {
        title: "AI Image Generator",
        description: "A deep learning powered image generation tool using Stable Diffusion APIs.",
        tech: ["React", "Python", "FastAPI"],
        github: "#",
        live: "#"
    },
    {
        title: "Task Master",
        description: "Productivity application with smart scheduling and AI suggestions.",
        tech: ["JavaScript", "Firebase", "Node.js"],
        github: "#",
        live: "#"
    },
    {
        title: "E-Commerce Dash",
        description: "Full-stack analytics dashboard for online retailers with real-time data.",
        tech: ["Next.js", "Supabase", "Recharts"],
        github: "#",
        live: "#"
    },
];

export default function Projects() {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const container = containerRef.current;
            if (!container) return;

            const totalScroll = container.scrollWidth - window.innerWidth;

            gsap.to(container, {
                x: () => -totalScroll,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: () => `+=${totalScroll}`,
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative h-screen overflow-hidden bg-[#0a0a0a]">
            <div className="absolute top-12 left-8 md:left-16 z-10 w-full">
                <h2 className="text-4xl md:text-6xl font-bold font-heading mb-2">Featured Work</h2>
                <p className="text-neutral-500">Scroll to explore</p>
            </div>

            <div
                ref={containerRef}
                className="flex h-full items-center pl-8 md:pl-16 gap-8 md:gap-16 w-max pt-20"
            >
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="group relative w-[80vw] md:w-[600px] h-[50vh] md:h-[60vh] bg-white/5 rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-colors flex-shrink-0"
                    >
                        {/* Project Image Placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-violet-900/20 group-hover:scale-105 transition-transform duration-700" />

                        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                            <h3 className="text-3xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                {project.title}
                            </h3>
                            <p className="text-neutral-400 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="px-3 py-1 text-xs bg-white/10 rounded-full text-neutral-300">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                                <button className="flex items-center gap-2 px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-colors">
                                    Live Demo <ArrowUpRight className="w-4 h-4" />
                                </button>
                                <button className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                                    <Github className="w-5 h-5 text-white" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                {/* End Spacer */}
                <div className="w-[10vw]" />
            </div>
        </section>
    );
}
