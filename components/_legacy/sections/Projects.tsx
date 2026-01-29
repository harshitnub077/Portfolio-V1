"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const projects = [
    {
        id: "01",
        title: "PORTFOLIO V1",
        category: "WEB / GSAP",
        description: "High-performance personal site with kinetic type.",
        color: "#000"
    },
    {
        id: "02",
        title: "AI DREAMER",
        category: "ML / STABLE DIFFUSION",
        description: "Generating artistic imagery from natural language.",
        color: "#000"
    },
    {
        id: "03",
        title: "TASK MASTER",
        category: "SAAS / PRODUCTIVITY",
        description: "AI-driven scheduling and team collaboration.",
        color: "#000"
    },
    {
        id: "04",
        title: "NEURAL NET",
        category: "WEBGL / DATA",
        description: "Visualizing complex datasets in 3D space.",
        color: "#000000"
    }
];

export default function Projects() {
    const containerRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const track = trackRef.current;
            if (!track) return;

            const totalWidth = track.scrollWidth - window.innerWidth;

            gsap.to(track, {
                x: -totalWidth,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1,
                    end: () => "+=" + track.scrollWidth,
                    invalidateOnRefresh: true,
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(card, {
            rotateX: rotateX,
            rotateY: rotateY,
            scale: 1.05,
            duration: 0.4,
            ease: "power2.out"
        });
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        gsap.to(e.currentTarget, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
        });
    };

    return (
        <section ref={containerRef} className="relative h-screen bg-[#000000] overflow-hidden flex flex-col justify-center perspective-[1000px]">
            {/* Header absolute */}
            <div className="absolute top-12 left-8 md:left-16 z-20 mix-blend-difference">
                <h2 className="text-black font-black font-syne text-4xl md:text-6xl tracking-tighter">
                    SELECTED WORKS
                </h2>
            </div>

            {/* Horizontal Track */}
            <div ref={trackRef} className="flex gap-20 px-8 md:px-16 w-max items-center h-full pt-32 pb-16">

                {/* Intro spacer / title card */}
                <div className="w-[30vw] shrink-0">
                    <p className="font-mono text-[#d4af37] text-xs tracking-[0.2em] uppercase mb-4">
                        Curated Works
                    </p>
                    <p className="font-serif text-3xl md:text-4xl text-white leading-tight max-w-sm italic">
                        Selected experiments in digital alchemy.
                    </p>
                </div>

                {/* Project Cards */}
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="group relative w-[80vw] md:w-[60vw] h-[60vh] md:h-[70vh] bg-black shrink-0 flex flex-col justify-between p-8 md:p-12 border border-white/10 hover:border-white/30 transition-all duration-300 preserve-3d"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{ transformStyle: "preserve-3d" }}
                    >

                        {/* Top Row - Minimalist */}
                        <div className="flex justify-between items-start text-white/50 translate-z-10 group-hover:text-white transition-colors">
                            <span className="font-mono text-sm tracking-widest">0{i + 1}</span>
                            <span className="font-mono text-xs tracking-widest uppercase border-b border-transparent group-hover:border-white transition-all">
                                {project.category}
                            </span>
                        </div>

                        {/* Middle / Image Placeholder */}
                        <div className="absolute inset-0 bg-neutral-900 -z-10 group-hover:bg-[#0a0a0a] transition-colors overflow-hidden">
                            {/* We would put an image here. For now, data pattern */}
                            <div className="w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent group-hover:scale-110 transition-transform duration-700" />
                        </div>

                        {/* Bottom Content */}
                        <div className="translate-z-20">
                            <h3 className="text-4xl md:text-7xl font-light font-serif text-white mb-6 leading-tight italic">
                                {project.title}
                            </h3>
                            <p className="text-white/60 text-base md:text-lg font-mono max-w-sm group-hover:text-white transition-colors">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}

                {/* End spacer */}
                <div className="w-[20vw] shrink-0 flex items-center justify-center">
                    <span className="font-syne text-9xl font-black text-black/20">FIN</span>
                </div>

            </div>
        </section>
    );
}
