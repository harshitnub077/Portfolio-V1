"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const projects = [
    { id: "01", title: "KINETIC", category: "Web Design" },
    { id: "02", title: "OBSCURA", category: "E-Commerce" },
    { id: "03", title: "MONOLITH", category: "Architecture" },
];

export default function Work() {
    const container = useRef(null);

    useGSAP(() => {
        const items = gsap.utils.toArray(".work-item");
        
        items.forEach((item: any) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
        });
    }, { scope: container });

    return (
        <section ref={container} className="relative w-full py-32 px-8 md:px-24">
            <h2 className="text-2xl font-space-mono mb-24 border-b border-white/20 pb-4">Selected Work</h2>
            
            <div className="flex flex-col">
                {projects.map((project, index) => (
                    <div 
                        key={project.id} 
                        className="work-item group relative flex flex-col md:flex-row items-baseline justify-between py-12 border-b border-white/20 hover:border-white transition-colors cursor-pointer"
                    >
                        <div className="flex items-baseline gap-8">
                            <span className="text-xl md:text-2xl font-space-mono text-white/50">{project.id}</span>
                            <h3 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter group-hover:pl-8 transition-all duration-500">
                                {project.title}
                            </h3>
                        </div>
                        <span className="text-lg md:text-xl font-space-mono text-white/50 mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {project.category}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
