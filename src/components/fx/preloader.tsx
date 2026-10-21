"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { siteProfile } from "@/content/portfolio-data";

declare global {
  interface Window {
    __introGate?: Promise<void>;
    __introRelease?: () => void;
  }
}

const BOOT_LOGS = [
  "SYS.BOOT // INITIALIZING NEURAL KERNEL",
  "TOPOLOGY // LINKING AGENTIC RAG GRAPHS",
  "VECTOR.CACHE // CALIBRATING QDRANT & PGVECTOR",
  "SYS.READY // DEPLOYING BLUEPRINT INTERFACE",
];

export function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shutterTopRef = useRef<HTMLDivElement>(null);
  const shutterBottomRef = useRef<HTMLDivElement>(null);
  const laserRef = useRef<HTMLDivElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const reticleRef = useRef<HTMLDivElement>(null);
  const logRef = useRef<HTMLSpanElement>(null);

  const [activeLog, setActiveLog] = useState(BOOT_LOGS[0]);

  useEffect(() => {
    const root = document.documentElement;
    const el = containerRef.current;
    if (!el || !root.classList.contains("preloading")) return;

    let released = false;
    const release = () => {
      if (released) return;
      released = true;
      root.classList.remove("preloading");
      window.__introRelease?.();
      window.dispatchEvent(new Event("hk:intro"));
    };

    const countEl = countRef.current;
    const barEl = barRef.current;
    const hudEl = hudRef.current;
    const topEl = shutterTopRef.current;
    const btmEl = shutterBottomRef.current;
    const laserEl = laserRef.current;
    const reticleEl = reticleRef.current;
    const progress = { v: 0 };

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    // Reticle constant micro-rotation
    const reticleSpin = gsap.to(reticleEl, {
      rotate: 360,
      duration: 16,
      repeat: -1,
      ease: "none",
    });

    // Animate progress 0 -> 100 with dynamic log changes
    tl.to(
      progress,
      {
        v: 100,
        duration: 1.35,
        ease: "power2.inOut",
        onUpdate: () => {
          const val = Math.round(progress.v);
          if (countEl) countEl.textContent = String(val).padStart(3, "0");
          if (barEl) barEl.style.transform = `scaleX(${progress.v / 100})`;

          if (val > 75) {
            setActiveLog(BOOT_LOGS[3]);
          } else if (val > 45) {
            setActiveLog(BOOT_LOGS[2]);
          } else if (val > 15) {
            setActiveLog(BOOT_LOGS[1]);
          }
        },
      },
      0.1
    );

    // Subtle pulse on laser line
    tl.fromTo(
      laserEl,
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 0.9, duration: 0.8, ease: "expo.out" },
      0.15
    );

    // Completion flash and shutter parting sequence
    tl.to(laserEl, {
      boxShadow: "0 0 24px rgba(0, 200, 255, 1)",
      backgroundColor: "#ffffff",
      opacity: 1,
      duration: 0.15,
      ease: "power1.in",
    }, "+=0.05");

    // Fade and scale HUD slightly as doors open
    tl.to(hudEl, {
      scale: 0.96,
      autoAlpha: 0,
      duration: 0.4,
      ease: "power2.in",
    }, "-=0.05");

    // Split shutter parting: top curtain slides up, bottom slides down
    tl.to(topEl, {
      yPercent: -100,
      duration: 0.85,
      ease: "expo.inOut",
    }, "-=0.2");

    tl.to(btmEl, {
      yPercent: 100,
      duration: 0.85,
      ease: "expo.inOut",
    }, "<");

    tl.to(laserEl, {
      opacity: 0,
      scaleY: 0,
      duration: 0.35,
      ease: "power2.out",
    }, "<+=0.1");

    // Release the page entrance gate slightly before the curtains finish
    tl.call(release, [], "-=0.45");

    // Remove preloader from render tree
    tl.set(el, { display: "none" });

    return () => {
      reticleSpin.kill();
      tl.kill();
    };
  }, []);

  const letters = Array.from(siteProfile.name);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="preloader fixed inset-0 z-[300] overflow-hidden"
    >
      {/* Top Architectural Shutter */}
      <div
        ref={shutterTopRef}
        className="absolute inset-x-0 top-0 h-1/2 bg-white dark:bg-[#08080a] border-b border-black/10 dark:border-white/[0.08]"
      >
        {/* Architectural grid rules on the shutter */}
        <div className="absolute inset-x-0 bottom-8 h-px bg-black/[0.04] dark:bg-white/[0.04]" />
        <div className="border-dashed-v absolute inset-y-0 left-[30%] hidden w-0 border-r border-black/10 dark:border-white/[0.08] md:block" />
        <div className="border-dashed-v absolute inset-y-0 right-[30%] hidden w-0 border-r border-black/10 dark:border-white/[0.08] md:block" />
      </div>

      {/* Bottom Architectural Shutter */}
      <div
        ref={shutterBottomRef}
        className="absolute inset-x-0 bottom-0 h-1/2 bg-white dark:bg-[#08080a] border-t border-black/10 dark:border-white/[0.08]"
      >
        <div className="absolute inset-x-0 top-8 h-px bg-black/[0.04] dark:bg-white/[0.04]" />
        <div className="border-dashed-v absolute inset-y-0 left-[30%] hidden w-0 border-r border-black/10 dark:border-white/[0.08] md:block" />
        <div className="border-dashed-v absolute inset-y-0 right-[30%] hidden w-0 border-r border-black/10 dark:border-white/[0.08] md:block" />
      </div>

      {/* Center Laser Divider */}
      <div
        ref={laserRef}
        className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-cyan-500/80 dark:bg-cyan-400 z-[302] shadow-[0_0_12px_rgba(0,200,255,0.7)] pointer-events-none"
      />

      {/* Telemetry & Branding HUD */}
      <div
        ref={hudRef}
        className="relative z-[305] flex h-full w-full flex-col items-center justify-between p-6 sm:p-10 pointer-events-none select-none"
      >
        {/* Top Header Telemetry */}
        <div className="flex w-full items-center justify-between text-[11px] font-mono tracking-[0.2em] text-zinc-400 dark:text-zinc-500 uppercase">
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-500 animate-ping" />
            <span>SYS.ID // HK-AI-2026</span>
          </div>
          <div className="hidden sm:block">
            <span>COORDS // {siteProfile.coords || "28.61° N · 77.20° E"}</span>
          </div>
          <div>
            <span>SPEC: MLOPS · RAG</span>
          </div>
        </div>

        {/* Centerpiece: Reticle + Monogram + Name + Counter */}
        <div className="flex flex-col items-center justify-center my-auto">
          {/* Orbital Reticle Monogram */}
          <div className="relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 mb-6">
            {/* Outer Rotating Dashed Ring */}
            <div
              ref={reticleRef}
              className="absolute inset-0 rounded-full border border-dashed border-black/25 dark:border-cyan-400/30"
            />
            {/* Inner Precision Ticks */}
            <div className="absolute inset-2 rounded-full border border-black/15 dark:border-white/10" />
            <div className="absolute top-0 w-1 h-2 bg-black/40 dark:bg-cyan-400 -translate-y-1/2" />
            <div className="absolute bottom-0 w-1 h-2 bg-black/40 dark:bg-cyan-400 translate-y-1/2" />
            <div className="absolute left-0 h-1 w-2 bg-black/40 dark:bg-cyan-400 -translate-x-1/2" />
            <div className="absolute right-0 h-1 w-2 bg-black/40 dark:bg-cyan-400 translate-x-1/2" />

            {/* Central HK Glyph */}
            <div className="flex items-center justify-center text-[22px] sm:text-[24px] font-mono font-bold tracking-wider text-zinc-900 dark:text-zinc-100">
              <span className="text-cyan-600 dark:text-cyan-400">H</span>
              <span>K</span>
            </div>
          </div>

          {/* Name Display */}
          <div className="flex items-center justify-center gap-1 overflow-hidden">
            <h2 className="text-[20px] sm:text-[26px] font-bold tracking-[0.2em] uppercase text-zinc-900 dark:text-zinc-100">
              {letters.map((ch, i) => (
                <span
                  key={i}
                  className="inline-block transition-transform duration-300"
                >
                  {ch}
                </span>
              ))}
            </h2>
          </div>

          <p className="mt-1.5 text-[11px] sm:text-[12px] font-mono uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            AI/ML Engineer · Distributed Systems
          </p>

          {/* Large Dot-Matrix Counter */}
          <div className="mt-6 flex items-baseline gap-1">
            <span
              ref={countRef}
              className="text-[44px] sm:text-[54px] leading-none tracking-[0.06em] text-zinc-900 dark:text-zinc-50 tabular-nums"
              style={{ fontFamily: "var(--font-doto), monospace", fontWeight: 700 }}
            >
              000
            </span>
            <span
              className="text-[18px] sm:text-[22px] font-mono text-cyan-600 dark:text-cyan-400 font-bold"
            >
              %
            </span>
          </div>

          {/* Precision Loading Track */}
          <div className="relative mt-4 w-60 sm:w-80 h-[2.5px] rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
            <div
              ref={barRef}
              className="absolute inset-0 origin-left bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 shadow-[0_0_12px_rgba(0,200,255,0.7)]"
              style={{ transform: "scaleX(0)" }}
            />
          </div>

          {/* Real-time Telemetry Log */}
          <div className="mt-4 flex items-center gap-2">
            <span className="inline-block h-1 w-1 bg-cyan-500 dark:bg-cyan-400 rounded-full" />
            <span
              ref={logRef}
              className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400 tabular-nums transition-all duration-200"
            >
              {activeLog}
            </span>
          </div>
        </div>

        {/* Bottom Status Telemetry */}
        <div className="flex w-full items-center justify-between text-[10px] font-mono tracking-[0.18em] text-zinc-400 dark:text-zinc-500 uppercase">
          <span>[ 01 // CALIBRATING ]</span>
          <span className="hidden sm:inline-block">PORTFOLIO V1 · ENGINE 2026</span>
          <span>[ RELEASE: AUTO ]</span>
        </div>
      </div>
    </div>
  );
}
