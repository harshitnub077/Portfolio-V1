"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".about-content", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                    end: "bottom 80%",
                    toggleActions: "play none none reverse",
                    scrub: 1,
                },
                y: 100,
                opacity: 0,
                stagger: 0.1,
            });

            gsap.from(".about-image", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%",
                    scrub: 1,
                },
                scale: 0.8,
                rotation: -5,
                opacity: 0.5,
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 relative">
                <div className="about-image relative w-full aspect-square max-w-[500px] mx-auto bg-neutral-800 rounded-3xl overflow-hidden border border-white/10">
                    {/* Placeholder for Profile Image */}
                    <div className="absolute inset-0 flex items-center justify-center text-neutral-600 bg-neutral-900">
                        [Profile Image Placeholder]
                        {/* <Image src="/path/to/image.jpg" fill alt="Harshit Kudhial" className="object-cover" /> */}
                    </div>

                    {/* Decorative Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-violet-500/10 mix-blend-overlay" />
                </div>
            </div>

            <div className="md:w-1/2 space-y-8">
                <h2 className="about-content text-4xl font-bold font-heading text-white">
                    About <span className="text-violet-400">Me</span>
                </h2>

                <div className="about-content text-lg text-neutral-300 space-y-6 leading-relaxed">
                    <p>
                        I am a <span className="text-white font-medium">2nd Year Undergraduate</span> at Newton School of Technology, currently diving deep into the world of <span className="text-blue-400">Artificial Intelligence</span> and <span className="text-blue-400">Machine Learning</span> because the pursuit of creating intelligent systems fascinates me.
                    </p>
                    <p>
                        Beyond AI, I am a capable <span className="text-violet-400">Full Stack Developer</span> who loves crafting seamless digital experiences. I pride myself on being a <span className="italic text-white">Philomath</span>—a lifelong learner always eager to master new technologies.
                    </p>
                    <p>
                        Skilled in managing multiple projects efficiently, I bridge the gap between complex backend logic and elegant frontend design.
                    </p>
                </div>

                <div className="about-content pt-8 flex gap-8">
                    <div className="space-y-2">
                        <h4 className="text-3xl font-bold text-white">2+</h4>
                        <p className="text-sm text-neutral-500 uppercase tracking-wider">Years Exp.</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-3xl font-bold text-white">10+</h4>
                        <p className="text-sm text-neutral-500 uppercase tracking-wider">Projects</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
