import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Manifesto = () => {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".manifesto-line", {
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: 1,
                },
                x: 100,
                opacity: 0,
                stagger: 0.1,
                ease: "power3.out"
            });
        }, textRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="w-full min-h-screen flex items-center justify-center py-24 px-6 relative overflow-hidden">
            <div ref={textRef} className="max-w-6xl w-full flex flex-col gap-2 mix-blend-difference z-10">
                <p className="manifesto-line text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
                    I DON'T JUST CODE.
                </p>
                <p className="manifesto-line text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-800 ml-[5%]">
                    I ENGINEER
                </p>
                <p className="manifesto-line text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-white ml-[10%]">
                    DIGITAL REALITIES
                </p>
                <p className="manifesto-line text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-gray-500 ml-[2%]">
                    FROM THE VOID.
                </p>

                <div className="mt-12 max-w-2xl ml-auto manifesto-line">
                    <p className="text-lg md:text-xl font-mono text-gray-400 leading-relaxed">
                        Based in NST, chasing the edge of AI and UI/UX.
                        Every pixel is a decision. Every line of code is a structure.
                        I build applications that don't just function—they feel.
                    </p>
                </div>
            </div>

            <div className="absolute right-0 bottom-0 text-[20vw] font-black leading-none opacity-5 pointer-events-none select-none">
                ORIGIN
            </div>
        </section>
    );
};

export default Manifesto;
