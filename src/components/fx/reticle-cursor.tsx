"use client";

import React, { useEffect, useRef } from "react";

const SNAP =
  'a[href], button:not(:disabled), [role="button"], [role="link"], [role="tab"], [role="option"], [data-cursor="snap"], summary, select, label[for]';
const NATIVE = 'input, textarea, [contenteditable="true"], iframe';
const PAD = 4;
const ARM = 8;

const pad4 = (n: number) => String(Math.max(0, Math.round(n))).padStart(4, "0");

/**
 * Drafting reticle. A hairline crosshair with a live page-coordinate readout;
 * over anything clickable it folds away and four ink brackets lock onto the
 * element with its size, like a selection in a design tool.
 */
export function ReticleCursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const crossRef = useRef<HTMLDivElement>(null);
  const bracketsRef = useRef<HTMLDivElement>(null);
  const readoutRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const root = rootRef.current;
    const cross = crossRef.current;
    const group = bracketsRef.current;
    const readout = readoutRef.current;
    const label = labelRef.current;
    if (!root || !cross || !group || !readout || !label) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const html = document.documentElement;
    html.classList.add("reticle-on");

    const corners = Array.from(group.children) as HTMLElement[];
    let x = -100;
    let y = -100;
    let snapEl: Element | null = null;
    let pressed = false;
    let needsHitTest = false;
    let bx = 0;
    let by = 0;
    let bw = 0;
    let bh = 0;
    let bo = 0;
    let raf = 0;
    let running = false;
    let idleTimer = 0;
    let lastLabel = "";

    const setLabel = (text: string) => {
      if (text !== lastLabel) {
        label.textContent = text;
        lastLabel = text;
      }
    };

    const resolve = (target: Element | null) => {
      if (!target || target.closest(NATIVE)) {
        root.classList.add("is-native");
        snapEl = null;
      } else {
        root.classList.remove("is-native");
        snapEl = target.closest(SNAP);
      }
      root.classList.toggle("is-snap", !!snapEl);
    };

    const frame = () => {
      if (needsHitTest) {
        needsHitTest = false;
        resolve(document.elementFromPoint(x, y));
      }
      if (snapEl && !snapEl.isConnected) resolve(null);

      let tx: number, ty: number, tw: number, th: number, to: number;
      let rect: DOMRect | null = null;
      if (snapEl) {
        rect = snapEl.getBoundingClientRect();
        const p = pressed ? 1 : PAD;
        tx = rect.left - p;
        ty = rect.top - p;
        tw = rect.width + p * 2;
        th = rect.height + p * 2;
        to = 1;
      } else {
        const s = pressed ? 10 : 16;
        tx = x - s / 2;
        ty = y - s / 2;
        tw = s;
        th = s;
        to = 0;
      }

      const k = reduce ? 1 : 0.3;
      bx += (tx - bx) * k;
      by += (ty - by) * k;
      bw += (tw - bw) * k;
      bh += (th - bh) * k;
      bo += (to - bo) * (reduce ? 1 : 0.25);

      cross.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      group.style.opacity = bo.toFixed(3);
      const r = bx + bw - ARM;
      const b = by + bh - ARM;
      corners[0].style.transform = `translate3d(${bx}px, ${by}px, 0)`;
      corners[1].style.transform = `translate3d(${r}px, ${by}px, 0)`;
      corners[2].style.transform = `translate3d(${bx}px, ${b}px, 0)`;
      corners[3].style.transform = `translate3d(${r}px, ${b}px, 0)`;

      if (rect) {
        setLabel(`${Math.round(rect.width)} × ${Math.round(rect.height)}`);
        readout.style.transform = `translate3d(${bx + bw / 2}px, ${by + bh + 6}px, 0)`;
      } else {
        setLabel(`x ${pad4(x)} · y ${pad4(y + window.scrollY)}`);
        readout.style.transform = `translate3d(${x + 14}px, ${y + 14}px, 0)`;
      }

      const settled =
        Math.abs(tx - bx) < 0.2 &&
        Math.abs(ty - by) < 0.2 &&
        Math.abs(tw - bw) < 0.2 &&
        Math.abs(th - bh) < 0.2 &&
        Math.abs(to - bo) < 0.01;

      if (settled) {
        running = false;
        return;
      }
      raf = requestAnimationFrame(frame);
    };

    const kick = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(frame);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") {
        root.classList.add("is-hidden");
        return;
      }
      const first = x < 0;
      x = e.clientX;
      y = e.clientY;
      if (first) {
        bx = x - 8;
        by = y - 8;
        bw = bh = 16;
      }
      root.classList.remove("is-hidden");
      root.classList.add("is-moving");
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => root.classList.remove("is-moving"), 900);
      resolve(e.target as Element | null);
      kick();
    };

    const onScroll = () => {
      if (x < 0) return;
      needsHitTest = true;
      kick();
    };

    const onDown = () => {
      pressed = true;
      root.classList.add("is-pressed");
      kick();
    };

    const onUp = () => {
      pressed = false;
      root.classList.remove("is-pressed");
      kick();
    };

    const onLeave = () => root.classList.add("is-hidden");

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("blur", onLeave);
    html.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(idleTimer);
      html.classList.remove("reticle-on");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("blur", onLeave);
      html.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const corner = "absolute left-0 top-0 h-2 w-2 border-ink will-change-transform";

  return (
    <div ref={rootRef} aria-hidden="true" className="reticle is-hidden pointer-events-none fixed inset-0 z-[9999]">
      <div ref={bracketsRef} className="absolute inset-0 opacity-0">
        <span className={`${corner} border-l-[1.5px] border-t-[1.5px]`} />
        <span className={`${corner} border-r-[1.5px] border-t-[1.5px]`} />
        <span className={`${corner} border-l-[1.5px] border-b-[1.5px]`} />
        <span className={`${corner} border-r-[1.5px] border-b-[1.5px]`} />
      </div>

      <div ref={crossRef} className="absolute left-0 top-0 will-change-transform">
        <div className="reticle-cross relative">
          <span className="reticle-arm absolute left-[-10px] top-[-0.5px] h-px w-[7px]" />
          <span className="reticle-arm absolute left-[3px] top-[-0.5px] h-px w-[7px]" />
          <span className="reticle-arm absolute left-[-0.5px] top-[-10px] h-[7px] w-px" />
          <span className="reticle-arm absolute left-[-0.5px] top-[3px] h-[7px] w-px" />
          <span className="reticle-dot absolute left-[-1px] top-[-1px] h-[2px] w-[2px]" />
        </div>
      </div>

      <div ref={readoutRef} className="absolute left-0 top-0 will-change-transform">
        <span
          ref={labelRef}
          className="reticle-readout block whitespace-nowrap font-mono text-[9px] leading-none tabular-nums"
        />
      </div>
    </div>
  );
}
