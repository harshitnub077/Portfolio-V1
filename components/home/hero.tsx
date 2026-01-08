import { MENULINKS, SOCIAL_LINKS } from "../../constants";
import React, { MutableRefObject, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = React.memo(() => {
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Elegant Fade-In
    tl.fromTo(
      ".hero-content",
      { y: 30, opacity: 0, scale: 0.98 },
      { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
    )
      .fromTo(
        ".hero-glow",
        { opacity: 0, scale: 0.5 },
        { opacity: 0.4, scale: 1, duration: 2 },
        "-=1.5"
      );

    return () => {
      tl.kill();
    };
  }, []);

  const { ref: heroSectionRef } = MENULINKS[0];

  return (
    <section
      className="w-full flex flex-col justify-center items-center min-h-screen relative overflow-hidden bg-black text-white"
      id={heroSectionRef}
      ref={targetSection}
    >
      {/* Soft Spotlight Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtly moving spotlight */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-white/[0.03] rounded-full blur-[120px] hero-glow animate-pulse-slow pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-white/[0.03] rounded-full blur-[100px] hero-glow animate-pulse-slow pointer-events-none" style={{ animationDelay: "2s" }}></div>

        {/* Fine Grain */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none noise bg-repeat"></div>
      </div>

      <div ref={containerRef} className="hero-content relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">

        {/* Elegant Label */}
        <div className="mb-6 opacity-60">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-gray-300">
            Portfolio &middot; V1
          </span>
        </div>

        {/* Typography Centerpiece */}
        <div className="mb-8 flex flex-col items-center leading-none">
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-light tracking-tighter text-white/90">
            HARSHIT
          </h1>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white -mt-2 md:-mt-4">
            KUDHIAL
          </h1>
        </div>

        {/* Minimal Description */}
        <p className="max-w-xl text-center text-gray-400 text-sm md:text-lg font-light leading-relaxed mb-10 tracking-wide">
          Crafting refined digital experiences with <span className="text-white font-medium">precision</span> and <span className="text-white font-medium">purpose</span>.
          Merging aesthetics with engineering.
        </p>

        {/* Minimal CTAs - Rounded Pills */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href={`#${MENULINKS[1].ref}`}
            className="px-8 py-3 rounded-full bg-white text-black text-xs font-bold tracking-widest hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          >
            EXPLORE
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 rounded-full border border-white/10 bg-white/5 text-white text-xs font-bold tracking-widest hover:bg-white/10 transition-colors backdrop-blur-md"
          >
            CONNECT
          </a>
        </div>

      </div>
    </section>
  );
});

HeroSection.displayName = "LandingHero";

export default HeroSection;
