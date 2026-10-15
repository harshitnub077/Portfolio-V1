"use client";

import { useRef } from "react";
import clsx from "clsx";
import RollText from "./RollText";

type Props = { href: string; label: string; className?: string; tone?: "dark" | "light" };

/** Magnetic pill with letter roll and an arrow chip, like the reference "Start the project". */
export default function PillButton({ href, label, className, tone = "dark" }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-cursor="big"
      className={clsx(
        "roll-host group inline-flex items-center gap-3 rounded-full border py-[7px] pl-5 pr-[7px] t-14 uppercase transition-[transform,background-color,color] duration-500 ease-[cubic-bezier(.2,.8,.2,1)]",
        tone === "dark"
          ? "border-white/25 text-white hover:bg-white hover:text-black"
          : "border-black/20 text-black hover:bg-black hover:text-white",
        className,
      )}
    >
      <RollText text={label} />
      <span
        className={clsx(
          "grid h-8 w-8 place-items-center rounded-full transition-transform duration-500 group-hover:rotate-45",
          tone === "dark" ? "bg-[var(--accent-solid)] text-white" : "bg-black text-white group-hover:bg-[var(--accent-solid)]",
        )}
        aria-hidden
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 10L10 2M10 2H3.5M10 2V8.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </span>
    </a>
  );
}
