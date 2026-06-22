"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress(p => {
                if (p >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return p + Math.floor(Math.random() * 15) + 1;
            });
        }, 150);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress >= 100) {
            setTimeout(() => {
                gsap.to(".preloader-wrapper", {
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.inOut",
                    onComplete: () => setIsLoading(false)
                });
            }, 500);
        }
    }, [progress]);

    if (!isLoading) return null;

    return (
        <div className="preloader-wrapper fixed inset-y-0 w-full bg-black z-[9990] flex items-end justify-end p-8 text-white font-space-mono text-6xl lg:text-8xl font-bold">
            {progress > 100 ? 100 : progress}%
        </div>
    );
}
