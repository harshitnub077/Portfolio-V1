import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { PROJECTS } from "../../constants";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const container = containerRef.current;

      if (track && container) {
        // Calculate scroll amount: total width - viewport width
        const scrollAmount = track.scrollWidth - window.innerWidth + 100; // Buffer

        gsap.to(track, {
          x: -scrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: `+=${scrollAmount}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="works" className="relative h-screen bg-dark-100 overflow-hidden flex flex-col justify-center">
      {/* Title with Standard Padding */}
      <div className="container px-6 md:px-12 mx-auto z-20 mb-12 mix-blend-difference">
        <h2 className="text-white font-display text-4xl md:text-6xl uppercase tracking-widest leading-tight">
          Selected Works <span className="text-accent-flow text-2xl align-top">({PROJECTS.length})</span>
        </h2>
      </div>

      {/* Horizontal Track - Aligned to left container edge initially */}
      <div ref={trackRef} className="flex h-[60vh] md:h-[70vh] items-center pl-6 md:pl-12 gap-8 md:gap-16 w-max">
        {PROJECTS.map((project, index) => (
          <div
            key={project.name}
            className="relative w-[85vw] md:w-[60vw] h-full flex-shrink-0 group"
          >
            {/* Image Container */}
            <a href={project.url} target="_blank" rel="noreferrer" className="block h-full w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
              <Image
                src={project.image}
                alt={project.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-700 ease-out group-hover:scale-105"
                placeholder={project.blurImage ? "blur" : "empty"}
                blurDataURL={project.blurImage}
              />

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl md:text-5xl font-heading text-white mb-2 uppercase">
                  {project.name}
                </h3>
                <p className="text-gray-300 font-light max-w-lg">
                  {project.description}
                </p>
                <div className="mt-4 flex gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs border border-white/30 px-2 py-1 rounded-full text-white/70 uppercase tracking-wider">{t}</span>
                  ))}
                </div>
              </div>
            </a>

            {/* Number */}
            <div className="absolute -top-16 -left-8 text-[8vw] font-display font-bold text-white/5 pointer-events-none select-none">
              0{index + 1}
            </div>
          </div>
        ))}

        {/* End Spacer */}
        <div className="w-[20vw]" />
      </div>
    </section>
  );
};

export default Showcase;
