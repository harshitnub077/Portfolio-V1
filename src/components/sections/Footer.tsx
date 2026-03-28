"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Footer() {
    const containerRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!containerRef.current || !textRef.current) return;

        
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
            className="relative flex flex-col w-screen min-h-screen bg-background border-t border-white/5 structural-grid flex justify-between box-border overflow-hidden pt-20"
        >

            {/* Cyber-Electric Ambient Glows */}
            <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-[60vw] h-[60vh] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute top-1/4 left-0 w-[30vw] h-[30vh] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

            {/* Tabular Links Grid */}
            <div className="w-full grid grid-cols-2 md:grid-cols-4 border-b border-white/5 relative z-10 bg-background/50 backdrop-blur-md">
                <a href="mailto:h.kudhial@example.com" className="p-6 md:p-8 border-r border-white/5 border-b md:border-b-0 flex flex-col items-start gap-4 hover:bg-cyan-600 transition-colors duration-300 hoverable group text-foreground">
                    <span className="font-space-mono text-xs font-bold uppercase text-cyan-400 group-hover:text-white transition-all">01 / Contact</span>
                    <span className="font-inter font-black text-2xl uppercase tracking-tighter group-hover:text-white transition-colors">Email</span>
                </a>
                <a href="https://github.com/harshitnub077" className="p-6 md:p-8 border-r md:border-b-0 border-b border-white/5 flex flex-col items-start gap-4 hover:bg-indigo-600 transition-colors duration-300 hoverable group text-foreground">
                    <span className="font-space-mono text-xs font-bold uppercase text-indigo-400 group-hover:text-white transition-all">02 / Code</span>
                    <span className="font-inter font-black text-2xl uppercase tracking-tighter group-hover:text-white transition-colors">Github</span>
                </a>
                <a href="https://linkedin.com/in/harshitkudhial" className="p-6 md:p-8 border-r border-white/5 flex flex-col items-start gap-4 hover:bg-blue-600 transition-colors duration-300 hoverable group text-foreground">
                    <span className="font-space-mono text-xs font-bold uppercase text-blue-400 group-hover:text-white transition-all">03 / Network</span>
                    <span className="font-inter font-black text-2xl uppercase tracking-tighter group-hover:text-white transition-colors">LinkedIn</span>
                </a>
                <div className="p-6 md:p-8 flex flex-col items-start gap-4 bg-cyan-500/10 text-foreground group">
                    <span className="font-space-mono text-xs font-bold uppercase text-cyan-400">Status</span>
                    <span className="font-inter font-black text-2xl uppercase tracking-tighter flex items-center gap-3">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" style={{ backgroundColor: '#22d3ee' }}></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400" style={{ backgroundColor: '#22d3ee' }}></span>
                        </span>
                        Available
                    </span>
                </div>
            </div>

            {/* Massive Structural Anchor Text */}
            <div className="w-full overflow-hidden flex-1 flex flex-col justify-end p-6 md:p-12 pb-0 relative z-10">
                <h2
                    ref={textRef}
                    className="text-[18vw] font-inter font-black uppercase leading-[0.75] tracking-tighter w-full text-center text-outline text-transparent drop-shadow-[0_0_40px_rgba(6,182,212,0.2)]"
                    style={{ WebkitTextStroke: "2px rgba(6, 182, 212, 0.4)" }}
                >
                    LET&apos;S <span className="text-cyan-500 text-outline" style={{ WebkitTextStroke: "1px #06b6d4" }}>BUILD</span>
                </h2>
            </div>

            {/* Bottom Metadata */}
            <div className="w-full flex justify-between items-center p-4 border-t border-white/5 bg-background/80 backdrop-blur-md relative z-10">
                <span className="font-space-mono text-xs font-bold uppercase tracking-widest text-foreground/30">© {new Date().getFullYear()} KUDHIAL</span>
                <span className="font-space-mono text-xs font-bold uppercase tracking-widest text-cyan-400 animate-pulse">V9 // CYBER-ELECTRIC CORE</span>
            </div>
        </section>
    );
}

