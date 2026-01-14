import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Intro = ({ onComplete }: { onComplete: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: onComplete
      });

      // Counter Animation
      const counterObj = { value: 0 };
      tl.to(counterObj, {
        value: 100,
        duration: 2.5,
        ease: "expo.out",
        onUpdate: () => {
          setPercent(Math.floor(counterObj.value));
        }
      });

      // Text Flicker / Cycle
      const words = ["SYSTEM", "CORE", "HARSHIT"];
      const textContainer = textRef.current;

      words.forEach((word, i) => {
        tl.to(textContainer, {
          duration: 0.1,
          onStart: () => { if (textContainer) textContainer.innerText = word; }
        }, i * 0.8);
      });

      // Curtain Effect (Split)
      tl.to(".curtain", {
        height: 0,
        duration: 1.2,
        ease: "power4.inOut",
        stagger: 0.1,
        delay: 0.5
      });

      tl.to(containerRef.current, {
        autoAlpha: 0,
        duration: 0.1
      });

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] flex flex-col pointer-events-none">
      {/* Top Curtain */}
      <div className="curtain w-full h-[50vh] bg-black border-b border-white/10 relative">
        <div className="absolute bottom-4 left-4 md:bottom-12 md:left-12 text-white font-mono text-xs">
          INITIALIZING_SYSTEM_V2
        </div>
      </div>

      {/* Bottom Curtain */}
      <div className="curtain w-full h-[50vh] bg-black border-t border-white/10 relative flex items-center justify-center">
        <h2 ref={textRef} className="absolute -top-12 md:-top-24 text-[10vw] font-display font-bold text-white mix-blend-difference opacity-20">
          LOADING
        </h2>

        <div className="absolute bottom-4 right-4 md:bottom-12 md:right-12 text-white font-display text-[8vw] leading-none mix-blend-difference">
          {percent}%
        </div>
      </div>
    </div>
  );
};

export default Intro;
