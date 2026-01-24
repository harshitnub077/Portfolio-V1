"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".footer-reveal", {
                yPercent: -50,
                opacity: 0,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom bottom",
                    scrub: 1
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="bg-black min-h-screen flex flex-col justify-between pt-32 pb-10 px-4 md:px-12 relative overflow-hidden">

            {/* Massive Call to Action */}
            <div className="flex-grow flex items-center justify-center flex-col">
                <div className="text-center space-y-8 z-10 mb-16">
                    <p className="text-neutral-500 font-mono text-sm tracking-widest uppercase mb-8">
                        [ Ready to Start? ]
                    </p>
                    <a
                        href="mailto:contact@harshit.dev"
                        className="group block relative"
                    >
                        <h1 className="text-[15vw] leading-[0.8] font-black font-heading text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-violet-500 transition-all duration-500">
                            LET'S TALK
                        </h1>
                        <ArrowUpRight className="absolute top-0 right-0 w-[5vw] h-[5vw] text-white opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 group-hover:translate-x-4 transition-all duration-500" />
                    </a>
                </div>
                <div className="flex flex-col md:flex-row gap-8 justify-center">
                    <Button size="lg" className="rounded-full h-14 px-8 text-lg font-bold gap-3" asChild>
                        <a href="mailto:example@email.com">
                            <Mail className="w-5 h-5" />
                            <span>Send me an email</span>
                            <ArrowUpRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full h-14 px-8 text-lg font-bold bg-transparent hover:bg-white/10 gap-3">
                        Copy Email
                    </Button>
                </div>
            </div>

            {/* Footer Meta */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-10 text-neutral-400 font-mono text-sm">
                <div>
                    <h4 className="text-white font-bold mb-4">SOCIALS</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Twitter (X)</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-4">LOCATION</h4>
                    <p>New Delhi, India</p>
                    <p>Remote Available</p>
                </div>

                <div className="md:text-right flex flex-col justify-between">
                    <p>© 2026 Harshit Kudhial</p>
                    <p className="text-xs text-neutral-600 mt-2">Designed & Engineered with Passion</p>
                </div>
            </div>

            {/* Background Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none" />
        </section>
    );
}
