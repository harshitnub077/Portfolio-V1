import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SKILLS } from "../../constants";

gsap.registerPlugin(ScrollTrigger);

const TechMatrix = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".tech-cell", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.05,
                ease: "power3.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const ALL_SKILLS = [
        ...SKILLS.frontend.map(s => ({ name: s, cat: 'FE', num: '01' })),
        ...SKILLS.userInterface.map(s => ({ name: s, cat: 'UI', num: '02' })),
        ...SKILLS.other.map(s => ({ name: s, cat: 'SYS', num: '03' }))
    ];

    return (
        <section ref={sectionRef} className="w-full min-h-screen bg-black flex flex-col justify-center items-center py-32 px-6 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent pointer-events-none"></div>

            <div className="text-center mb-16 z-10">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-[0.5em] block mb-4">CAPABILITY_MATRIX</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">THE TOOLKIT</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 z-10 max-w-7xl mx-auto">
                {ALL_SKILLS.map((skill, i) => (
                    <div
                        key={skill.name}
                        className="tech-cell group relative aspect-square w-full sm:w-32 bg-white/5 border border-white/10 hover:border-white/50 transition-colors p-4 flex flex-col justify-between hover:bg-white/10"
                    >
                        <div className="flex justify-between items-start">
                            <span className="text-[10px] font-mono text-white">{skill.num}</span>
                            <span className="text-[10px] font-mono text-white opacity-50">{skill.cat}</span>
                        </div>

                        <div className="self-center">
                            <span className="text-2xl font-bold text-white group-hover:scale-110 transition-transform block">
                                {skill.name.charAt(0).toUpperCase() + skill.name.charAt(1)}
                            </span>
                        </div>

                        <div className="overflow-hidden">
                            <span className="block text-xs font-mono text-white uppercase tracking-tight truncate group-hover:text-white transition-colors">
                                {skill.name}
                            </span>
                        </div>

                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechMatrix;
