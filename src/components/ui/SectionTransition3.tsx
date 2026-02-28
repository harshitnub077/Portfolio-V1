"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BANDS = 6;

/**
 * Vertical shifting transition.
 * On scroll down, vertical pillars (alternating black/acid-green) shift DOWN
 * from the top edge to create a staggered comb/tooth wipe effect.
 */
export default function SectionTransition3() {
    const wrapRef = useRef<HTMLDivElement>(null);
    const bandRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!wrapRef.current) return;

        const ctx = gsap.context(() => {
            bandRefs.current.forEach((band, i) => {
                gsap.fromTo(band,
                    { y: "-100%", skewY: 10 },
                    {
                        y: "100%", skewY: 0,
                        ease: "none",
                        scrollTrigger: {
                            trigger: wrapRef.current,
                            start: "top 95%",
                            end: "bottom 5%",
                            scrub: 0.5 + (i % 3) * 0.15, // Stagger speeds based on column index
                        }
                    }
                );
            });
        }, wrapRef);

        return () => ctx.revert();
    }, []);

    const colors = ["#DFFF00", "#000000", "#DFFF00", "#000000", "#DFFF00", "#000000"];

    return (
        <div
            ref={wrapRef}
            className="relative w-full overflow-hidden pointer-events-none flex"
            style={{ height: "10vw", minHeight: "60px", maxHeight: "120px" }}
            aria-hidden="true"
        >
            {Array.from({ length: BANDS }).map((_, i) => (
                <div
                    key={i}
                    ref={el => { bandRefs.current[i] = el; }}
                    className="h-full flex-1"
                    style={{
                        background: colors[i],
                        transformOrigin: "top",
                        opacity: i % 2 === 0 ? 1 : 0.9,
                    }}
                />
            ))}
        </div>
    );
}
