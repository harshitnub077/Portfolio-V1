"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const SOCIALS = [
    {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/harshitnub077",
        color: "#ffffff",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://linkedin.com/in/harshit-kudhial",
        color: "#0a66c2",
    },
    {
        icon: Mail,
        label: "Email",
        href: "mailto:harshitkudhial@gmail.com",
        color: "#8b5cf6",
    },
    {
        icon: Phone,
        label: "Phone",
        href: "tel:+917678410891",
        color: "#22c55e",
    },
];

export default function Footer() {
    const container = useRef(null);

    useGSAP(() => {
        // Large CTA text — character reveal
        const chars = gsap.utils.toArray(".footer-char") as HTMLElement[];
        gsap.from(chars, {
            scrollTrigger: {
                trigger: container.current,
                start: "top 70%",
            },
            y: "100%",
            opacity: 0,
            duration: 0.8,
            stagger: 0.02,
            ease: "power3.out",
        });

        // Social links
        gsap.from(".footer-social", {
            scrollTrigger: {
                trigger: ".footer-socials-row",
                start: "top 90%",
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
        });

        // Bottom bar
        gsap.from(".footer-bottom", {
            scrollTrigger: {
                trigger: ".footer-bottom",
                start: "top 95%",
            },
            opacity: 0,
            duration: 0.8,
        });
    }, { scope: container });

    // Split CTA text into characters
    const ctaText = "LET'S BUILD SOMETHING AMAZING";
    const ctaChars = ctaText.split("");

    return (
        <section
            ref={container}
            id="contact"
            className="relative w-full py-32 md:py-40 px-6 md:px-8 max-w-7xl mx-auto"
        >
            {/* Section Label */}
            <div className="section-label mb-20">[ 05 — Get in Touch ]</div>

            {/* Large CTA Text */}
            <div className="mb-16">
                <div className="overflow-hidden">
                    <h2 className="text-5xl md:text-7xl lg:text-[6vw] font-bold tracking-tighter leading-[0.95]">
                        {ctaChars.map((char, i) => (
                            <span
                                key={i}
                                className="footer-char inline-block"
                                style={{ display: char === " " ? "inline" : "inline-block" }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </h2>
                </div>
            </div>

            {/* Email CTA */}
            <div className="mb-20">
                <MagneticButton href="mailto:harshitkudhial@gmail.com" strength={0.2}>
                    <div className="group inline-flex items-center gap-4 px-8 py-5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                        <span className="text-xl md:text-2xl font-light text-white/80 group-hover:text-white transition-colors">
                            harshitkudhial@gmail.com
                        </span>
                        <ArrowUpRight className="w-6 h-6 text-white/40 group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
                    </div>
                </MagneticButton>
            </div>

            {/* Social Links */}
            <div className="footer-socials-row flex flex-wrap gap-4 mb-32">
                {SOCIALS.map((social) => (
                    <MagneticButton
                        key={social.label}
                        href={social.href}
                        strength={0.35}
                    >
                        <div className="footer-social group flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/8 hover:bg-white/10 hover:border-white/15 transition-all duration-300">
                            <social.icon className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                            <span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                                {social.label}
                            </span>
                        </div>
                    </MagneticButton>
                ))}
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/8">
                <p className="font-space-mono text-xs text-white/30">
                    &copy; {new Date().getFullYear()} Harshit Kudhial. All rights reserved.
                </p>
                <p className="font-space-mono text-xs text-white/30">
                    Delhi, India • Designed & Built with passion
                </p>
            </div>
        </section>
    );
}
