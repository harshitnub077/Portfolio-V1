"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { values } from "@/content/site";

gsap.registerPlugin(ScrollTrigger);
const Eclipse = dynamic(() => import("@/components/gl/Eclipse"), { ssr: false });

const PLACES = [
  "md:left-[var(--gutter)] md:top-[22%] md:text-left",
  "md:right-[var(--gutter)] md:top-[44%] md:text-right",
  "md:left-1/2 md:bottom-[14%] md:-translate-x-1/2 md:text-center",
];

/** Pinned total solar eclipse — the moon crosses the sun as you scroll, principles appear at totality. */
export default function Values() {
  const root = useRef<HTMLElement>(null);
  const progress = useRef(0.08);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "+=180%",
          scrub: 1,
          pin: true,
          onUpdate: (self) => (progress.current = 0.08 + self.progress * 0.84),
        },
      });
      el.querySelectorAll<HTMLElement>("[data-v]").forEach((w, i) => {
        tl.fromTo(
          w,
          { opacity: 0, y: 40, filter: "blur(12px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", ease: "power2.out", duration: 0.5 },
          0.35 + i * 0.12,
        );
      });
      tl.fromTo("[data-phase]", { opacity: 0 }, { opacity: 1, duration: 0.2 }, 0.42).to("[data-phase]", { opacity: 0, duration: 0.2 }, 0.7);
      tl.to({}, { duration: 0.3 });
    });
    mm.add("(prefers-reduced-motion: reduce)", () => {
      progress.current = 0.5;
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={root} className="relative h-[100svh] overflow-hidden">
      <Eclipse progressRef={progress} className="absolute inset-0" />

      <div className="gutter relative z-10 flex h-full flex-col items-center justify-center gap-2 md:block">
        {values.map((v, i) => (
          <p key={v.word} data-v className={`t-64 md:absolute ${PLACES[i]}`}>
            {v.word} <span className="c-accent align-super text-[0.45em]">{v.mark}</span>
          </p>
        ))}
      </div>

      <p data-phase className="mono pointer-events-none absolute left-1/2 top-[12%] -translate-x-1/2 text-[11px] uppercase tracking-[0.3em] text-white/70 opacity-0">
        ● Totality
      </p>
      <span className="t-15 c-muted absolute bottom-6 left-[var(--gutter)]">(Principles)</span>
      <span className="t-15 c-muted absolute bottom-6 right-[var(--gutter)]">/ Total eclipse — how I work /</span>
    </section>
  );
}
