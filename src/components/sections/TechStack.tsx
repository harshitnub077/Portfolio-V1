"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const skills = [
    "React.js", "Next.js", "TypeScript", "TailwindCSS",
    "Node.js", "PostgreSQL", "Python", "PyTorch",
    "TensorFlow", "AWS", "Docker", "GraphQL"
];

export default function TechStack() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // We use a simple staggered pop-in animation on scroll
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".tech-pill",
                { scale: 0.8, opacity: 0, y: 20 },
                {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.05,
                    ease: "back.out(2)",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-24 bg-background relative border-b-4 border-[#111111] px-6 md:px-12">

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">

                <div className="w-full md:w-1/3">
                    <div className="mb-6 inline-block px-4 py-2 border-2 border-[#111111] bg-white font-poppins font-bold text-sm uppercase shadow-[4px_4px_0_#111111] -rotate-1">
                        03. Tech Arsenal
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black font-poppins text-[#111111] leading-tight">
                        Tools I use to build <span className="font-caveat text-accent">awesome</span> things.
                    </h2>
                </div>

                <div ref={containerRef} className="w-full md:w-2/3 flex flex-wrap gap-4 justify-center md:justify-end">
                    {skills.map((skill, idx) => (
                        <div
                            key={idx}
                            className="tech-pill px-6 py-3 bg-white border-2 border-[#111111] rounded-full shadow-[4px_4px_0_#111111] text-lg font-bold font-poppins text-[#111111] hover:-translate-y-1 hover:shadow-[4px_6px_0_#111111] transition-all cursor-default"
                        >
                            {skill}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
