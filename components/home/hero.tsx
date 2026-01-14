import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, SOCIAL_LINKS } from "../../constants";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro Animation
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        delay: 0.5, // Wait for loader
        skewY: 10,
      })
        .from(subtitleRef.current, {
          y: 20,
          opacity: 0,
          duration: 1,
        }, "-=1");

      // Parallax Effect
      gsap.to(titleRef.current, {
        yPercent: 50,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const { ref: heroSectionRef } = MENULINKS[0];

  return (
    <section
      ref={heroRef}
      id={heroSectionRef}
      className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 py-20 z-10"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-start mix-blend-difference">
          {/* Subtitle / Label */}
          <div className="overflow-hidden mb-4">
            <span ref={subtitleRef} className="block text-accent-flow font-mono text-sm md:text-base tracking-widest uppercase">
              Creative Developer & &nbsp;Design Engineer
            </span>
          </div>

          {/* Massive Title */}
          <div className="overflow-hidden">
            <h1
              ref={titleRef}
              className="font-display font-bold text-[13vw] leading-[0.85] tracking-tighter text-white uppercase"
            >
              Harshit<br />
              <span className="text-gray-500">Kudhial</span>
            </h1>
          </div>
        </div>

        {/* Floating CTA / Socials - Positioned absolutely or in grid */}
        <div className="absolute bottom-12 right-6 md:right-12 flex flex-col items-end gap-6 mix-blend-difference">
          <div className="flex flex-col gap-2 text-right">
            {SOCIAL_LINKS.linkedin && (
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-white/50 hover:text-white transition-colors uppercase font-mono text-xs tracking-widest"
              >
                LinkedIn
              </a>
            )}
            {SOCIAL_LINKS.github && (
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="text-white/50 hover:text-white transition-colors uppercase font-mono text-xs tracking-widest"
              >
                GitHub
              </a>
            )}
            <a
              href={`mailto:${SOCIAL_LINKS.email || "harshit@example.com"}`}
              className="text-white/50 hover:text-white transition-colors uppercase font-mono text-xs tracking-widest"
            >
              Email
            </a>
          </div>

          <a
            href={`#${MENULINKS[1].ref}`}
            className="mt-4 group relative inline-flex items-center justify-center w-24 h-24 rounded-full border border-white/20 hover:border-white transition-colors"
          >
            <div className="absolute inset-0 rounded-full bg-white scale-0 group-hover:scale-100 transition-transform duration-500 ease-expo" />
            <span className="relative text-xs font-mono uppercase text-white group-hover:text-black transition-colors">
              Scroll
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
