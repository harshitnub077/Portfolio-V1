import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text reveal effect (simulated with lines)
      gsap.from(".reveal-text", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom bottom",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen bg-neutral-900 flex items-center py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          {/* Left: Headline */}
          <div className="reveal-text">
            <h2 className="text-4xl md:text-7xl font-display font-medium leading-tight text-white mb-8">
              Forging digital<br />
              <span className="text-gray-500">experiences</span> with<br />
              precision.
            </h2>
            <div className="w-24 h-1 bg-accent-flow mt-8" />
          </div>

          {/* Right: Details */}
          <div className="flex flex-col justify-end space-y-8">
            <p className="reveal-text text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              I am Harshit Kudhial, a creative developer sitting at the intersection of design and engineering.
              Currently honing my craft at <span className="text-white">Newton School of Technology</span>,
              focusing on <span className="text-white">CS & AI</span>.
            </p>

            <p className="reveal-text text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              My philosophy is simple: technology should feel invisible, yet magical.
              I specialize in building immersive web systems that prioritize motion, interaction, and aesthetics.
            </p>

            <div className="reveal-text grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                <span className="block text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">Capabilities</span>
                <ul className="text-white space-y-1 font-heading">
                  <li>Front-end Architecture</li>
                  <li>Creative Development</li>
                  <li>AI Integration</li>
                  <li>Motion Design</li>
                </ul>
              </div>
              <div>
                <span className="block text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">Stack</span>
                <ul className="text-white space-y-1 font-heading">
                  <li>Next.js / React</li>
                  <li>GSAP / WebGL</li>
                  <li>Tailwind CSS</li>
                  <li>TypeScript</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
