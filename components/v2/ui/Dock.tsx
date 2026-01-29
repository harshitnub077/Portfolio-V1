"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import Link from "next/link";

const LINKS = [
    { label: "ORIGIN", href: "/#hero" },
    { label: "ARTIFACTS", href: "/#work" },
    { label: "IDENTITY", href: "/#about" },
    { label: "SIGNAL", href: "/#contact" },
];

export default function Dock() {
    const dockRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
        gsap.to(e.currentTarget, { scale: 1.2, duration: 0.3, ease: "back.out(2)" });
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
        gsap.to(e.currentTarget, { scale: 1, duration: 0.3 });
    };

    return (
        <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <div
                ref={dockRef}
                className="flex items-center gap-2 px-4 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl"
            >
                {LINKS.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        className="relative px-4 py-2 text-[10px] font-mono tracking-widest text-white/70 hover:text-[#d4af37] transition-colors rounded-full hover:bg-white/5"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
