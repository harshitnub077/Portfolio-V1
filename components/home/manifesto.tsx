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
                    end: "bottom 40%",
                    scrub: 1,
                },
                filter: "blur(10px)",
                y: 50,
                opacity: 0,
                scale: 0.95,
                stagger: 0.2,
                ease: "power2.out"
            });
        }, textRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="w-full min-h-screen flex items-center justify-center py-24 px-6 relative overflow-hidden">
            <div ref={textRef} className="max-w-7xl w-full flex flex-col gap-4 z-10">

                <h1 className="leading-tight mb-8">
                    I DON'T JUST <span className="text-white font-bold">CODE</span>.
                    <br />
                    I <span className="text-white font-bold">ENGINEER</span>
                    <br />
                    DIGITAL <span className="text-white font-bold">REALITIES</span>.
                </h1>

                <div className="max-w-2xl text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                    <p className="mb-6">
                        Based in NST, chasing the edge of <span className="text-white font-semibold">AI</span> and <span className="text-white font-semibold">UI/UX</span>.
                    </p>
                    <p>
                        I build applications that don't just function—they <span className="italic text-white font-semibold">feel</span>.
                    </p>
                </div>
            </div>

            <div className="absolute right-0 bottom-0 text-[20vw] font-black leading-none opacity-[0.02] pointer-events-none select-none mix-blend-difference">
                ORIGIN
            </div>
        </section>
    );
};

export default Manifesto;
