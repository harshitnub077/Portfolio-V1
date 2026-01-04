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
            const projects = gsap.utils.toArray(".project-card");

            projects.forEach((card: any, i) => {

                gsap.to(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top top+=100",
                        end: "bottom top",
                        scrub: true,
                        id: `card-${i}`
                    },
                    scale: 0.9 + (0.02 * i),
                    opacity: 1 - (0.1 * (projects.length - i)),
                    ease: "none"
                });
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="w-full relative py-32 px-4 md:px-12 bg-black min-h-screen">
            <div className="w-full flex flex-col items-center justify-center relative z-10 mb-24">
                <span className="text-xs font-mono text-gray-500 tracking-[0.5em] mb-4">ARCHIVE_ACCESS</span>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mix-blend-difference select-none">
                    WORK_LOG
                </h2>
                <div className="w-24 h-[1px] bg-white mt-8"></div>
            </div>

            <div className="flex flex-col gap-0 pb-32">
                {PROJECTS.map((project, index) => (
                    <div
                        key={project.name}
                        className="project-card sticky top-24 w-full max-w-5xl mx-auto flex flex-col md:flex-row bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl origin-top"
                        style={{ top: `${150 + (index * 40)}px`, zIndex: index + 1 }}
                    >
                        {/* Image Section */}
                        <div className="w-full md:w-1/2 aspect-video md:aspect-auto relative overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
                            <div className="absolute inset-0 bg-black/10 z-10 hover:bg-transparent transition-colors duration-500"></div>
                            <Image
                                src={project.image}
                                layout="fill"
                                objectFit="cover"
                                alt={project.name}
                                className="grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between bg-black/50 backdrop-blur-md">
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-xs font-mono text-gray-500 border border-gray-800 px-2 py-1 rounded">
                                        ID_0{index + 1}
                                    </span>
                                    <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                                        {String(project.tech[0]).toUpperCase()} // CORE
                                    </span>
                                </div>

                                <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
                                    {project.name}
                                </h3>

                                <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed mb-8">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={t} className="text-[10px] uppercase font-mono text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-sm font-bold uppercase tracking-widest text-white hover:text-gray-300 transition-colors flex items-center gap-2 group"
                                >
                                    Initiate_Project
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Showcase;
