"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import MagneticButton from "./MagneticButton";
import HKLogo from "./HKLogo";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const NAV_LINKS = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
];

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Show/hide on scroll direction + glassmorphism on scroll
    useGSAP(() => {
        const nav = navRef.current;
        if (!nav) return;

        // Initial state — hidden, will animate in after preloader
        gsap.set(nav, { y: -100, opacity: 0 });

        // Animate in after preloader (delayed)
        gsap.to(nav, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            delay: 2.8,
        });

        // Show/hide based on scroll direction
        ScrollTrigger.create({
            start: "top top",
            end: "max",
            onUpdate: (self) => {
                const direction = self.direction;
                const progress = self.progress;

                if (progress > 0.02) {
                    setScrolled(true);
                } else {
                    setScrolled(false);
                }

                if (direction === -1) {
                    // Scrolling up — show
                    gsap.to(nav, { y: 0, duration: 0.4, ease: "power2.out" });
                } else if (direction === 1 && progress > 0.05) {
                    // Scrolling down — hide
                    gsap.to(nav, { y: -100, duration: 0.4, ease: "power2.in" });
                }
            },
        });
    }, { scope: navRef });

    // Smooth scroll to section
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setMenuOpen(false);
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav
            ref={navRef}
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
                scrolled
                    ? "bg-[#050505]/80 backdrop-blur-2xl border-b border-white/5"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
                {/* Logo */}
                <MagneticButton href="#" strength={0.2}>
                    <HKLogo size={36} inverted />
                </MagneticButton>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10">
                    {NAV_LINKS.map((link) => (
                        <MagneticButton key={link.label} strength={0.25}>
                            <a
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-300 font-space-mono tracking-wide uppercase"
                            >
                                {link.label}
                            </a>
                        </MagneticButton>
                    ))}
                    <MagneticButton
                        href="mailto:harshitkudhial@gmail.com"
                        strength={0.3}
                    >
                        <span className="shimmer-border px-5 py-2.5 rounded-full text-sm font-medium text-white bg-white/5 hover:bg-white/10 transition-colors">
                            Let&apos;s Talk
                        </span>
                    </MagneticButton>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2 hoverable"
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed inset-0 top-20 bg-[#050505]/95 backdrop-blur-3xl transition-all duration-500 flex flex-col items-center justify-center gap-8 ${
                    menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            >
                {NAV_LINKS.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        onClick={(e) => scrollToSection(e, link.href)}
                        className="text-3xl font-bold tracking-tighter text-white/80 hover:text-white transition-colors"
                    >
                        {link.label}
                    </a>
                ))}
                <a
                    href="mailto:harshitkudhial@gmail.com"
                    className="mt-4 px-8 py-3 rounded-full bg-white text-black font-semibold text-lg"
                >
                    Let&apos;s Talk
                </a>
            </div>
        </nav>
    );
}
