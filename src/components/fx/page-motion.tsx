"use client";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

/**
 * The page's choreography, driven by GSAP on Lenis's clock.
 *
 *  - Intro: the banner wipes open like a sheet being unrolled, the name rises
 *    letter by letter out of a mask, and the rest of the header settles in.
 *  - [data-split] headings rise out of a mask when they reach the viewport.
 *  - [data-scrub-words] text lights up word by word with scroll.
 *  - [data-clip] media wipes open from its centre.
 *  - [data-magnetic] controls lean toward the cursor.
 *  - Banner artwork drifts slower than the page.
 *
 * Elements marked [data-hero] / [data-split] are hidden by CSS before hydration
 * (only while html.fx-ready is set) and made visible here, so nothing flashes.
 */
export function PageMotion() {
  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reveal = (targets: gsap.TweenTarget) => gsap.set(targets, { visibility: "visible" });

    const heroEls = gsap.utils.toArray<HTMLElement>("[data-hero]");
    const splitEls = gsap.utils.toArray<HTMLElement>("[data-split]");

    if (reduce) {
      reveal([...heroEls, ...splitEls]);
      return;
    }

    const offs: (() => void)[] = [];
    const ctx = gsap.context(() => {
      const ease = "expo.out";

      // ---- Intro -------------------------------------------------------
      const q = (key: string) => gsap.utils.toArray<HTMLElement>(`[data-hero="${key}"]`);
      const banner = q("banner")[0];
      const name = q("name")[0];
      reveal(heroEls);

      const tl = gsap.timeline({ defaults: { ease }, delay: 0.1 });

      if (banner) {
        tl.fromTo(
          banner,
          { clipPath: "inset(0% 0% 100% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "expo.inOut", clearProps: "clipPath" },
          0
        ).from(banner.querySelectorAll("img"), { scale: 1.22, duration: 2.2 }, 0.15);
      }

      tl.from(q("avatar"), { scale: 0.86, autoAlpha: 0, filter: "blur(8px)", duration: 1.1, clearProps: "filter,transform" }, 0.55);

      if (name) {
        const split = SplitText.create(name, { type: "chars", mask: "chars" });
        tl.from(split.chars, { yPercent: 115, duration: 1.1, stagger: 0.028 }, 0.65);
      }

      tl.from(q("sub"), { y: 10, autoAlpha: 0, filter: "blur(6px)", duration: 0.9, clearProps: "filter" }, 0.85)
        // clearProps: a lingering transform would trap the ⌘K palette's fixed overlay
        .from(q("tools"), { y: -8, autoAlpha: 0, duration: 0.8, clearProps: "transform" }, 0.95)
        // Clear transform/opacity afterwards so the 3D flip-cover button re-rasterises
        .from(q("item"), { y: 18, autoAlpha: 0, duration: 1, stagger: 0.05, clearProps: "transform,opacity" }, 0.95);

      // ---- Banner parallax --------------------------------------------
      if (banner) {
        gsap.to(banner.querySelectorAll("img"), {
          yPercent: 14,
          ease: "none",
          scrollTrigger: { trigger: banner, start: "top top", end: "bottom top", scrub: true },
        });
      }

      // ---- Section headings ---------------------------------------------
      splitEls.forEach((el) => {
        const target = el.querySelector<HTMLElement>(".decode-text") ?? el;
        const split = SplitText.create(target, { type: "chars", mask: "chars" });
        const num = el.querySelector("[data-split-num]");
        reveal(el);
        const htl = gsap.timeline({
          defaults: { ease },
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
        htl.from(split.chars, { yPercent: 115, duration: 1, stagger: 0.018 });
        if (num) htl.from(num, { x: -8, autoAlpha: 0, duration: 0.8 }, 0.1);
      });

      // ---- Word-by-word scrub -------------------------------------------
      gsap.utils.toArray<HTMLElement>("[data-scrub-words]").forEach((el) => {
        const split = SplitText.create(el, { type: "words" });
        gsap.fromTo(
          split.words,
          { opacity: 0.14 },
          {
            opacity: 1,
            ease: "none",
            stagger: 0.1,
            // Ends once the quote is fully on screen, so it always completes, even at the page bottom.
            scrollTrigger: { trigger: el, start: "top 92%", end: "bottom 88%", scrub: true },
          }
        );
      });

      // ---- Media wipes ---------------------------------------------------
      gsap.utils.toArray<HTMLElement>("[data-clip]").forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(14% 10% 14% 10% round 12px)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 12px)",
            duration: 1.4,
            ease,
            clearProps: "clipPath",
            scrollTrigger: { trigger: el, start: "top 92%", once: true },
          }
        );
      });

      // ---- Magnetic controls --------------------------------------------
      if (fine) {
        gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((el) => {
          const strength = Number(el.dataset.magnetic) || 0.28;
          const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3" });
          const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3" });
          let rect: DOMRect | null = null;
          const enter = () => {
            rect = el.getBoundingClientRect();
          };
          const move = (e: PointerEvent) => {
            if (!rect) rect = el.getBoundingClientRect();
            xTo((e.clientX - (rect.left + rect.width / 2)) * strength);
            yTo((e.clientY - (rect.top + rect.height / 2)) * strength);
          };
          const leave = () => {
            rect = null;
            gsap.to(el, { x: 0, y: 0, duration: 1.1, ease: "expo.out", overwrite: true });
          };
          el.addEventListener("pointerenter", enter);
          el.addEventListener("pointermove", move);
          el.addEventListener("pointerleave", leave);
          offs.push(() => {
            el.removeEventListener("pointerenter", enter);
            el.removeEventListener("pointermove", move);
            el.removeEventListener("pointerleave", leave);
          });
        });
      }
    });

    // Keep trigger positions honest as lazy content (GitHub data, fonts) lands.
    let t = 0;
    const ro = new ResizeObserver(() => {
      window.clearTimeout(t);
      t = window.setTimeout(() => ScrollTrigger.refresh(), 200);
    });
    ro.observe(document.body);
    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => {
      window.clearTimeout(t);
      ro.disconnect();
      offs.forEach((off) => off());
      ctx.revert();
    };
  }, []);

  return null;
}
