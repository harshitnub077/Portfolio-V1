"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Code2, Figma, Framer, Layers } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const skills = [
    { name: "Frontend", icon: Code2, desc: "React, Next.js, Vue, Tailwind" },
    { name: "Design", icon: Figma, desc: "UI/UX, Prototyping, Wireframing" },
    { name: "Motion", icon: Framer, desc: "GSAP, Framer Motion, Lenis" },
    { name: "3D Web", icon: Layers, desc: "Three.js, React Three Fiber" }
];

export default function About() {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 75%",
            }
        });

        tl.from(".about-header", {
            y: 30,
            opacity: 0,
            duration: 0.8,
        })
        .from(".about-bento", {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
        }, "-=0.4");
        
    }, { scope: container });

    return (
        <section ref={container} className="relative w-full py-24 px-4 md:px-8 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
            
            <h2 className="about-header text-4xl md:text-5xl font-bold tracking-tighter mb-12">About & Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                
                {/* Main Bio Card */}
                <div className="about-bento bento-card col-span-1 md:col-span-2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-6 text-gradient">Philosophy</h3>
                    <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                        I believe in removing the unnecessary. Design should be intuitive, performant, and structurally sound. By embracing constraints, we discover true elegance.
                    </p>
                    <p className="text-lg text-white/70 leading-relaxed font-light">
                        My goal is to bridge the gap between aesthetic design and hardcore engineering, creating digital experiences that feel alive.
                    </p>
                </div>

                {/* Experience Card */}
                <div className="about-bento bento-card col-span-1 md:col-span-2 p-8 md:p-10 flex flex-col">
                    <h3 className="text-2xl font-bold mb-8">Experience</h3>
                    <div className="space-y-6">
                        <div className="flex justify-between items-start border-b border-white/10 pb-6">
                            <div>
                                <h4 className="font-semibold text-lg">Senior Creative Developer</h4>
                                <p className="text-white/50 text-sm mt-1">Studio Kinetic</p>
                            </div>
                            <span className="text-sm font-space-mono text-white/40">2023 - Present</span>
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="font-semibold text-lg">Frontend Engineer</h4>
                                <p className="text-white/50 text-sm mt-1">TechFlow Inc.</p>
                            </div>
                            <span className="text-sm font-space-mono text-white/40">2020 - 2023</span>
                        </div>
                    </div>
                </div>

                {/* Skills Cards */}
                {skills.map((skill, index) => (
                    <div key={index} className="about-bento bento-card col-span-1 p-6 flex flex-col items-center text-center justify-center">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-4 text-violet-400">
                            <skill.icon className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-lg mb-2">{skill.name}</h4>
                        <p className="text-sm text-white/50">{skill.desc}</p>
                    </div>
                ))}
            </div>

        </section>
    );
}
