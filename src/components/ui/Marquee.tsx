"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  items: string[];
  className?: string;
  speed?: number; // px per second
  reverse?: boolean;
  sep?: string;
};

/** Infinite marquee whose speed and direction react to scroll velocity. */
export default function Marquee({ items, className, speed = 90, reverse, sep = "✦" }: Props) {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let x = 0;
    let dir = reverse ? 1 : -1;
    let boost = 0;
    const half = () => el.scrollWidth / 2;
    const st = ScrollTrigger.create({
      onUpdate: (self) => {
        const v = self.getVelocity();
        boost = Math.min(Math.abs(v) / 6, 900);
        dir = (v >= 0 ? -1 : 1) * (reverse ? -1 : 1);
      },
    });
    const tick = (_t: number, dt: number) => {
      boost *= 0.92;
      x += (dir * (speed + boost) * dt) / 1000;
      const w = half();
      if (x <= -w) x += w;
      if (x > 0) x -= w;
      el.style.transform = `translate3d(${x}px,0,0)`;
    };
    gsap.ticker.add(tick);
    return () => {
      gsap.ticker.remove(tick);
      st.kill();
    };
  }, [speed, reverse]);

  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center" aria-hidden={key === "b"}>
      {items.map((t, i) => (
        <span key={i} className="flex items-center">
          <span className="t-92 whitespace-nowrap">{t}</span>
          <span className="mx-[0.4em] inline-block opacity-60" style={{ fontSize: "clamp(28px,4.3vw,55px)" }}>{sep}</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={clsx("overflow-hidden", className)}>
      <div ref={track} className="marquee-track">
        {row("a")}
        {row("b")}
        {row("c")}
        {row("d")}
      </div>
    </div>
  );
}
