import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Intro = ({ onComplete }: { onComplete: () => void }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    // Fade out container then call onComplete
                    gsap.to(containerRef.current, {
                        opacity: 0,
                        duration: 1,
                        onComplete: onComplete
                    })
                }
            });

            // Loading counter
            tl.to({}, {
                duration: 2,
                onUpdate: function () {
                    setPercent(Math.floor(this.progress() * 100));
                },
                ease: "power2.inOut",
            });

            // Ignition Flash
            tl.to(textRef.current, {
                scale: 1.5,
                opacity: 0,
                filter: "blur(20px)",
                duration: 0.5,
                ease: "power4.in",
            });

            tl.to(".loader-bar", {
                scaleX: 0,
                duration: 0.5,
                ease: "expo.out"
            }, "<");

        }, containerRef);

        return () => ctx.revert();
    }, [onComplete]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center text-white"
        >
            <div ref={textRef} className="text-[15vw] font-bold tracking-tighter leading-none relative mix-blend-difference">
                {percent}%
            </div>
            <div className="loader-bar w-full h-2 bg-white absolute bottom-0 left-0 origin-left"></div>
        </div>
    );
};

export default Intro;
