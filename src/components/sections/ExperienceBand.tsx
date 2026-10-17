"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience, site } from "@/content/site";

gsap.registerPlugin(ScrollTrigger);

/** Pinned section that scrolls sideways: portfolio stamp → experience → PR count. */
export default function ExperienceBand() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    const tr = track.current;
    if (!el || !tr) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      const dist = () => tr.scrollWidth - window.innerWidth;
      gsap.to(tr, {
        x: () => -dist(),
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: () => `+=${dist()}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section id="experience" ref={root} className="relative overflow-hidden md:h-[100svh]">
      <div
        ref={track}
        className="flex h-full flex-col gap-24 py-[14vh] md:w-max md:flex-row md:items-center md:gap-[12vw] md:py-0 md:pl-[var(--gutter)] md:pr-[10vw]"
      >
        {/* Stamp */}
        <div className="gutter shrink-0 md:px-0">
          <div className="t-15 c-muted flex gap-16">
            <span>{site.name.toUpperCase()}</span>
            <span>/{site.year}/</span>
          </div>
          <p className="c-accent mt-6" style={{ fontSize: "clamp(64px,13vw,200px)", lineHeight: 0.9, letterSpacing: "-0.06em" }}>
            Portfolio@26
          </p>
        </div>

        {/* Experience */}
        <div className="gutter shrink-0 md:px-0">
          <p className="t-92 c-accent">Mission log *</p>
          <div className="mt-12 grid grid-cols-1 gap-x-14 gap-y-10 sm:grid-cols-2 md:w-[min(1100px,80vw)]">
            {experience.map((x, i) => (
              <article key={x.org} className="border-t border-[var(--line)] pt-5">
                <p className="mono c-accent mb-3 text-[11px] uppercase tracking-[0.2em]">Mission {String(i + 1).padStart(2, "0")}</p>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="t-28">{x.org}</h3>
                  <span className="mono c-muted shrink-0 text-[12px]">{x.when}</span>
                </div>
                <p className="t-15 c-muted mt-1">{x.role}</p>
                <p className="t-18 c-75 mt-4 max-w-[44ch] leading-[1.3]">{x.line}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Count */}
        <div className="gutter shrink-0 md:px-0">
          <p className="c-accent md:whitespace-nowrap" style={{ fontSize: "clamp(56px,11vw,170px)", lineHeight: 0.9, letterSpacing: "-0.06em" }}>
            {site.firstName} ( . 30 PRs)
          </p>
          <p className="t-15 c-muted mt-6">Merged across CNCF Kubescape & Linux Foundation Zephyr RTOS</p>
        </div>
      </div>
    </section>
  );
}
