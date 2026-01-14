import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PHOTOS = [
    "/photography/photo1.jpg",
    "/photography/photo2.jpg",
    "/photography/photo3.jpg",
    // Add real paths here or placeholders
];

const Photography = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".photo-item", {
                y: 100,
                opacity: 0,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    end: "bottom bottom",
                    scrub: 1,
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 bg-black overflow-hidden">
            <div className="container px-4">
                <div className="mb-20">
                    <h2 className="text-6xl md:text-8xl font-display text-white uppercase opacity-20 hover:opacity-100 transition-opacity duration-500 cursor-default">
                        Photography
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Placeholder Grid */}
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="photo-item relative aspect-[3/4] overflow-hidden bg-gray-900 group">
                            {/* Since we might not have actual images, we use div placeholders or generic images */}
                            <div className="absolute inset-0 bg-neutral-800 group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-white font-mono text-xs border px-2 py-1 rounded-full">View Shot</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Photography;
