"use client";

import { useRef, useState } from "react";

interface TextRevealProps {
    children: string;
    className?: string;
}

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

export default function TextReveal({ children, className = "" }: TextRevealProps) {
    const [text, setText] = useState(children);
    const originalText = useRef(children);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        let iteration = 0;
        clearInterval(intervalRef.current as NodeJS.Timeout);

        intervalRef.current = setInterval(() => {
            setText(() =>
                originalText.current
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) {
                            return originalText.current[index];
                        }
                        return characters[Math.floor(Math.random() * characters.length)];
                    })
                    .join("")
            );

            if (iteration >= originalText.current.length) {
                clearInterval(intervalRef.current as NodeJS.Timeout);
            }

            iteration += 1 / 3;
        }, 30);
    };

    const handleMouseLeave = () => {
        clearInterval(intervalRef.current as NodeJS.Timeout);
        setText(originalText.current);
    };

    return (
        <span
            className={`inline-block cursor-pointer ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {text}
        </span>
    );
}
