"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const SKILL_CATEGORIES = [
    {
        title: "Languages",
        color: "#8b5cf6",
        skills: ["Python", "JavaScript", "TypeScript", "SQL"],
    },
    {
        title: "AI/ML & Agentic",
        color: "#06b6d4",
        skills: ["LangGraph", "LangChain", "RAG", "LLMs", "Hugging Face", "RAGAS", "Ollama", "NumPy", "Pandas", "Scikit-learn"],
    },
    {
        title: "Vector DBs & Retrieval",
        color: "#f43f5e",
        skills: ["Weaviate", "Qdrant", "ChromaDB", "pgvector", "Semantic Search", "Cosine Similarity", "Gemini Embeddings"],
    },
    {
        title: "Web & Backend",
        color: "#22c55e",
        skills: ["React", "Next.js", "Node.js", "Express.js", "FastAPI", "Prisma ORM", "PostgreSQL", "SQLite", "REST APIs"],
    },
    {
        title: "Security & Auth",
        color: "#f59e0b",
        skills: ["JWT Auth", "Row Level Security", "Multi-Tenant Architecture", "PL/pgSQL"],
    },
    {
        title: "DevOps & Tools",
        color: "#a855f7",
        skills: ["Docker", "Git", "GitHub Actions", "CI/CD Pipelines"],
    },
];

export default function Skills() {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const section = sectionRef.current;
        const container = containerRef.current;
        if (!section || !container) return;

        // Section label
        gsap.from(".skills-label", {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
            },
            x: -30,
            opacity: 0,
            duration: 0.8,
        });

        // Horizontal scroll
        const totalScroll = container.scrollWidth - window.innerWidth;

        gsap.to(container, {
            x: () => -totalScroll,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                pin: true,
                scrub: 1,
                end: () => `+=${totalScroll}`,
                invalidateOnRefresh: true,
            },
        });

        // Individual card parallax (slight y movement within each card)
        gsap.utils.toArray(".skill-card").forEach((card: any, i) => {
            gsap.from(card.querySelector(".skill-card-inner"), {
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => `+=${totalScroll}`,
                    scrub: 1,
                },
                y: i % 2 === 0 ? 20 : -20,
                rotation: i % 2 === 0 ? -1 : 1,
            });
        });
    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            id="skills"
            className="relative w-full h-screen overflow-hidden"
        >
            {/* Section Label - Fixed within the pinned section */}
            <div className="skills-label section-label absolute top-10 left-6 md:left-8 z-10">
                [ 02 — Technical Skills ]
            </div>

            {/* Horizontal Scroll Container */}
            <div
                ref={containerRef}
                className="flex items-center gap-8 h-full px-6 md:px-8 will-change-transform"
                style={{ width: "fit-content" }}
            >
                {/* Leading spacer */}
                <div className="flex-shrink-0 w-[15vw] md:w-[20vw]" />

                {/* Category Cards */}
                {SKILL_CATEGORIES.map((category, idx) => (
                    <div
                        key={idx}
                        className="skill-card flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw]"
                    >
                        <div
                            className="skill-card-inner bento-card p-8 md:p-10 h-[70vh] md:h-[65vh] flex flex-col justify-between relative overflow-hidden group"
                        >
                            {/* Gradient blob */}
                            <div
                                className="absolute -right-20 -top-20 w-72 h-72 rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-700"
                                style={{ backgroundColor: category.color }}
                            />

                            {/* Category Number & Title */}
                            <div className="relative z-10">
                                <span className="font-space-mono text-xs text-white/30 block mb-4">
                                    {String(idx + 1).padStart(2, "0")}
                                </span>
                                <h3
                                    className="text-3xl md:text-4xl font-bold tracking-tight mb-2"
                                    style={{ color: category.color }}
                                >
                                    {category.title}
                                </h3>
                            </div>

                            {/* Skills List */}
                            <div className="relative z-10 flex flex-wrap gap-3 mt-auto">
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/8 text-sm text-white/70 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all duration-300 font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

                {/* Trailing spacer */}
                <div className="flex-shrink-0 w-[15vw] md:w-[20vw]" />
            </div>
        </section>
    );
}
