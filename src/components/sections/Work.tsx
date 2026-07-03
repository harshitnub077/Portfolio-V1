"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const projects = [
    { id: "01", title: "KINETIC", category: "Web Design", desc: "A high-performance physics-based web experience.", color: "from-blue-500 to-cyan-400", span: "md:col-span-2" },
    { id: "02", title: "OBSCURA", category: "E-Commerce", desc: "Minimalist fashion store.", color: "from-violet-500 to-purple-400", span: "md:col-span-1" },
    { id: "03", title: "MONOLITH", category: "Architecture", desc: "3D real-estate portfolio.", color: "from-rose-500 to-orange-400", span: "md:col-span-1" },
    { id: "04", title: "NEXUS", category: "Dashboard", desc: "Financial analytics platform.", color: "from-emerald-500 to-teal-400", span: "md:col-span-2" },
];

export default function Work() {
    const container = useRef(null);

    useGSAP(() => {
        const items = gsap.utils.toArray(".work-card");
        
        items.forEach((item: any) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            });
        });
    }, { scope: container });

    return (
        <section ref={container} className="relative w-full py-24 px-4 md:px-8 max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12">Selected Work</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {projects.map((project) => (
                    <div 
                        key={project.id} 
                        className={`work-card bento-card group relative p-8 flex flex-col justify-between overflow-hidden min-h-[350px] ${project.span}`}
                    >
                        {/* Background gradient blob */}
                        <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${project.color} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                        
                        <div className="relative z-10 flex justify-between items-start">
                            <span className="text-sm font-space-mono text-white/50 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                                {project.category}
                            </span>
                            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                <ArrowUpRight className="w-5 h-5" />
                            </div>
                        </div>
                        
                        <div className="relative z-10 mt-auto pt-12">
                            <span className="text-xs font-space-mono text-white/40 mb-2 block">{project.id}</span>
                            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                                {project.title}
                            </h3>
                            <p className="text-white/60">
                                {project.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
