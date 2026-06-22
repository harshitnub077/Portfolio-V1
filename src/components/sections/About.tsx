"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
    const container = useRef(null);

    useGSAP(() => {
        gsap.to(".text-fill-target", {
            scrollTrigger: {
                trigger: ".text-fill-target",
                start: "top 80%",
                end: "bottom 40%",
                scrub: 1,
            },
            backgroundPositionX: "0%",
        });
    }, { scope: container });

    return (
        <section ref={container} className="relative w-full py-32 px-8 md:px-24 bg-white text-black min-h-screen flex items-center">
            <div className="max-w-5xl">
                <h2 className="text-2xl font-space-mono mb-12 border-b border-black/20 pb-4">About</h2>
                <p className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-fill-target-light">
                    I believe in removing the unnecessary. Design should be intuitive, performant, and structurally sound. By embracing constraints, we discover true elegance.
                </p>
            </div>
        </section>
    );
}
