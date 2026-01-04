import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const FluidBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const blobs = gsap.utils.toArray(".blob");

            blobs.forEach((blob: any) => {
                gsap.to(blob, {
                    x: "random(-100, 100)",
                    y: "random(-100, 100)",
                    scale: "random(0.8, 1.2)",
                    duration: "random(10, 20)",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none"
        >
            <div className="blob absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-accent-purple rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob"></div>
            <div className="blob absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-accent-cyan rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob animation-delay-2000"></div>
            <div className="blob absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-purple-900 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob animation-delay-4000"></div>
        </div>
    );
};

export default FluidBackground;
