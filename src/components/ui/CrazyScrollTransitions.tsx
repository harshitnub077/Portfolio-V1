"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CrazyScrollTransitions() {
    useEffect(() => {
        const timeout = setTimeout(() => {
            const sections = document.querySelectorAll("section");

            if (!sections.length) return;

            const ctx = gsap.context(() => {
                sections.forEach((section, index) => {
                    // Skip Hero section so it's visible on load
                    if (index === 0) return;

                    // We will define an array of different animation configurations
                    // to give every section a unique entrance.
                    const animations = [
                        // 1. The Kinetic Unmask (Bottom-Up Blur)
                        {
                            set: {
                                clipPath: "polygon(10% 20%, 90% 20%, 90% 80%, 10% 80%)",
                                scale: 0.85,
                                filter: "blur(10px)",
                                y: 150,
                                opacity: 0
                            },
                            to: {
                                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                                scale: 1,
                                filter: "blur(0px)",
                                y: 0,
                                opacity: 1
                            }
                        },
                        // 2. The 3D Fold (Perspective Flip X)
                        {
                            set: {
                                perspective: 1000,
                                transformOrigin: "top center",
                                rotationX: -45,
                                y: 200,
                                opacity: 0,
                                scale: 0.9,
                            },
                            to: {
                                rotationX: 0,
                                y: 0,
                                opacity: 1,
                                scale: 1,
                            }
                        },
                        // 3. The Horizontal Glitzy Wipe (Left to Right)
                        {
                            set: {
                                clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
                                x: -100,
                                filter: "contrast(200%) grayscale(100%)",
                            },
                            to: {
                                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                                x: 0,
                                filter: "contrast(100%) grayscale(0%)",
                            }
                        },
                        // 4. The Center Split Expand
                        {
                            set: {
                                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
                                scale: 1.1,
                                filter: "blur(20px)",
                                opacity: 0.5,
                            },
                            to: {
                                clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
                                scale: 1,
                                filter: "blur(0px)",
                                opacity: 1,
                            }
                        },
                        // 5. The Diagonal Acid Drop
                        {
                            set: {
                                clipPath: "polygon(100% 0, 100% 0, 100% 0, 100% 0)",
                                y: -100,
                                filter: "hue-rotate(90deg) brightness(150%)",
                            },
                            to: {
                                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                                y: 0,
                                filter: "hue-rotate(0deg) brightness(100%)",
                            }
                        },
                        // 6. The 3D Door Swing (Perspective Flip Y)
                        {
                            set: {
                                perspective: 2000,
                                transformOrigin: "left center",
                                rotationY: -60,
                                x: -200,
                                opacity: 0,
                            },
                            to: {
                                rotationY: 0,
                                x: 0,
                                opacity: 1,
                            }
                        }
                    ];

                    // Select animation based on index
                    const animIndex = (index - 1) % animations.length;
                    const anim = animations[animIndex];

                    gsap.set(section, {
                        willChange: "transform, clip-path, filter, opacity",
                        ...anim.set
                    });

                    gsap.to(section, {
                        ...anim.to,
                        ease: "none",
                        scrollTrigger: {
                            trigger: section,
                            // we adjust start/end so they have time to animate as they enter view
                            start: "top 95%",
                            end: "top 20%",
                            scrub: 1,
                            invalidateOnRefresh: true,
                        }
                    });
                });
            });

            return () => ctx.revert();
        }, 100);

        return () => clearTimeout(timeout);
    }, []);

    return null;
}
