"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TEXT =
  "Engineering is the strategic, the intentional, and often invisible work of turning models into systems that hold up in production.";

/** Words light up from grey to white as the paragraph scrolls through. */
export default function Statement() {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-w]"),
        { opacity: 0.14 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.1,
          scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: true },
        },
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="gutter py-[14vh]">
      <p ref={ref} className="t-73 max-w-[1240px]" aria-label={TEXT}>
        <span className="inline-block w-[12vw]" aria-hidden />
        {TEXT.split(" ").map((w, i) => (
          <span key={i} data-w aria-hidden className="inline-block pr-[0.22em]">
            {w}
          </span>
        ))}
      </p>
    </section>
  );
}
