import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const DASH_X =
  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)";
const DASH_Y =
  "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)";

interface DashedRuleProps {
  axis?: "x" | "y";
  /** Extend the rule 100vw past both edges of its container. */
  bleed?: boolean;
  /** Draw outward from the column when its [data-reveal] ancestor comes into view. */
  draw?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/** The dashed construction line used across the sheet. */
export function DashedRule({
  axis = "x",
  bleed = false,
  draw = true,
  className,
  style,
}: DashedRuleProps) {
  const mask = axis === "x" ? DASH_X : DASH_Y;
  return (
    <div
      aria-hidden="true"
      className={twMerge(clsx(
        "absolute pointer-events-none border-black/30 dark:border-white/[0.15]",
        axis === "x" ? "h-0 border-b" : "w-0 border-r",
        axis === "x" && bleed && "left-[-100vw] right-[-100vw]",
        axis === "x" && draw && "rule-x",
        className
      ))}
      style={{ maskImage: mask, WebkitMaskImage: mask, ...style }}
    />
  );
}

type Corner = "tl" | "tr" | "bl" | "br";

const cornerClass: Record<Corner, string> = {
  tl: "top-0 -left-4 -translate-x-1/2 -translate-y-1/2",
  tr: "top-0 -right-4 translate-x-1/2 -translate-y-1/2",
  bl: "bottom-0 -left-4 -translate-x-1/2 translate-y-1/2",
  br: "bottom-0 -right-4 translate-x-1/2 translate-y-1/2",
};

interface RegDotProps {
  corner?: Corner;
  /** Ring that pings once when the section is revealed. */
  ping?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/** 2px registration dot where a rule meets a column guide. */
export function RegDot({ corner, ping = false, className, style }: RegDotProps) {
  return (
    <div
      aria-hidden="true"
      className={twMerge(clsx(
        "reg-dot absolute w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] pointer-events-none z-20",
        corner && cornerClass[corner],
        ping && "reg-ping",
        className
      ))}
      style={style}
    />
  );
}
