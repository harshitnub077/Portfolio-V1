import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScrollProvider from "@/components/ui/SmoothScrollProvider";
import Preloader from "@/components/ui/Preloader";
import Navbar from "@/components/ui/Navbar";

// Display + Body text
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

// Technical / monospace elements
const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-space-mono",
});

export const metadata: Metadata = {
    title: "Harshit Kudhial | AI/ML Engineer — Agentic AI, RAG, LLM Orchestration",
    description:
        "AI/ML Engineer specializing in agentic AI systems, Retrieval-Augmented Generation, LLM orchestration, and vector-based semantic search. Built 4 production-grade AI/ML systems with 12,500+ lines of code.",
    keywords: [
        "Harshit Kudhial",
        "AI/ML Engineer",
        "Agentic AI",
        "RAG",
        "LLM",
        "LangGraph",
        "LangChain",
        "React",
        "Next.js",
        "Python",
        "Full Stack Developer",
        "Portfolio",
    ],
    authors: [{ name: "Harshit Kudhial" }],
    openGraph: {
        title: "Harshit Kudhial | AI/ML Engineer",
        description:
            "Building production-grade agentic AI systems, RAG pipelines, and intelligent applications.",
        type: "website",
        locale: "en_US",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${inter.variable} ${spaceMono.variable} font-inter antialiased bg-[#050505] text-[#FAFAFA]`}
                suppressHydrationWarning
            >
                <div className="bg-glow" />
                <Preloader />
                <SmoothScrollProvider>
                    <Navbar />
                    <CustomCursor />
                    {children}
                </SmoothScrollProvider>
            </body>
        </html>
    );
}
