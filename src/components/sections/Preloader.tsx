"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { site } from "@/content/site";

/** Counter from 00 to 100, then the curtain lifts and the page announces it is ready. */
export default function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const finish = () => {
      document.documentElement.dataset.loaded = "1";
      window.dispatchEvent(new Event("site:loaded"));
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.display = "none";
      finish();
      return;
    }
    document.documentElement.style.overflow = "hidden";
    window.__lenis?.stop();
    const state = { v: 0 };
    const tl = gsap.timeline();
    tl.to(state, {
      v: 100,
      duration: 1.9,
      ease: "power2.inOut",
      onUpdate: () => setN(Math.round(state.v)),
    })
      .to(el.querySelectorAll("[data-fade]"), { yPercent: -110, duration: 0.6, ease: "power3.in", stagger: 0.04 })
      .to(el, {
        clipPath: "inset(0 0 100% 0)",
        duration: 1.1,
        ease: "expo.inOut",
        onStart: () => {
          document.documentElement.style.overflow = "";
          window.__lenis?.start();
          finish();
        },
      })
      .set(el, { display: "none" });
    return () => {
      tl.kill();
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[95] flex flex-col justify-between bg-[var(--bg)] p-[var(--gutter)]"
      style={{ clipPath: "inset(0 0 0 0)" }}
      aria-hidden
    >
      <div className="flex justify-between overflow-hidden t-15">
        <span data-fade className="block">{site.name}®</span>
        <span data-fade className="block c-muted">/ {site.role} /</span>
      </div>
      <div className="flex items-end justify-between overflow-hidden">
        <span data-fade className="block t-15 c-muted">Calibrating orbit</span>
        <span data-fade className="block c-accent tabular-nums" style={{ fontSize: "clamp(96px,18vw,240px)", lineHeight: 0.8, letterSpacing: "-0.06em" }}>
          {String(n).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
