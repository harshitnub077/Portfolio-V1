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
        <section className="relative w-screen min-h-screen bg-background border-b border-white/5 overflow-hidden flex flex-col">
            {/* Ambient Multiverse Effect */}
            <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[50vw] h-[50vh] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none z-0" />
            <div className="absolute top-0 right-0 w-[40vw] h-[40vh] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

            {/* Section Header */}
            <div className="w-full flex justify-between items-center p-4 border-b border-cyan-500/20 bg-cyan-500/10 text-white relative z-10 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                <h2 className="font-space-mono text-sm uppercase tracking-widest font-bold text-cyan-400">
                    06 // Selected Works Array
                </h2>
                <span className="font-space-mono text-xs uppercase tracking-tighter text-blue-400 opacity-80 animate-pulse">
                    [ {projects.length} Items Indexed ]
                </span>
            </div>

            {/* Accordion Rows */}
            <div className="flex-1 flex flex-col w-full relative z-10">
                {projects.map((project, idx) => {
                    const isHovered = hoveredIndex === idx;

                    return (
                        <div
                            key={idx}
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group border-b border-white/5 transition-colors duration-500 w-full overflow-hidden flex-1 flex flex-col justify-center"
                            style={{ backgroundColor: isHovered ? "rgba(6, 182, 212, 0.05)" : "transparent" }}
                        >

                            <div className="w-full flex flex-col md:flex-row items-center justify-between p-6 md:p-12 cursor-default">
                                <div className="flex-1">
                                    <span className={`font-space-mono text-xs font-bold uppercase mb-3 block transition-colors duration-300 ${isHovered ? 'text-blue-400' : 'text-foreground/30'}`}>
                                        <span className={`${isHovered ? 'text-cyan-400' : 'text-foreground/30'} mr-2`}>&gt;_</span> {project.category} {'//'} {project.year}
                                    </span>
                                    <h3 className={`font-inter font-black text-[8vw] md:text-[5vw] leading-[0.8] tracking-tighter uppercase transition-colors duration-300 drop-shadow-[0_0_15px_rgba(6,182,212,0.1)] ${isHovered ? 'text-foreground translate-x-2' : 'text-outline text-transparent opacity-40'}`} style={{ WebkitTextStroke: isHovered ? "0" : "1px rgba(6, 182, 212, 0.3)" }}>
                                        {project.title}
                                    </h3>
                                </div>

                                {/* Desktop Arrow */}
                                <div className={`hidden md:flex w-24 h-24 border border-cyan-500/50 rounded-full items-center justify-center transition-all duration-500 shadow-[0_0_15px_rgba(6,182,212,0.0)] ${isHovered ? 'bg-indigo-600 text-white rotate-45 shadow-[0_0_30px_rgba(37,99,235,0.5)] scale-110 border-blue-400' : 'bg-transparent text-cyan-400'}`}>
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
                                        className="overflow-hidden bg-white/5 backdrop-blur-md border-t border-cyan-500/10 text-foreground"
                                    >
                                        <div className="w-full flex flex-col md:flex-row p-6 md:p-12 gap-8 items-start md:items-center">
                                            <p className="flex-1 font-space-mono text-sm leading-relaxed md:max-w-xl text-foreground/80 border-l border-cyan-500 pl-4">
                                                {project.desc}
                                            </p>
                                            <div className="flex flex-wrap gap-4">
                                                <button className="flex items-center gap-2 px-6 py-3 border border-cyan-400 text-cyan-400 font-space-mono text-xs font-bold uppercase tracking-widest hover:bg-cyan-600 hover:text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300">
                                                    <ExternalLink size={16} /> Deploy
                                                </button>
                                                <button className="flex items-center gap-2 px-6 py-3 border border-cyan-400/50 text-foreground font-space-mono text-xs font-bold uppercase tracking-widest hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300">
                                                    <Github size={16} /> Source
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
