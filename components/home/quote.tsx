// Copyright Harshit Kudhial 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaharshit/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { gsap } from "gsap";
import React, { MutableRefObject, useEffect, useRef } from "react";

const QuoteSection = () => {
  const containerRef: MutableRefObject<HTMLDivElement> = useRef(null);
  const quoteRef: MutableRefObject<HTMLQuoteElement> = useRef(null);
  const accentRef: MutableRefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([quoteRef.current, accentRef.current], {
        opacity: 0,
        y: 60
      });

      // Create entrance animation
      const tl = gsap.timeline();

      tl.to(quoteRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out"
      })
        .to(accentRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        }, "-=0.5");

      // Add subtle breathing effect to the accent line
      gsap.to(accentRef.current, {
        scaleX: 1.05,
        duration: 4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full relative select-none py-32 md:py-40 lg:py-48 overflow-hidden bg-black"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Geometric accent elements */}
      <div className="absolute top-1/2 left-0 w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent transform -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent transform -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 md:px-16 relative z-10">
        <div className="text-center">
          {/* Quote */}
          <blockquote
            ref={quoteRef}
            className="relative mb-16"
          >
            <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight tracking-wide font-serif">
              I have a{" "}
              <span className="relative inline-block">
                <span className="relative z-10 font-bold text-white">
                  strong
                </span>
                {/* Subtle underline effect */}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400/50 to-transparent transform scale-x-0 origin-left transition-transform duration-1000 delay-500" />
              </span>{" "}
              obsession for attention to detail.
            </p>

            {/* Decorative quotation marks */}
            <div className="absolute -top-8 -left-8 text-6xl md:text-8xl text-white/10 font-serif leading-none">
              &ldquo;
            </div>
            <div className="absolute -bottom-8 -right-8 text-6xl md:text-8xl text-white/10 font-serif leading-none">
              &rdquo;
            </div>
          </blockquote>

          {/* Accent line */}
          <div
            ref={accentRef}
            className="relative mx-auto w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent"
          >
            {/* Animated glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-sm opacity-0 animate-pulse" />
          </div>

          {/* Attribution */}
          <div className="mt-12">
            <p className="text-sm md:text-base text-white font-mono tracking-widest uppercase">
              — Harshit Kudhial
            </p>
          </div>
        </div>

        {/* Minimalist decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-0.5 h-0.5 bg-white/40 rounded-full animate-pulse delay-500" />
      </div>
    </section>
  );
};

export default QuoteSection;
