"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  lines: string[];
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
  /** When true, plays immediately (after preloader) instead of on scroll. */
  immediate?: boolean;
};

/** Each line slides up out of a mask when it enters the viewport. */
export default function SplitReveal({ lines, as: Tag = "h2", className, delay = 0, immediate }: Props) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const inners = el.querySelectorAll(".line-inner");
    const ctx = gsap.context(() => {
      gsap.set(inners, { yPercent: 110, rotate: 2 });
      const play = () =>
        gsap.to(inners, { yPercent: 0, rotate: 0, duration: 1.2, ease: "expo.out", stagger: 0.08, delay });
      if (immediate) {
        const start = () => play();
        if (document.documentElement.dataset.loaded) start();
        else window.addEventListener("site:loaded", start, { once: true });
      } else {
        ScrollTrigger.create({ trigger: el, start: "top 88%", once: true, onEnter: play });
      }
    }, el);
    return () => ctx.revert();
  }, [delay, immediate]);

  return (
    <Tag ref={ref} className={clsx(className)} aria-label={lines.join(" ")}>
      {lines.map((l, i) => (
        <span key={i} className="line-mask" aria-hidden>
          <span className="line-inner">{l}</span>
        </span>
      ))}
    </Tag>
  );
}
