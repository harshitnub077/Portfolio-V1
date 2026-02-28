"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BARS = 5;

/**
 * Venetian-blind wipe transition: staggered horizontal bars that sweep
 * left→right on scroll, creating a mechanical shutter effect.
 */
export default function SectionTransition2() {
    const wrapRef = useRef<HTMLDivElement>(null);
    const barRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!wrapRef.current) return;

        const ctx = gsap.context(() => {
            barRefs.current.forEach((bar, i) => {
                gsap.fromTo(bar,
                    { x: "-105%", skewX: -6 },
                    {
                        x: "105%", skewX: 0,
                        ease: "none",
                        scrollTrigger: {
                            trigger: wrapRef.current,
                            start: "top 90%",
                            end: "bottom 10%",
                            scrub: 0.6 + i * 0.1,
                        }
                    }
                );
            });
        }, wrapRef);

        return () => ctx.revert();
    }, []);

    const barColors = ["#000000", "#DFFF00", "#000000", "#DFFF00", "#000000"];

    return (
        <div
            ref={wrapRef}
            className="relative w-full overflow-hidden pointer-events-none"
            style={{ height: "8vw", minHeight: "48px", maxHeight: "96px" }}
            aria-hidden="true"
        >
            {Array.from({ length: BARS }).map((_, i) => (
                <div
                    key={i}
                    ref={el => { barRefs.current[i] = el; }}
                    className="absolute left-0 w-full"
                    style={{
                        height: `${100 / BARS}%`,
                        top: `${(i / BARS) * 100}%`,
                        background: barColors[i],
                        opacity: i % 2 === 0 ? 1 : 0.85,
                    }}
                />
            ))}
        </div>
    );
}
