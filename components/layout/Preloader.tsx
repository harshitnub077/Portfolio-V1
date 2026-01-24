"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => setIsLoading(false),
        });

        if (containerRef.current && textRef.current) {
            tl.to(textRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.5,
            })
                .to(textRef.current, {
                    opacity: 0,
                    y: -50,
                    duration: 0.8,
                    ease: "power3.in",
                    delay: 1,
                })
                .to(containerRef.current, {
                    y: "-100%",
                    duration: 1,
                    ease: "expo.inOut",
                });
        }
    }, []);

    if (!isLoading) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#0a0a0a] text-white"
        >
            <div
                ref={textRef}
                className="text-4xl md:text-6xl font-bold opacity-0 translate-y-10"
            >
                Loading Experience...
            </div>
        </div>
    );
}
