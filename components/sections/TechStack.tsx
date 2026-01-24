"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss,
    SiNodedotjs, SiExpress, SiPython, SiNumpy, SiPandas,
    SiScikitlearn, SiTensorflow, SiGit, SiGithub
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
    "HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind",
    "Node.js", "Express", "Python", "NumPy", "Pandas",
    "Scikit-Learn", "TensorFlow", "Git", "GitHub", "VS Code"
];

export default function TechStack() {
    const containerRef = useRef<HTMLElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Infinite Marquee Animation
            gsap.to(".marquee-inner", {
                xPercent: -50,
                repeat: -1,
                duration: 20,
                ease: "linear",
            });

            // Fade in on scroll
            gsap.from(containerRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 90%",
                },
                opacity: 0,
                y: 50,
                duration: 1,
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-20 bg-black overflow-hidden border-t border-white/5">
            <div className="mb-12 px-6">
                <h2 className="text-xl font-bold font-heading text-neutral-500 uppercase tracking-widest">
                    Technical Arsenal
                </h2>
            </div>

            <div className="relative w-full">
                {/* Marquee Container */}
                <div ref={marqueeRef} className="flex overflow-hidden whitespace-nowrap">
                    <div className="marquee-inner flex gap-8 md:gap-16 pr-8 md:pr-16">
                        {/* Duplicate content for seamless loop */}
                        {[...techStack, ...techStack, ...techStack].map((tech, idx) => (
                            <span
                                key={idx}
                                className="text-6xl md:text-9xl font-bold font-heading text-neutral-800 hover:text-white transition-colors duration-300 select-none"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-12 px-6 text-right">
                <p className="text-neutral-600 font-mono text-xs md:text-sm">
                    EMPOWERING NEXT-GEN APPLICATIONS
                </p>
            </div>
        </section>
    );
}
