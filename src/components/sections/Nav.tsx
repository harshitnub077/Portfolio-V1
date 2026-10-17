"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import RollText from "@/components/ui/RollText";
import { nav, site } from "@/content/site";

export default function Nav() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.set(el, { yPercent: -120 });
    const show = () => gsap.to(el, { yPercent: 0, duration: 1, ease: "expo.out", delay: 0.3 });
    if (document.documentElement.dataset.loaded) show();
    else window.addEventListener("site:loaded", show, { once: true });

    // Hide on scroll down, reveal on scroll up.
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - last) < 6) return;
      gsap.to(el, { yPercent: y > last && y > 200 ? -120 : 0, duration: 0.6, ease: "power3.out", overwrite: true });
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header ref={ref} className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
      <nav className="gutter grid grid-cols-[1fr_auto] items-center py-[18px] text-white md:grid-cols-12">
        <a href="#home" aria-label={`${site.name} — home`} className="flex items-center gap-2 md:col-span-3" data-cursor="big">
          <span className="grid h-[30px] w-[30px] place-items-center rounded-[7px] bg-[var(--accent-solid)] text-[11px] font-semibold tracking-tight text-white">
            {site.initials}
          </span>
        </a>
        <ul className="hidden items-center gap-0 md:col-span-6 md:col-start-4 md:grid md:grid-cols-3">
          {nav.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="roll-host inline-flex items-start gap-1 t-15">
                <RollText text={l.label} />
                {l.mark && <span className="text-[9px] leading-none c-muted">{l.mark}</span>}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="roll-host justify-self-end t-15 md:col-span-3">
          <RollText text="Let's talk" />
        </a>
      </nav>
    </header>
  );
}
