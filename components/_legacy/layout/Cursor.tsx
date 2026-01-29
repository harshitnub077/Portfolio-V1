"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function Cursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        const moveCursor = (e: MouseEvent) => {
            // Main dot moves instantly
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out",
            });
            // Follower has a slight delay
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.4,
                ease: "power3.out",
            });
        };

        const handleHoverStart = (e: MouseEvent) => {
            setIsHovering(true);
            const target = e.currentTarget as HTMLElement;

            // Magnetic effect: snap to center of target
            const rect = target.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Optional: animate follower to separate from cursor
            gsap.to(follower, {
                x: centerX,
                y: centerY,
                width: rect.width + 10,
                height: rect.height + 10,
                borderRadius: "4px", // mimic button shape
                backgroundColor: "transparent",
                borderColor: "#d4af37", // Gold
                duration: 0.3,
                ease: "back.out(1.7)"
            });
        };

        const handleHoverEnd = () => {
            setIsHovering(false);
            // Reset follower shape
            gsap.to(follower, {
                width: 40,
                height: 40,
                borderRadius: "50%",
                borderColor: "rgba(255, 255, 255, 0.3)",
                duration: 0.3,
            });
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        const hoverables = document.querySelectorAll("a, button, [data-hover]");
        hoverables.forEach((el) => {
            el.addEventListener("mouseenter", handleHoverStart as EventListener);
            el.addEventListener("mouseleave", handleHoverEnd);
        });

        const observer = new MutationObserver(() => {
            const newHoverables = document.querySelectorAll("a, button, [data-hover]");
            newHoverables.forEach((el) => {
                el.removeEventListener("mouseenter", handleHoverStart as EventListener);
                el.removeEventListener("mouseleave", handleHoverEnd);
                el.addEventListener("mouseenter", handleHoverStart as EventListener);
                el.addEventListener("mouseleave", handleHoverEnd);
            });
        });
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            hoverables.forEach((el) => {
                el.removeEventListener("mouseenter", handleHoverStart as EventListener);
                el.removeEventListener("mouseleave", handleHoverEnd);
            });
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (isClicking) {
            gsap.to(cursor, { scale: 0.8, duration: 0.1 });
        } else {
            gsap.to(cursor, { scale: 1, duration: 0.1 });
        }
    }, [isClicking]);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (isHovering) {
            gsap.to(cursor, { opacity: 0, duration: 0.2 }); // Hide main dot when magnetizing
        } else {
            gsap.to(cursor, { opacity: 1, duration: 0.2 });
        }
    }, [isHovering]);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-3 h-3 bg-[#d4af37] rounded-full pointer-events-none z-[9999] mix-blend-exclusion -translate-x-1/2 -translate-y-1/2"
            />
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-10 h-10 border border-white/30 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-colors box-border"
            />
        </>
    );
}
