"use client";

import React, { useEffect, useRef } from "react";

type RevealTag = "div" | "section";

interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  as?: RevealTag;
  children: React.ReactNode;
}

/**
 * Marks a block as revealable. Children with `data-reveal-item` fade up, `.rule-x`
 * rules draw outward and `.reg-dot`s pop once the block enters the viewport.
 * Nothing is hidden unless `html.fx-ready` is set, so content survives a failed script.
 */
export function Reveal({ as = "div", children, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as;
  return (
    <Tag ref={ref as React.Ref<HTMLDivElement>} data-reveal="" {...rest}>
      {children}
    </Tag>
  );
}
