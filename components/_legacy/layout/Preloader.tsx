"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

const CHAOS_WORDS = ["SYSTEM", "VOID", "NULL", "KERNEL", "DATA", "FLOW", "ERROR", "SYNTAX"];

export default function Preloader() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState(0);
    const [isFinal, setIsFinal] = useState(false);
    const [randomNum, setRandomNum] = useState(0);

    useEffect(() => {
        // Chaos Phase: Rapid Mono Cycling
        const interval = setInterval(() => {
            setIndex((prev) => {
                if (prev >= 20) { // Cycle 20 times for effect
                    clearInterval(interval);
                    setIsFinal(true);
                    return 0;
                }
                return prev + 1;
            });
        }, 80); // 80ms extremely fast

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setRandomNum(Math.floor(Math.random() * 99999));

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (isFinal) {
            const tl = gsap.timeline();

            // 1. Strobe Flash White
            tl.to(containerRef.current, {
                backgroundColor: "#ffffff",
                duration: 0.1,
                ease: "power4.out"
            })
                // 2. Resolve to Black (Void)
                .to(containerRef.current, {
                    backgroundColor: "#000000",
                    duration: 0.1,
                    delay: 0.05
                })
                // 3. Exit (Curtain Up)
                .to(containerRef.current, {
                    yPercent: -100,
                    duration: 1.2,
                    ease: "power4.inOut",
                    delay: 0.2
                });
        }
    }, [isFinal]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#000000] overflow-hidden"
        >
            <div className="relative text-center mix-blend-difference z-10 p-4">
                {isFinal ? (
                    // Final State: Void (Silence before the reveal)
                    <div className="w-full h-full" />
                ) : (
                    // Chaos State: Raw Mono data
                    <div className="flex flex-col items-center">
                        <h1 className="font-mono text-4xl md:text-8xl text-white tracking-widest uppercase animate-pulse">
                            {CHAOS_WORDS[index % CHAOS_WORDS.length]}
                        </h1>
                        <p className="mt-4 font-mono text-xs text-white/50">
                            INITIALIZING_NEURAL_UPLINK... {randomNum}
                        </p>
                    </div>
                )}
            </div>

            {/* Background Grid for Tech feel during chaos */}
            {
                !isFinal && (
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                )
            }
        </div >
    );
}
