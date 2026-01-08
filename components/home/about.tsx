// Copyright Harshit Kudhial 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaharshit/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { gsap, Linear } from "gsap";
import React, { MutableRefObject, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const AboutSection = () => {
  const containerRef: MutableRefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate lines sliding up
      gsap.utils.toArray(".about-line-inner").forEach((line: any) => {
        gsap.from(line, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "bottom 75%",
            toggleActions: "play none none reverse",
          },
          y: "100%",
          opacity: 0,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.1
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="w-full min-h-[60vh] flex flex-col justify-center items-center py-32 px-6 relative select-none bg-black"
      ref={containerRef}
    >
      <div className="max-w-4xl text-center z-10">
        {/* Minimalist Header */}
        <div className="overflow-hidden mb-8 flex justify-center">
          <span className="about-line-inner block text-xs font-mono text-white uppercase tracking-[0.4em]">
            The Profile
          </span>
        </div>

        {/* Main Statement */}
        <div className="space-y-2">
          <div className="overflow-hidden">
            <h2 className="about-line-inner block text-4xl md:text-6xl font-light tracking-tight leading-[1.1]">
              I am <span className="text-white">Harshit</span>, a student at
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2 className="about-line-inner block text-4xl md:text-6xl font-medium text-white tracking-tight leading-[1.1]">
              Engineered for
            </h2>
            <h2 className="about-line-inner block text-4xl md:text-6xl font-light text-gray-400 tracking-tight leading-[1.1]">
              pursuing <span className="text-white">CS</span> & <span className="text-white">AI</span>.
            </h2>
          </div>
        </div>

        {/* Secondary Text */}
        <div className="mt-12 max-w-2xl mx-auto space-y-1">
          <div className="overflow-hidden">
            <p className="about-line-inner block text-lg md:text-xl font-light text-white leading-relaxed">
              A <span className="text-white font-semibold">Philomath</span> obsessed with the intersection of
            </p>
          </div>
          <div className="overflow-hidden">
            <p className="about-line-inner block text-lg md:text-xl font-light text-white leading-relaxed">
              <span className="text-white font-semibold">Artificial Intelligence</span> and <span className="text-white font-semibold">Human Interface</span>.
            </p>
          </div>
          <div className="overflow-hidden">
            <p className="about-line-inner block text-lg md:text-xl font-light text-white leading-relaxed">
              Crafting tools for the <span className="text-white font-semibold">next generation</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-white/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
    </section>
  );
};

export default AboutSection;
