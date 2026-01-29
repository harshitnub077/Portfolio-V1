"use client";

import { useState, useRef, useEffect } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

interface GlitchTextProps {
    text: string;
    className?: string;
    reveal?: boolean;
}

export default function GlitchText({ text, className = "", reveal = false }: GlitchTextProps) {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const scramble = () => {
        let iteration = 0;
        clearInterval(intervalRef.current as NodeJS.Timeout);

        intervalRef.current = setInterval(() => {
            setDisplayText(() =>
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(intervalRef.current as NodeJS.Timeout);
            }

            iteration += 1 / 3;
        }, 30);
    };

    // Auto-reveal on mount if requested
    useEffect(() => {
        if (reveal) scramble();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reveal]);

    return (
        <span
            className={`inline-block cursor-crosshair hover:text-[#d4af37] transition-colors ${className}`}
            onMouseEnter={scramble}
        >
            {displayText}
        </span>
    );
}
