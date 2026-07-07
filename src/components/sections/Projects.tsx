"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Github } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const PROJECTS = [
    {
        id: "01",
        title: "Cognify",
        subtitle: "Agentic Content Intelligence Platform",
        year: "2024",
        tech: ["React", "Node.js", "Qdrant", "Gemini API", "Ollama", "PostgreSQL"],
        description:
            "Architected a distributed agentic RAG microservice (12,500 LOC) with React/Vite, Node.js/Express, and a Python NLP router. Built a Qdrant-based semantic caching layer with 88% cosine similarity and a local Llama 3 fallback to cut LLM API costs.",
        metrics: ["12,500 LOC", "88% Cosine Similarity", "50MB Payload Handling"],
        github: "https://github.com/harshitnub077/Cognify",
        gradient: "from-blue-500 via-cyan-500 to-teal-500",
        accentColor: "#06b6d4",
    },
    {
        id: "02",
        title: "NotForgotten",
        subtitle: "Agentic RAG Study Tutor",
        year: "2024",
        tech: ["LangGraph", "Weaviate", "SQLite", "FastAPI", "SuperMemo SM-2"],
        description:
            "Engineered a memory-aware RAG system fusing query intent with Ebbinghaus forgetting-curve modeling to prioritize retrieval of at-risk content. Implemented a LangGraph agent with SM-2 spaced-repetition algorithm over a hybrid Weaviate and SQLite pipeline.",
        metrics: ["40% Retrieval Improvement", "30-Day Simulation Harness", "Spaced Repetition"],
        github: "https://github.com/harshitnub077/NotForgotten",
        gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
        accentColor: "#8b5cf6",
    },
    {
        id: "03",
        title: "BidForge",
        subtitle: "AI-Powered Proposal Generation",
        year: "2025",
        tech: ["Next.js", "FastAPI", "PostgreSQL", "Supabase", "Gemini API", "pgvector"],
        description:
            "Architected a RAG pipeline using PostgreSQL pgvector with IVFFlat indexing and Google text-embedding-004 for high-dimensional cosine similarity search. Built a multi-tenant SaaS backend with Row Level Security and JWT-based authentication.",
        metrics: ["Multi-Tenant SaaS", "IVFFlat Indexing", "RLS + JWT Auth"],
        github: "https://github.com/harshitnub077/BidForge",
        gradient: "from-rose-500 via-orange-500 to-amber-500",
        accentColor: "#f43f5e",
    },
];

export default function Projects() {
    const container = useRef(null);

    useGSAP(() => {
        // Section label
        gsap.from(".projects-label", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            },
            x: -30,
            opacity: 0,
            duration: 0.8,
        });

        // Project cards - scroll-triggered entrance
        gsap.utils.toArray(".project-card").forEach((card: any) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                },
                y: 80,
                opacity: 0,
                scale: 0.95,
                duration: 1,
                ease: "power3.out",
            });
        });
    }, { scope: container });

    return (
        <section
            ref={container}
            id="projects"
            className="relative w-full py-32 md:py-40 px-6 md:px-8 max-w-7xl mx-auto"
        >
            {/* Section Label */}
            <div className="projects-label section-label mb-16">[ 03 — Selected Projects ]</div>

            {/* Project Cards */}
            <div className="space-y-8">
                {PROJECTS.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

function ProjectCard({ project }: { project: (typeof PROJECTS)[0] }) {
    const cardRef = useRef<HTMLDivElement>(null);

    // 3D Tilt Effect on hover
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;

        gsap.to(card, {
            rotateX,
            rotateY,
            duration: 0.4,
            ease: "power2.out",
            transformPerspective: 1000,
        });
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;
        gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)",
        });
    };

    return (
        <div
            ref={cardRef}
            className="project-card bento-card p-8 md:p-12 group relative overflow-hidden will-change-transform"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transformStyle: "preserve-3d" }}
        >
            {/* Gradient blob */}
            <div
                className={`absolute -right-32 -top-32 w-96 h-96 bg-gradient-to-br ${project.gradient} rounded-full blur-[120px] opacity-0 group-hover:opacity-15 transition-opacity duration-700`}
            />

            {/* Top Row */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="font-space-mono text-xs text-white/30">{project.id}</span>
                        <span className="font-space-mono text-xs text-white/30">{project.year}</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-2">
                        {project.title}
                    </h3>
                    <p
                        className="text-lg md:text-xl font-light"
                        style={{ color: project.accentColor }}
                    >
                        {project.subtitle}
                    </p>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-3 flex-shrink-0">
                    <MagneticButton href={project.github} strength={0.3}>
                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                            <Github className="w-5 h-5 text-white/70" />
                        </div>
                    </MagneticButton>
                    <MagneticButton href={project.github} strength={0.3}>
                        <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                            <ArrowUpRight className="w-5 h-5" />
                        </div>
                    </MagneticButton>
                </div>
            </div>

            {/* Description */}
            <p className="relative z-10 text-white/50 text-base md:text-lg leading-relaxed max-w-4xl mb-8">
                {project.description}
            </p>

            {/* Bottom Row - Tech + Metrics */}
            <div className="relative z-10 flex flex-col md:flex-row justify-between gap-6 pt-6 border-t border-white/5">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="px-3 py-1.5 rounded-lg bg-white/5 text-xs font-space-mono text-white/50 border border-white/5"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Key Metrics */}
                <div className="flex flex-wrap gap-4 md:gap-6">
                    {project.metrics.map((m) => (
                        <span
                            key={m}
                            className="text-sm font-space-mono text-white/40"
                        >
                            {m}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
