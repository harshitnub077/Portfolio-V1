"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: "01",
        title: "Portfolio V1",
        category: "Web Development",
        description: "A high-performance personal portfolio built with Next.js and GSAP, featuring kinetic typography and immersive interactions.",
        imageColor: "from-blue-900/40 to-black",
    },
    {
        id: "02",
        title: "AI Image Gen",
        category: "Machine Learning",
        description: "Deep learning application leveraging Stable Diffusion APIs to generate artistic imagery from natural language prompts.",
        imageColor: "from-violet-900/40 to-black",
    },
    {
        id: "03",
        title: "Task Master",
        category: "Productivity",
        description: "Smart task management system with AI-driven scheduling suggestions and real-time collaboration features.",
        imageColor: "from-emerald-900/40 to-black",
    },
];

export default function Projects() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const projects = gsap.utils.toArray(".project-card");

            projects.forEach((project: any) => {
                gsap.from(project.querySelector(".project-img"), {
                    scrollTrigger: {
                        trigger: project,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                    y: -100,
                    scale: 1.2,
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 px-4 md:px-8 bg-black">
            <div className="mb-24 border-b border-white/10 pb-8 flex justify-between items-end">
                <h2 className="text-5xl md:text-8xl font-black font-heading text-white tracking-tighter">
                    SELECTED<br />WORKS
                </h2>
                <div className="hidden md:block text-right">
                    <span className="text-neutral-500 font-mono text-sm">[ 2024 - 2025 ]</span>
                </div>
            </div>

            <div className="space-y-40">
                {projects.map((project, idx) => (
                    <div key={idx} className="project-card group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        {/* Project Info */}
                        <div className="md:col-span-5 space-y-6 z-10 mix-blend-difference">
                            <span className="text-blue-500 font-mono text-xl">/{project.id}</span>
                            <h3 className="text-4xl md:text-6xl font-bold text-white font-heading group-hover:text-neutral-400 transition-colors">
                                {project.title}
                            </h3>
                            <div className="flex gap-4 text-sm font-mono text-muted-foreground uppercase tracking-widest border-t border-border pt-4 w-max">
                                <Badge variant="outline" className="rounded-md font-normal">{project.category}</Badge>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                                {project.description}
                            </p>
                            <Button variant="link" className="p-0 h-auto font-bold text-white hover:text-white/80 mt-4 group">
                                VIEW CASE STUDY <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Button>
                        </div>

                        {/* Project Image Area */}
                        <div className="md:col-span-7 h-[60vh] md:h-[80vh] w-full overflow-hidden bg-neutral-900 relative">
                            <div className={`project-img absolute inset-0 bg-gradient-to-br ${project.imageColor} mix-blend-screen opacity-80`} />
                            {/* Placeholder pattern */}
                            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-32 text-center">
                <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base font-bold transition-all duration-300 hover:bg-white hover:text-black">
                    VIEW ALL ARCHIVES
                </Button>
            </div>
        </section>
    );
}
