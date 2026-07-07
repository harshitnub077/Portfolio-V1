"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    href?: string;
    onClick?: () => void;
    strength?: number;
}

export default function MagneticButton({
    children,
    className = "",
    href,
    onClick,
    strength = 0.35,
}: MagneticButtonProps) {
    const buttonRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const button = buttonRef.current;
        const inner = innerRef.current;
        if (!button || !inner) return;

        // Only enable on desktop (pointer: fine)
        const mediaQuery = window.matchMedia("(pointer: fine)");
        if (!mediaQuery.matches) return;

        const xTo = gsap.quickTo(button, "x", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
        const yTo = gsap.quickTo(button, "y", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
        const innerXTo = gsap.quickTo(inner, "x", { duration: 0.5, ease: "elastic.out(1, 0.5)" });
        const innerYTo = gsap.quickTo(inner, "y", { duration: 0.5, ease: "elastic.out(1, 0.5)" });

        const handleMouseMove = (e: MouseEvent) => {
            const rect = button.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;

            xTo(deltaX * strength);
            yTo(deltaY * strength);
            innerXTo(deltaX * strength * 0.4);
            innerYTo(deltaY * strength * 0.4);
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
            innerXTo(0);
            innerYTo(0);
        };

        button.addEventListener("mousemove", handleMouseMove);
        button.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            button.removeEventListener("mousemove", handleMouseMove);
            button.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [strength]);

    const Tag = href ? "a" : "div";
    const extraProps = href ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: href.startsWith("http") ? "noopener noreferrer" : undefined } : {};

    return (
        <div ref={buttonRef} className="inline-block will-change-transform">
            <Tag
                {...extraProps}
                onClick={onClick}
                className={`hoverable ${className}`}
                role={!href ? "button" : undefined}
            >
                <div ref={innerRef} className="will-change-transform">
                    {children}
                </div>
            </Tag>
        </div>
    );
}
