"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface MarqueeTextProps {
    text: string;
    speed?: number;
    className?: string;
    separator?: string;
}

export default function MarqueeText({
    text,
    speed = 20,
    className = "",
    separator = " — ",
}: MarqueeTextProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const inner = innerRef.current;
        if (!inner) return;

        // Get width of single set of text
        const singleWidth = inner.scrollWidth / 2;

        gsap.to(inner, {
            x: -singleWidth,
            duration: speed,
            ease: "none",
            repeat: -1,
        });
    }, { scope: containerRef });

    // Create text content — duplicate for seamless loop
    const fullText = `${text}${separator}`.repeat(8);

    return (
        <div
            ref={containerRef}
            className={`overflow-hidden whitespace-nowrap py-6 ${className}`}
        >
            <div
                ref={innerRef}
                className="inline-block will-change-transform"
                style={{ whiteSpace: "nowrap" }}
            >
                <span className="font-bold tracking-tighter text-white/[0.07] text-6xl md:text-8xl lg:text-9xl uppercase select-none">
                    {fullText}
                </span>
            </div>
        </div>
    );
}
