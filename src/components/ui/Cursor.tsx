"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/** Difference-blend dot that grows over anything marked data-cursor="big" or links. */
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(hover: none)").matches) return;
    const xTo = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3" });
    const move = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      const t = e.target;
      el.classList.toggle("is-big", t instanceof Element && !!t.closest('[data-cursor="big"]'));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <div ref={ref} className="cursor" aria-hidden />;
}
