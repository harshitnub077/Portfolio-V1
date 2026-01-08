import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
    {
        title: "Full Stack Development",
        description: "Building scalable web applications with modern frameworks and architectures."
    },
    {
        title: "UI/UX Architecture",
        description: "Designing intuitive interfaces that balance aesthetics with functionality."
    },
    {
        title: "Performance Optimization",
        description: "Enhancing application speed and efficiency through strategic optimization."
    },
    {
        title: "AI Integration",
        description: "Implementing intelligent features that enhance user experiences."
    },
    {
        title: "Creative Direction",
        description: "Leading design vision from concept to implementation."
    }
];

const Services = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".service-item", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="w-full py-40 px-6 md:px-12 bg-black relative">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="mb-24 text-center">
                    <div className="mb-4">
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em]">
                            Expertise
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white tracking-tighter leading-[0.9] mb-6">
                        What I <span className="bg-gradient-to-r from-[#EC4899] to-[#A855F7] bg-clip-text text-transparent">Do</span>
                    </h2>
                    <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#EC4899] to-transparent mx-auto"></div>
                </div>

                {/* Services Grid - Clean Layout */}
                <div className="space-y-16 md:space-y-20">
                    {SERVICES.map((service, i) => (
                        <div 
                            key={i} 
                            className="service-item group"
                        >
                            <div className="flex flex-col gap-6">
                                {/* Service Number and Title */}
                                <div className="flex items-baseline gap-6">
                                    <span className="text-sm font-mono bg-gradient-to-r from-[#EC4899] to-[#A855F7] bg-clip-text text-transparent font-bold">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <div className="pl-12 md:pl-16">
                                    <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-3xl">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Divider Line */}
                                {i < SERVICES.length - 1 && (
                                    <div className="pt-8 border-b border-white/10"></div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
