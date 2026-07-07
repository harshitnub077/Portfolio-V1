"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface TextRevealProps {
    children: string;
    className?: string;
    as?: "h1" | "h2" | "h3" | "p" | "span";
    delay?: number;
    scrollTriggered?: boolean;
    start?: string;
    staggerAmount?: number;
}

export default function TextReveal({
    children,
    className = "",
    as: Tag = "p",
    delay = 0,
    scrollTriggered = true,
    start = "top 80%",
    staggerAmount = 0.03,
}: TextRevealProps) {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Split text into words
        const text = children;
        const words = text.split(" ");
        container.innerHTML = "";
        
        words.forEach((word, i) => {
            const wordSpan = document.createElement("span");
            wordSpan.style.display = "inline-block";
            wordSpan.style.overflow = "hidden";
            wordSpan.style.verticalAlign = "top";

            const inner = document.createElement("span");
            inner.textContent = word;
            inner.className = "reveal-word";
            inner.style.display = "inline-block";
            inner.style.willChange = "transform";

            wordSpan.appendChild(inner);
            container.appendChild(wordSpan);

            // Add space after word (except last)
            if (i < words.length - 1) {
                const space = document.createTextNode("\u00A0");
                container.appendChild(space);
            }
        });

        const wordElements = container.querySelectorAll(".reveal-word");

        const ctx = gsap.context(() => {
            const animConfig: gsap.TweenVars = {
                y: "110%",
                duration: 0.9,
                ease: "power3.out",
                stagger: staggerAmount,
                delay,
            };

            if (scrollTriggered) {
                gsap.from(wordElements, {
                    ...animConfig,
                    scrollTrigger: {
                        trigger: container,
                        start,
                        once: true,
                    },
                });
            } else {
                gsap.from(wordElements, animConfig);
            }
        });

        return () => ctx.revert();
    }, [children, delay, scrollTriggered, start, staggerAmount]);

    // @ts-expect-error - dynamic tag
    return <Tag ref={containerRef} className={className}>{children}</Tag>;
}
