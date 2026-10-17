"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitReveal from "@/components/ui/SplitReveal";
import PillButton from "@/components/ui/PillButton";
import MissionClock from "@/components/ui/MissionClock";
import { coords, site } from "@/content/site";

gsap.registerPlugin(ScrollTrigger);
const Planet = dynamic(() => import("@/components/gl/Planet"), { ssr: false });

const MOON_LIGHT: [number, number, number] = [-1, 0.55, -0.2];
const RINGED_LIGHT: [number, number, number] = [-1, 0.3, 0.8];

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.set("[data-hero-fade]", { autoAlpha: 0, y: 16 });
      gsap.set("[data-hero-card]", { clipPath: "inset(100% 0 0 0)" });
      gsap.set("[data-moon]", { yPercent: 35, scale: 0.85, autoAlpha: 0 });
      gsap.set("[data-ringed]", { autoAlpha: 0, x: 80 });
      const play = () => {
        gsap.to("[data-moon]", { yPercent: 0, scale: 1, autoAlpha: 1, duration: 2.6, ease: "expo.out" });
        gsap.to("[data-ringed]", { autoAlpha: 1, x: 0, duration: 2.2, ease: "expo.out", delay: 0.6 });
        gsap.to("[data-hero-card]", { clipPath: "inset(0% 0 0 0)", duration: 1.4, ease: "expo.inOut", delay: 0.2 });
        gsap.to("[data-hero-fade]", { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.08, delay: 0.6 });
      };
      if (document.documentElement.dataset.loaded) play();
      else window.addEventListener("site:loaded", play, { once: true });

      // Leaving the hero: the moon sinks and grows, copy drifts away.
      const scrub = { trigger: el, start: "top top", end: "bottom top", scrub: true };
      gsap.to("[data-hero-content]", { yPercent: -18, opacity: 0.15, ease: "none", scrollTrigger: scrub });
      gsap.to("[data-moon-wrap]", { yPercent: 22, scale: 1.15, ease: "none", scrollTrigger: scrub });
      gsap.to("[data-ringed-wrap]", { yPercent: -60, xPercent: 20, ease: "none", scrollTrigger: scrub });

      // Ringed planet bobs in its orbit.
      gsap.to("[data-ringed-wrap]", { y: -18, duration: 4, ease: "sine.inOut", yoyo: true, repeat: -1 });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={root} className="relative h-[calc(100svh-92px)] min-h-[620px] overflow-hidden">
      {/* Giant moon rising from the lower right */}
      <div data-moon-wrap className="pointer-events-none absolute -bottom-[22%] -right-[62%] aspect-square w-[160vw] md:-bottom-[91%] md:-right-[19%] md:w-[97vw]">
        <div data-moon className="h-full w-full">
          <Planet kind="moon" followMouse light={MOON_LIGHT} atmosphere="#fb4617" distance={4.6} spin={0.012} tilt={0.25} className="h-full w-full" />
        </div>
      </div>
      {/* Small ringed dark planet */}
      <div data-ringed-wrap className="pointer-events-none absolute right-[2%] top-[8%] hidden aspect-square w-[min(30vw,420px)] md:block">
        <div data-ringed className="h-full w-full">
          <Planet kind="dark" ring light={RINGED_LIGHT} atmosphere="#ff7a45" distance={9} spin={0.05} tilt={0.4} className="h-full w-full" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[var(--bg)]" />
      {/* keeps the headline legible where the moon sits behind it on phones */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--bg)]/85 via-[var(--bg)]/40 to-transparent md:hidden" />

      <div data-hero-content className="gutter relative z-10 flex h-full flex-col justify-between pb-6 pt-[18vh] md:pt-[16vh]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-3">
            <div
              data-hero-card
              data-cursor="big"
              className="relative aspect-[3/2] w-[200px] overflow-hidden rounded-[4px] bg-[#111] ring-1 ring-white/10 md:w-full md:max-w-[276px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={site.heroImage} alt={`Portrait of ${site.name}`} className="h-full w-full object-cover grayscale" />
              <span className="mono absolute left-2 top-2 text-[10px] text-white/60">CAM-01 ● REC</span>
            </div>
            <p data-hero-fade className="mono c-muted mt-3 hidden text-[11px] md:block">
              LAT {coords.lat} — LON {coords.lon}
            </p>
          </div>
          <div className="md:col-span-8 md:col-start-4">
            <p data-hero-fade className="t-15 c-muted mb-4">(About me)</p>
            <SplitReveal
              as="h1"
              immediate
              delay={0.45}
              className="t-48"
              lines={[`I’m ${site.name},`, `an ${site.role}`, `based in ${site.location}.`]}
            />
            <p data-hero-fade className="t-15 c-75 mt-6 max-w-[420px]">
              {site.tagline}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 items-end gap-4 md:grid-cols-12">
          <div data-hero-fade className="flex flex-col gap-1 md:col-span-3">
            <span className="t-15 c-muted">/ {site.year} /</span>
            <MissionClock className="mono c-muted text-[11px]" />
          </div>
          <a data-hero-fade href="#works" className="t-15 c-muted hidden items-center gap-2 md:col-span-3 md:col-start-4 md:flex">
            Scroll down
            <span className="inline-block animate-bounce">↓</span>
          </a>
          <div data-hero-fade className="col-span-2 md:col-span-6 md:col-start-7 md:justify-self-end">
            <PillButton href={`mailto:${site.email}`} label="Start the project" />
          </div>
        </div>
      </div>
    </section>
  );
}
