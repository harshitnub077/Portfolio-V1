"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(".hero-text-line", {
            y: 100,
            opacity: 0,
            duration: 1.5,
            stagger: 0.2,
            ease: "power4.out",
            delay: 0.5
        });
        tl.from(".hero-subtext", {
            opacity: 0,
            duration: 1,
            ease: "power2.out",
        }, "-=1");
    }, { scope: container });

    return (
        <section ref={container} className="relative w-full h-screen flex flex-col justify-center px-8 md:px-24">
            <div className="overflow-hidden">
                <h1 className="hero-text-line text-6xl md:text-9xl font-bold tracking-tighter uppercase leading-none">
                    Harshit
                </h1>
            </div>
            <div className="overflow-hidden">
                <h1 className="hero-text-line text-6xl md:text-9xl font-bold tracking-tighter uppercase leading-none text-outline">
                    Kudhial
                </h1>
            </div>
            
            <div className="mt-12 md:mt-24 max-w-2xl">
                <p className="hero-subtext text-xl md:text-2xl font-space-mono">
                    Creative Developer & Designer. Building minimalist, high-performance digital experiences.
                </p>
            </div>
        </section>
    );
}
