import { useEffect, useState, useCallback, useRef } from 'react';

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";

export const useScramble = (text: string, speed: number = 40, delay: number = 0) => {
    const [displayText, setDisplayText] = useState("");
    const [isComplete, setIsComplete] = useState(false);

    const iterationRef = useRef(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const startScramble = useCallback(() => {
        setIsComplete(false);
        iterationRef.current = 0;

        if (timerRef.current) clearInterval(timerRef.current);

        // Initial delay
        setTimeout(() => {
            timerRef.current = setInterval(() => {
                setDisplayText(prev => {
                    const result = text
                        .split("")
                        .map((letter, index) => {
                            if (index < iterationRef.current) {
                                return text[index];
                            }
                            return CHARS[Math.floor(Math.random() * CHARS.length)];
                        })
                        .join("");

                    if (iterationRef.current >= text.length) {
                        if (timerRef.current) clearInterval(timerRef.current);
                        setIsComplete(true);
                        return text;
                    }

                    iterationRef.current += 1 / 3; // Slow down the reveal
                    return result;
                });
            }, speed);
        }, delay);

    }, [text, speed, delay]);

    useEffect(() => {
        startScramble();
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [startScramble]);

    return { displayText, isComplete, replay: startScramble };
};
