"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Full-width shifting transition strip between Hero and the next section.
 * On scroll: a diagonal acid-green band sweeps across the screen left→right,
 * followed by a second black band — giving a "wipe" effect between sections.
 */
export default function SectionTransition() {
    const wrapRef = useRef<HTMLDivElement>(null);
    const band1Ref = useRef<HTMLDivElement>(null);
    const band2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!wrapRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: wrapRef.current,
                    start: "top 90%",
                    end: "bottom 10%",
                    scrub: 0.8,
                }
            });

            // Band 1 (primary/acid) sweeps from left edge to full width then off-screen
            tl.fromTo(band1Ref.current,
                { x: "-105%" },
                { x: "105%", ease: "none" },
                0
            );

            // Band 2 (black) follows slightly behind
            tl.fromTo(band2Ref.current,
                { x: "-105%" },
                { x: "105%", ease: "none" },
                0.15
            );
        }, wrapRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={wrapRef}
            className="relative w-full overflow-hidden pointer-events-none"
            style={{ height: "6vw", minHeight: "40px", maxHeight: "80px" }}
            aria-hidden="true"
        >
            {/* Acid-green wipe band */}
            <div
                ref={band1Ref}
                className="absolute inset-y-0 left-0 w-full"
                style={{
                    background: "#DFFF00",
                    transform: "translateX(-105%) skewX(-4deg)",
                    clipPath: "polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)",
                }}
            />
            {/* Black trailing band */}
            <div
                ref={band2Ref}
                className="absolute inset-y-0 left-0 w-full"
                style={{
                    background: "#000000",
                    transform: "translateX(-105%) skewX(-4deg)",
                    clipPath: "polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)",
                    opacity: 0.12,
                }}
            />
        </div>
    );
}
