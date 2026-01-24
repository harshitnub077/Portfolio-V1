"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".about-text", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                ease: "power3.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative py-40 px-6 bg-[#0c0c0c] border-t border-white/5">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-20">

                {/* Left: Minimal Title */}
                <div className="md:w-1/3">
                    <h2 className="about-text text-neutral-500 text-sm font-bold font-mono tracking-widest uppercase sticky top-32">
                        [ Who Am I ? ]
                    </h2>
                </div>

                {/* Right: Content */}
                <div className="md:w-2/3 space-y-16">
                    <div className="about-text space-y-8">
                        <h3 className="text-4xl md:text-6xl font-bold leading-tight text-white font-heading tracking-tight">
                            I build <span className="text-neutral-500">digital experiences</span> that blur the line between <span className="text-blue-500">art</span> and <span className="text-violet-500">technology</span>.
                        </h3>
                        <p className="text-xl text-neutral-400 leading-relaxed font-light max-w-2xl">
                            As a 2nd Year Undergraduate at <span className="text-white">Newton School of Technology</span>, I code with an obsession for detail. My work is fueled by a passion for <span className="text-white">AI</span> and <span className="text-white">Machine Learning</span>, creating systems that aren't just functional—they're alive.
                        </p>
                    </div>

                    <div className="about-text grid grid-cols-2 md:grid-cols-3 gap-12 pt-12 border-t border-white/5">
                        <div>
                            <h4 className="text-5xl font-bold text-white mb-2">02+</h4>
                            <p className="text-sm text-neutral-500 uppercase">Years of Code</p>
                        </div>
                        <div>
                            <h4 className="text-5xl font-bold text-white mb-2">15+</h4>
                            <p className="text-sm text-neutral-500 uppercase">Projects</p>
                        </div>
                        <div>
                            <h4 className="text-5xl font-bold text-white mb-2">100%</h4>
                            <p className="text-sm text-neutral-500 uppercase">Dedication</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
