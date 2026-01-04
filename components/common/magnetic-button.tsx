import React, { useRef, useState, MouseEvent } from "react";
import { gsap } from "gsap";

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    [key: string]: any;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
    children,
    className = "",
    onClick,
    ...props
}) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
        if (!buttonRef.current) return;

        const { left, top, width, height } =
            buttonRef.current.getBoundingClientRect();
        const x = e.clientX - (left + width / 2);
        const y = e.clientY - (top + height / 2);

        gsap.to(buttonRef.current, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.5,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = () => {
        if (!buttonRef.current) return;

        setIsHovered(false);
        gsap.to(buttonRef.current, {
            x: 0,
            y: 0,
            duration: 1,
            ease: "elastic.out(1, 0.3)",
        });
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    return (
        <button
            ref={buttonRef}
            className={`relative inline-flex items-center justify-center ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            onClick={onClick}
            {...props}
        >
            <span className="relative z-10 pointer-events-none">{children}</span>
        </button>
    );
};

export default MagneticButton;
