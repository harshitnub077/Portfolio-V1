"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        //   const ctx = gsap.context(() => {
        //      // Simple fade in
        //   }, containerRef);
        //   return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center" id="contact">
            <p className="text-blue-400 font-medium mb-4 uppercase tracking-widest text-sm">Get in Touch</p>
            <h2 className="text-5xl md:text-7xl font-heading font-bold mb-12 text-white">Let's work together</h2>

            <div className="flex flex-col md:flex-row gap-8 justify-center mb-16">
                <a href="mailto:example@email.com" className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-neutral-200 transition-colors">
                    <Mail className="w-5 h-5" />
                    <span>Send me an email</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <a href="#" className="flex items-center justify-center gap-3 px-8 py-4 border border-white/20 rounded-full font-medium text-lg hover:bg-white/10 transition-colors">
                    Copy Email
                </a>
            </div>

            <div className="flex justify-center gap-6">
                {[
                    { icon: Github, href: "#" },
                    { icon: Linkedin, href: "#" },
                    { icon: Twitter, href: "#" }
                ].map((social, idx) => (
                    <a
                        key={idx}
                        href={social.href}
                        className="p-4 bg-white/5 rounded-full hover:bg-white/20 hover:scale-110 transition-all border border-white/5"
                    >
                        <social.icon className="w-6 h-6 text-white" />
                    </a>
                ))}
            </div>
        </section>
    );
}
