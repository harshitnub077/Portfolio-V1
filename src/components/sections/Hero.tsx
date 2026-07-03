"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MapPin, Sparkles, Terminal } from "lucide-react";

export default function Hero() {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(".bento-item", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            delay: 0.2
        });
    }, { scope: container });

    return (
        <section ref={container} className="relative w-full min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col justify-center">
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 w-full">
                {/* Main Hero Card */}
                <div className="bento-item bento-card col-span-1 md:col-span-3 p-8 md:p-12 flex flex-col justify-between min-h-[400px]">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 w-fit">
                            <Sparkles className="w-4 h-4 text-violet-400" />
                            <span className="text-sm font-space-mono text-white/70">Available for work</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
                            Hi, I'm <span className="text-gradient">Harshit Kudhial</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/60 max-w-xl font-light">
                            Creative Developer blending design, motion, and code to craft premium digital experiences.
                        </p>
                    </div>
                </div>

                {/* Location Card */}
                <div className="bento-item bento-card col-span-1 p-8 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                        <MapPin className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold mb-1">Based in</h3>
                    <p className="text-white/60">Earth</p>
                </div>

                {/* Stat/Role Card 1 */}
                <div className="bento-item bento-card col-span-1 md:col-span-2 p-8 flex items-center gap-6">
                    <div className="p-4 rounded-2xl bg-white/5">
                        <Terminal className="w-8 h-8 text-rose-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-1">Full-stack & WebGL</h3>
                        <p className="text-white/60">React, Next.js, Three.js, GSAP</p>
                    </div>
                </div>

                {/* Connect/Action Card */}
                <div className="bento-item bento-card col-span-1 md:col-span-2 p-8 flex flex-col justify-center">
                     <p className="text-lg text-white/70 mb-4">Ready to build something amazing?</p>
                     <a href="mailto:hello@example.com" className="w-full py-4 rounded-xl bg-white text-black font-semibold text-center hover:bg-white/90 transition-colors">
                        Let's Talk
                     </a>
                </div>
            </div>
            
        </section>
    );
}
