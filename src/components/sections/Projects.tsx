"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "COGNIFY",
        category: "AI / ML",
        desc: "Currently building—an intelligent platform pushing the frontiers of artificial intelligence and machine learning real-world applications.",
        year: "2024",
        link: "#",
        github: "#"
    },
    {
        title: "SYNAPTIC CARE",
        category: "HEALTH TECH",
        desc: "Advanced healthcare interface designed to streamline medical processing and elevate patient care systems.",
        year: "2024",
        link: "https://synaptic-care.vercel.app",
        github: "#"
    },
    {
        title: "CINEMATRIX",
        category: "DATA SCIENCE",
        desc: "A cinematic recommendation engine built on Streamlit, leveraging data analytics to curate personalized viewing experiences.",
        year: "2024",
        link: "https://cinematrix.streamlit.app/",
        github: "#"
    },
    {
        title: "IPL WIN PREDICTOR",
        category: " MACHINE LEARNING",
        desc: "A predictive ML model that analyzes historical match data to forecast Indian Premier League outcomes in real-time.",
        year: "2024",
        link: "https://ipl-win-predictor-x.streamlit.app/",
        github: "#"
    },
    {
        title: "STITCHBLOOM",
        category: "WEB APP",
        desc: "A beautifully crafted web application blending e-commerce functionality with dynamic UI architecture.",
        year: "2024",
        link: "https://github.com/harshitnub077/StitchBloom",
        github: "https://github.com/harshitnub077/StitchBloom"
    },
    {
        title: "SPAM SHIELD",
        category: "CLASSIFICATION ML",
        desc: "A robust neural network implementation designed to detect and filter malicious spam communications.",
        year: "2023",
        link: "https://github.com/harshitnub077/SpamShield-ML",
        github: "https://github.com/harshitnub077/SpamShield-ML"
    },
    {
        title: "NANO URL",
        category: "SAAS / TOOLING",
        desc: "A high-performance URL shortening service built for speed, analytics, and infrastructure scalability.",
        year: "2023",
        link: "https://nano-url-eight.vercel.app",
        github: "#"
    },
    {
        title: "AGIS MCP",
        category: "SYSTEMS",
        desc: "An experimental infrastructure project exploring multi-context processing and system integrations.",
        year: "2023",
        link: "https://github.com/harshitnub077/AgisMCP",
        github: "https://github.com/harshitnub077/AgisMCP"
    }
];

export default function Projects() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="relative w-screen bg-white structural-grid border-b-2 border-black">

            {/* Section Header */}
            <div className="w-full flex justify-between items-center p-4 border-b-2 border-black bg-black text-white">
                <h2 className="font-space-mono text-sm uppercase font-bold">
                    04 // Selected Works Array
                </h2>
                <span className="font-space-mono text-xs uppercase tracking-tighter text-primary">
                    [ {projects.length} Items ]
                </span>
            </div>

            {/* Accordion Rows */}
            <div className="flex flex-col w-full">
                {projects.map((project, idx) => {
                    const isHovered = hoveredIndex === idx;

                    return (
                        <div
                            key={idx}
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group border-b-2 border-black transition-colors duration-300 w-full overflow-hidden"
                            style={{ backgroundColor: isHovered ? "var(--color-primary)" : "transparent" }}
                        >

                            <div className="w-full flex flex-col md:flex-row items-center justify-between p-6 md:p-12 cursor-none">
                                <div className="flex-1">
                                    <span className="font-space-mono text-xs font-bold uppercase mb-2 block opacity-50">
                                        {project.category} {'//'} {project.year}
                                    </span>
                                    <h3 className="font-inter font-black text-[8vw] md:text-[5vw] leading-[0.8] tracking-tighter uppercase text-black">
                                        {project.title}
                                    </h3>
                                </div>

                                {/* Desktop Arrow */}
                                <div className="hidden md:flex w-24 h-24 border-2 border-black rounded-full items-center justify-center bg-white group-hover:rotate-45 transition-transform duration-500">
                                    <span className="font-space-mono text-3xl font-bold -mt-2"></span>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>

                            {/* Collapsible Content */}
                            <AnimatePresence>
                                {isHovered && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                        className="overflow-hidden bg-black text-white"
                                    >
                                        <div className="w-full flex flex-col md:flex-row p-6 md:p-12 gap-8 items-start md:items-center">
                                            <p className="flex-1 font-space-mono text-sm leading-relaxed md:max-w-xl">
                                                {project.desc}
                                            </p>
                                            <div className="flex gap-4">
                                                <button className="flex items-center gap-2 px-6 py-3 border-2 border-white font-space-mono text-xs font-bold uppercase hover:bg-white hover:text-black transition-colors">
                                                    <ExternalLink size={16} /> Visit deployed API
                                                </button>
                                                <button className="flex items-center gap-2 px-6 py-3 border-2 border-white font-space-mono text-xs font-bold uppercase hover:bg-white hover:text-black transition-colors">
                                                    <Github size={16} /> Repository
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </div>
                    );
                })}
            </div>
        </section>
    );
}
