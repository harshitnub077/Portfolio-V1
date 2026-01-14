import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MANIFESTO_ITEMS = [
    { text: "I DON'T JUST", highlight: "CODE" },
    { text: "I ENGINEER", highlight: "FEELINGS" },
    { text: "I ARCHITECT", highlight: "AWE" },
    { text: "NOT ABOUT", highlight: "PIXELS" },
    { text: "IT'S ABOUT", highlight: "PULSE" },
];


const Manifesto = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Row Entry Animation
            gsap.from(".manifesto-row", {
                x: -100,
                opacity: 0,
                duration: 1.5,
                stagger: 0.15,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                }
            });

            // Kinetic Scroll Animation
            MANIFESTO_ITEMS.forEach((_, i) => {
                gsap.to(`.manifesto-row-${i}`, {
                    x: (i % 2 === 0 ? 100 : -100),
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    }
                });
            });

            // Velocity Physics for the entire block
            ScrollTrigger.create({
                trigger: containerRef.current,
                onUpdate: (self) => {
                    const velocity = self.getVelocity();
                    const skew = gsap.utils.clamp(-8, 8, velocity / -200);
                    const scale = gsap.utils.mapRange(-1000, 1000, 0.95, 1.05, Math.abs(velocity));

                    gsap.to(".kinetic-text", {
                        skewX: skew,
                        scaleY: scale,
                        overwrite: "auto",
                        duration: 0.5,
                        ease: "power3.out"
                    });
                }
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="w-full bg-transparent py-48 md:py-80 relative overflow-hidden flex flex-col items-center">
            {/* Background Text Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-bold text-white/[0.02] select-none pointer-events-none uppercase font-heading whitespace-nowrap">
                Neural Flow
            </div>

            <div className="w-full max-w-[1920px] px-6 md:px-12 lg:px-24 flex flex-col gap-8 md:gap-12">
                {MANIFESTO_ITEMS.map((item, i) => (
                    <div key={i} className={`manifesto-row manifesto-row-${i} group flex items-center justify-between border-b border-white/5 pb-8 overflow-hidden`}>
                        <div className="flex items-center gap-8">
                            <span className="font-mono text-[10px] text-accent-flow/40 uppercase tracking-[0.5em]">
                                {`0${i + 1}`}
                            </span>
                            <h2 className="kinetic-text text-5xl md:text-8xl lg:text-9xl font-heading tracking-tighter uppercase leading-none">
                                <span className="font-light opacity-30 group-hover:opacity-100 transition-opacity duration-500">{item.text} </span>
                                <span className="font-bold text-white group-hover:text-accent-flow transition-colors duration-500">{item.highlight}</span>
                            </h2>
                        </div>

                        <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <div className="w-32 h-[1px] bg-accent-flow glow-flow" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Neural Lines Decor */}
            <div className="absolute top-0 left-12 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            <div className="absolute top-0 right-12 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        </section>
    );
};

export default Manifesto;
