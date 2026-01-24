"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const shapesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

            // Animate shapes
            gsap.to(".hero-shape", {
                y: "20px",
                rotation: 10,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.5,
            });

            // Text Reveal Animation
            tl.from(".hero-text-line", {
                y: 100,
                opacity: 0,
                stagger: 0.2,
                duration: 1.2,
                delay: 0.5, // Wait for preloader roughly
            })
                .from(".hero-btn", {
                    scale: 0.8,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "back.out(1.7)",
                }, "-=0.5");

            // Parallax Effect
            gsap.to(shapesRef.current, {
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
                y: 200,
            });

            gsap.to(textRef.current, {
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
                y: 100,
                opacity: 0.5,
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
        >
            {/* Background Shapes */}
            <div ref={shapesRef} className="absolute inset-0 z-0 pointer-events-none">
                <div className="hero-shape absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]" />
                <div className="hero-shape absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[100px]" />
                <div className="hero-shape absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
            </div>

            <div ref={textRef} className="relative z-10 max-w-5xl mx-auto text-center">
                <h2 className="hero-text-line text-lg sm:text-xl md:text-2xl font-medium tracking-wide text-blue-400 mb-4 font-sans">
                    Harshit Kudhial
                </h2>

                <h1 className="hero-text-line text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-6 font-heading">
                    <span className="block text-gradient bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
                        2nd Year Undergraduate
                    </span>
                    <span className="block text-3xl sm:text-5xl md:text-7xl mt-2 text-neutral-400">
                        at Newton School of Technology
                    </span>
                </h1>

                <div className="hero-text-line bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 my-8 max-w-3xl mx-auto transform hover:scale-[1.02] transition-transform duration-500">
                    <p className="text-xl md:text-2xl text-neutral-300 font-light leading-relaxed">
                        Exploring <span className="text-blue-400 font-medium">Artificial Intelligence</span> & <span className="text-violet-400 font-medium">Machine Learning</span>
                    </p>
                    <div className="h-px w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto my-4" />
                    <p className="text-lg text-neutral-400">
                        Full Stack Developer | Philomath
                    </p>
                </div>

                <p className="hero-text-line text-base md:text-lg text-neutral-500 max-w-2xl mx-auto mb-10">
                    Passionate about building intelligent systems, scalable web apps, and mastering new technologies.
                </p>

                <div className="hero-text-line flex items-center justify-center gap-4 sm:gap-6">
                    <button data-hover className="hero-btn group relative px-8 py-3 bg-white text-black rounded-full font-medium overflow-hidden transition-all hover:pr-10">
                        <span className="relative z-10 flex items-center gap-2">
                            View Projects <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 bg-blue-400/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>

                    <button data-hover className="hero-btn px-8 py-3 border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-full transition-all">
                        Contact Me
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white/50 rounded-full animate-scroll-down" />
                </div>
            </div>
        </section>
    );
}
