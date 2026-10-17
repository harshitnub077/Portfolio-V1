"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import SplitReveal from "@/components/ui/SplitReveal";
import { orbits } from "@/content/site";

const Planet = dynamic(() => import("@/components/gl/Planet"), { ssr: false });
const LIGHT: [number, number, number] = [-1, 0.5, 0.9];

// Ring radii as a fraction of the stage, and angular speed (rad/s).
const RINGS = [
  { r: 0.27, speed: 0.22 },
  { r: 0.38, speed: -0.14 },
  { r: 0.49, speed: 0.09 },
];
// Vertical squash of the ellipses — rounder on narrow screens so chips have room.
const tiltFor = (w: number) => (w < 768 ? 0.95 : 0.32);

/** Skills as moons on three tilted orbits around a dark ringed planet. Pseudo-3D: depth drives scale, blur and stacking. */
export default function Orbit() {
  const stage = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const chips = Array.from(el.querySelectorAll<HTMLElement>("[data-chip]"));
    const paths = Array.from(el.querySelectorAll<HTMLElement>("[data-path]"));
    const meta = chips.map((c) => ({
      ring: Number(c.dataset.ring),
      phase: Number(c.dataset.phase),
    }));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let t = 0;
    let last = performance.now();
    let raf = 0;
    let visible = true;
    const io = new IntersectionObserver(([en]) => (visible = en.isIntersecting));
    io.observe(el);

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (!visible) return;
      if (!paused.current && !reduce) t += dt;
      const w = el.clientWidth;
      const h = el.clientHeight;
      const tilt = tiltFor(w);
      const size = Math.min(w, h / tilt) * (w < 768 ? 0.92 : 1);
      paths.forEach((p, i) => {
        p.style.width = `${RINGS[i].r * size * 2}px`;
        p.style.height = `${RINGS[i].r * size * 2 * tilt}px`;
      });
      chips.forEach((c, i) => {
        const { ring, phase } = meta[i];
        const R = RINGS[ring];
        const a = phase + t * R.speed;
        const x = Math.cos(a) * R.r * size;
        const y = Math.sin(a) * R.r * size * tilt;
        const z = Math.sin(a); // -1 back … 1 front
        const s = 0.72 + 0.28 * ((z + 1) / 2);
        c.style.transform = `translate(-50%,-50%) translate3d(${x}px, ${y}px, 0) scale(${s})`;
        c.style.opacity = String(0.35 + 0.65 * ((z + 1) / 2));
        c.style.zIndex = z > 0 ? "30" : "5";
        c.style.filter = z < -0.3 ? `blur(${(-z - 0.3) * 2.2}px)` : "none";
      });
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  const total = orbits.reduce((n, r) => n + r.length, 0);

  return (
    <section className="relative overflow-hidden py-[14vh]">
      <div className="gutter grid grid-cols-1 gap-6 md:grid-cols-12">
        <SplitReveal className="t-64 md:col-span-6" lines={["My tech", "universe"]} />
        <p className="t-15 c-muted md:col-span-4 md:col-start-9 md:self-end md:justify-self-end md:text-right">
          (Orbit® — {total} bodies)
          <br />
          Hover the system to hold its orbit.
        </p>
      </div>

      <div
        ref={stage}
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
        className="relative mx-auto mt-10 h-[100vw] w-full max-w-[1400px] md:h-[min(72vw,640px)]"
      >
        {/* orbit paths — sized in the animation loop so they always match the chips */}
        {RINGS.map((r, i) => (
          <span
            key={i}
            data-path={i}
            aria-hidden
            className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50%] border ${
              i === 1 ? "border-dashed border-white/10" : "border-white/[0.12]"
            }`}
          />
        ))}

        <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 aspect-square w-[min(60vw,560px)] -translate-x-1/2 -translate-y-1/2">
          <Planet kind="dark" ring light={LIGHT} atmosphere="#fb4617" distance={9} spin={0.04} tilt={0.3} className="h-full w-full" />
        </div>

        {orbits.map((ring, ri) =>
          ring.map((name, i) => (
            <span
              key={name}
              data-chip
              data-ring={ri}
              data-phase={(i / ring.length) * Math.PI * 2 + ri * 0.6}
              className={`orbit-chip rounded-full border px-2.5 py-1 text-[12px] md:px-3 md:py-1.5 md:text-[14px] transition-colors duration-300 hover:border-[var(--accent-solid)] hover:text-white ${
                ri === 0 ? "border-[var(--accent-solid)]/60 bg-[var(--accent-solid)]/15 text-white" : "border-white/15 bg-white/[0.04] c-75"
              }`}
            >
              {name}
            </span>
          )),
        )}
      </div>
    </section>
  );
}
