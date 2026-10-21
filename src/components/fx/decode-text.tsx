"use client";

import React, { useEffect, useRef } from "react";
import clsx from "clsx";

const GLYPHS = "ABCDEFHKLMNPRSTUVXYZ0123456789#*+<>/";
const DURATION = 380;

interface DecodeTextProps {
  text: string;
  className?: string;
}

/**
 * On hover of the nearest link, button or [data-decode-trigger] (or itself), the
 * letters scramble and settle left to right. The real text stays in the DOM for
 * layout and assistive tech; the scramble is an aria-hidden overlay.
 */
export function DecodeText({ text, className }: DecodeTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const overlayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const overlay = overlayRef.current;
    if (!el || !overlay) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const trigger =
      (el.parentElement?.closest("a, button, [data-decode-trigger]") as HTMLElement | null) ?? el;
    let raf = 0;

    const run = () => {
      cancelAnimationFrame(raf);
      const start = performance.now();
      el.dataset.decoding = "";
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / DURATION);
        const settled = Math.floor(t * text.length);
        let out = "";
        for (let i = 0; i < text.length; i++) {
          const ch = text[i];
          out += i < settled || ch === " " ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0];
        }
        overlay.textContent = out;
        if (t < 1) raf = requestAnimationFrame(tick);
        else delete el.dataset.decoding;
      };
      raf = requestAnimationFrame(tick);
    };

    trigger.addEventListener("pointerenter", run);
    return () => {
      cancelAnimationFrame(raf);
      trigger.removeEventListener("pointerenter", run);
    };
  }, [text]);

  return (
    <span ref={ref} className={clsx("decode relative inline-block", className)}>
      <span className="decode-text">{text}</span>
      <span
        ref={overlayRef}
        aria-hidden="true"
        className="decode-overlay absolute inset-0 whitespace-nowrap overflow-hidden"
      />
    </span>
  );
}
