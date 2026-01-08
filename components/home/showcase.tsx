import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { PROJECTS } from "../../constants";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".project-card", {
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
        <section id="works" ref={containerRef} className="w-full relative py-24 px-6 md:px-12 bg-black min-h-screen overflow-hidden">
            {/* Simple Background Design */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full blur-[200px]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header - Compact */}
                <div className="w-full flex flex-col items-center justify-center mb-16">
                    <div className="mb-4">
                        <span className="text-xs font-mono text-gray-400 uppercase tracking-[0.3em]">
                            Portfolio
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight mb-4">
                        <span className="text-white">Projects</span>
                    </h2>
                    <div className="w-24 h-[1px] bg-gray-600"></div>
                </div>

                {/* New Compact Grid Layout with Small Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {PROJECTS.map((project, index) => (
                        <div
                            key={project.name}
                            className="project-card group relative"
                        >
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noreferrer"
                                className="block h-full"
                            >
                                <div className="relative h-full bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm hover:border-white/30 transition-all duration-500 hover:shadow-xl hover:shadow-white/10">
                                    {/* Small Project Image */}
                                    {project.image && (
                                        <div className="relative w-full h-48 md:h-56 overflow-hidden">
                                            <Image
                                                src={project.image}
                                                alt={project.name}
                                                layout="fill"
                                                objectFit="cover"
                                                className="grayscale-[0.4] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                                                placeholder={project.blurImage ? "blur" : "empty"}
                                                blurDataURL={project.blurImage}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                            
                                            {/* Project Number Badge */}
                                            <div className="absolute top-3 left-3">
                                                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                                                    <span className="text-xs font-bold text-white">{index + 1}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Project Content */}
                                    <div className="p-5">
                                        {/* Project Name */}
                                        <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-2 group-hover:text-gray-200 transition-colors duration-300">
                                            {project.name}
                                        </h3>

                                        {/* Description - Truncated */}
                                        <p className="text-sm text-gray-400 font-light leading-relaxed mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack - Compact */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.slice(0, 3).map((t) => (
                                                <span 
                                                    key={t} 
                                                    className="text-[10px] uppercase font-mono text-white/60 border border-white/10 px-2 py-1 rounded"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                            {project.tech.length > 3 && (
                                                <span className="text-[10px] uppercase font-mono text-white/40 px-2 py-1">
                                                    +{project.tech.length - 3}
                                                </span>
                                            )}
                                        </div>

                                        {/* View Link */}
                                        <div className="flex items-center gap-2 text-xs font-medium text-gray-400 group-hover:text-white transition-colors">
                                            <span>View Project</span>
                                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </div>
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-500 pointer-events-none"></div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Showcase;
