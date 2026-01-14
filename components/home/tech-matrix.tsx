import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SKILLS } from "../../constants";

gsap.registerPlugin(ScrollTrigger);

const TechMatrix = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const ALL_SKILLS = [...SKILLS.frontend, ...SKILLS.userInterface, ...SKILLS.other];

    return (
        <section ref={sectionRef} className="py-32 md:py-48 bg-dark-100 overflow-hidden relative">
            <div className="container px-6 md:px-12 mx-auto relative z-10 mb-20 text-center mix-blend-difference">
                <h2 className="text-4xl md:text-8xl font-display font-medium text-white mb-6 uppercase tracking-tight">
                    Technological<br /><span className="text-gray-600">Arsenal</span>
                </h2>
                <p className="text-gray-400 font-mono text-xs md:text-sm tracking-widest uppercase">
                    Core Capabilities initialized
                </p>
            </div>

            {/* Infinite Marquee Rows - No Rotation for cleaner alignment */}
            <div className="flex flex-col gap-12 md:gap-24">
                {/* Row 1: Left */}
                <div className="animate-marquee flex gap-12 w-max">
                    {[...ALL_SKILLS, ...ALL_SKILLS].map((skill, i) => (
                        <span key={`r1-${i}`} className="text-5xl md:text-8xl font-bold text-transparent px-4 font-heading uppercase opacity-50" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>
                            {skill}
                        </span>
                    ))}
                </div>

                {/* Row 2: Right */}
                <div className="animate-marquee-reverse flex gap-12 w-max self-end">
                    {[...ALL_SKILLS, ...ALL_SKILLS].reverse().map((skill, i) => (
                        <span key={`r2-${i}`} className="text-5xl md:text-8xl font-bold text-white/10 px-4 font-heading uppercase hover:text-accent-flow transition-colors duration-300">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px] pointer-events-none" />
        </section>
    );
};

export default TechMatrix;
