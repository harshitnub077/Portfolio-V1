"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Footer() {
    const containerRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!containerRef.current || !textRef.current) return;

        // Slide up massive text
        const ctx = gsap.context(() => {
            gsap.fromTo(
                textRef.current,
                { y: "100%", opacity: 0 },
                {
                    y: "0%",
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
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
        <section
            ref={containerRef}
            className="relative flex flex-col w-screen min-h-[70vh] bg-white structural-grid flex justify-between box-border"
        >

            {/* Tabular Links Grid */}
            <div className="w-full grid grid-cols-2 md:grid-cols-4 border-b-2 border-black">
                <a href="mailto:h.kudhial@example.com" className="p-6 md:p-8 border-r-2 border-black border-b-2 md:border-b-0 border-black flex flex-col items-start gap-4 hover:bg-primary transition-colors hoverable group">
                    <span className="font-space-mono text-xs font-bold uppercase opacity-50 group-hover:opacity-100 transition-opacity">01 / Contact</span>
                    <span className="font-inter font-black text-2xl uppercase tracking-tighter">Email</span>
                </a>
                <a href="https://github.com" className="p-6 md:p-8 border-r-2 md:border-b-0 border-b-2 border-black flex flex-col items-start gap-4 hover:bg-primary transition-colors hoverable group">
                    <span className="font-space-mono text-xs font-bold uppercase opacity-50 group-hover:opacity-100 transition-opacity">02 / Code</span>
                    <span className="font-inter font-black text-2xl uppercase tracking-tighter">Github</span>
                </a>
                <a href="https://linkedin.com" className="p-6 md:p-8 border-r-2 border-black flex flex-col items-start gap-4 hover:bg-primary transition-colors hoverable group">
                    <span className="font-space-mono text-xs font-bold uppercase opacity-50 group-hover:opacity-100 transition-opacity">03 / Network</span>
                    <span className="font-inter font-black text-2xl uppercase tracking-tighter">LinkedIn</span>
                </a>
                <div className="p-6 md:p-8 flex flex-col items-start gap-4 bg-black text-white">
                    <span className="font-space-mono text-xs font-bold uppercase text-primary">Status</span>
                    <span className="font-inter font-black text-2xl uppercase tracking-tighter">Available</span>
                </div>
            </div>

            {/* Massive Structural Anchor Text */}
            <div className="w-full overflow-hidden flex-1 flex flex-col justify-end p-6 md:p-12 pb-0">
                <h2
                    ref={textRef}
                    className="text-[18vw] font-inter font-black uppercase leading-[0.75] tracking-tighter text-black w-full text-center"
                >
                    LET'S BUILD
                </h2>
            </div>

            {/* Bottom Metadata */}
            <div className="w-full flex justify-between items-center p-4 border-t-2 border-black bg-white">
                <span className="font-space-mono text-xs font-bold uppercase tracking-tighter">© {new Date().getFullYear()} KUDHIAL</span>
                <span className="font-space-mono text-xs font-bold uppercase tracking-tighter">V7 // SWISS KINETIC BLUEPRINT</span>
            </div>
        </section>
    );
}
