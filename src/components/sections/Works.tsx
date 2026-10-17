"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitReveal from "@/components/ui/SplitReveal";
import { projects } from "@/content/site";

gsap.registerPlugin(ScrollTrigger);

export default function Works() {
  const root = useRef<HTMLElement>(null);
  const preview = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const el = root.current;
    const pv = preview.current;
    if (!el || !pv) return;
    const xTo = gsap.quickTo(pv, "x", { duration: 0.6, ease: "power3" });
    const yTo = gsap.quickTo(pv, "y", { duration: 0.6, ease: "power3" });
    const move = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };
    window.addEventListener("mousemove", move);

    const ctx = gsap.context(() => {
      // Never leave the floating preview hanging once the list scrolls away.
      ScrollTrigger.create({ trigger: el, start: "top bottom", end: "bottom top", onLeave: () => setActive(null), onLeaveBack: () => setActive(null) });
      gsap.from("[data-row]", {
        y: 30,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.06,
        scrollTrigger: { trigger: "[data-list]", start: "top 80%", once: true },
      });
      gsap.from("[data-rule]", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.06,
        scrollTrigger: { trigger: "[data-list]", start: "top 80%", once: true },
      });
    }, el);
    return () => {
      window.removeEventListener("mousemove", move);
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    const pv = preview.current;
    if (!pv) return;
    gsap.to(pv.firstElementChild, {
      scale: active === null ? 0 : 1,
      rotate: active === null ? -8 : 0,
      duration: 0.6,
      ease: "expo.out",
    });
    if (active !== null) {
      gsap.to(pv.querySelector("[data-strip]"), { yPercent: -100 * active, duration: 0.8, ease: "expo.out" });
    }
  }, [active]);

  return (
    <section id="works" ref={root} className="gutter relative pb-[18vh] pt-[16vh]">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        <SplitReveal className="t-64 md:col-span-6" lines={["My Recently", "Selected Works"]} />
        <p className="t-15 c-muted md:col-span-3 md:col-start-10 md:self-end md:justify-self-end">(OSS® — 30 PRs)</p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:mt-24 md:grid-cols-12">
        <p className="t-15 c-muted md:col-span-3">/From zero to one/</p>
        <ul data-list className="md:col-span-8 md:col-start-5" onMouseLeave={() => setActive(null)}>
          {projects.map((p, i) => (
            <li key={p.name} className="relative">
              <span data-rule className="absolute inset-x-0 top-0 h-px bg-[var(--line)]" />
              <a
                data-row
                href={p.href}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setActive(i)}
                className="group grid grid-cols-[52px_1fr_auto] items-baseline gap-x-6 py-[18px] t-18 md:grid-cols-[88px_1fr_auto]"
              >
                <span className={`transition-colors duration-300 ${active === i ? "text-white" : "c-55"}`}>
                  ({String(i + 1).padStart(2, "0")})
                </span>
                <span className="min-w-0">
                  <span
                    className={`inline-block transition-[color,transform] duration-500 ease-[cubic-bezier(.2,.8,.2,1)] ${
                      active === i ? "translate-x-3 text-white" : "c-55"
                    }`}
                  >
                    {p.name}
                    <span className="ml-2 inline-block text-[var(--accent-solid)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      ↗
                    </span>
                  </span>
                  <span className="t-14 c-55 mt-2 block max-w-[46ch] md:hidden">{p.blurb}</span>
                  <span
                    className={`t-14 hidden overflow-hidden transition-[max-height,opacity,margin] duration-500 md:block ${
                      active === i ? "mt-2 max-h-20 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <span className="c-75 block max-w-[52ch]">{p.blurb}</span>
                    <span className="mono c-muted mt-1 block text-[12px]">{p.stack}</span>
                  </span>
                </span>
                <span className={`transition-colors duration-300 ${active === i ? "text-white" : "c-55"}`}>{p.year}</span>
              </a>
            </li>
          ))}
          <li className="h-px bg-[var(--line)]" />
        </ul>
      </div>

      {/* Cursor-following preview: a vertical strip of every project image, slid to the active one. */}
      <div ref={preview} className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block" aria-hidden>
        <div className="-translate-x-1/2 -translate-y-1/2 scale-0 overflow-hidden rounded-[6px] bg-[#1c1c1c] shadow-2xl" style={{ width: 340, height: 230 }}>
          <div data-strip className="h-full">
            {projects.map((p) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={p.name} src={p.image} alt="" className="block h-full w-full object-cover" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
