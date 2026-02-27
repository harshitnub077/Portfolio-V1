"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    // The exact CSS keyframes from the reference site for `.loader-animated`
    useEffect(() => {
        // Inject the keyframes into the document head just for the preloader
        const style = document.createElement("style");
        style.innerHTML = `
      .loader-animated {
        width: 40px;
        aspect-ratio: 1;
        --c: linear-gradient(#000 0 0);
        --m: radial-gradient(farthest-side, #000 92%, #0000);
        background: var(--m) center/12px 12px, var(--c) left 50% top -20px/8px 16px, var(--c) left 50% bottom -20px/8px 16px, var(--c) top 50% left -20px/16px 8px, var(--c) top 50% right -20px/16px 8px;
        background-repeat: no-repeat;
        animation: l18-1 1.5s infinite, l18-2 1.5s infinite;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 9999;
      }
      @keyframes l18-1 {
        30%, 70% { background-position: center, left 50% top calc(50% - 8px), left 50% bottom calc(50% - 8px), top 50% left calc(50% - 8px), top 50% right calc(50% - 8px) }
      }
      @keyframes l18-2 {
        0%, 40% { transform: rotate(0) }
        60%, 100% { transform: rotate(90deg) }
      }
    `;
        document.head.appendChild(style);

        // Fade out after a mock loading time to match the reference smooth entry
        const timer = setTimeout(() => {
            gsap.to(".preloader-wrapper", {
                opacity: 0,
                duration: 0.8,
                ease: "power2.inOut",
                onComplete: () => setIsLoading(false)
            });
        }, 2000);

        return () => {
            clearTimeout(timer);
            document.head.removeChild(style);
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div className="preloader-wrapper fixed inset-y-0 w-full bg-background z-[9990] flex items-center justify-center">
            <div className="loader-animated" />
        </div>
    );
}
