import React from "react";
import { DashedRule, RegDot } from "@/components/blueprint/dashed-rule";

const crossings: React.CSSProperties[] = [
  { top: "22vh", left: "30%", transform: "translate(-50%, -50%)" },
  { top: "22vh", right: "30%", transform: "translate(50%, -50%)" },
  { top: "calc(22vh + 112px)", left: "30%", transform: "translate(-50%, -50%)" },
  { top: "calc(22vh + 112px)", right: "30%", transform: "translate(50%, -50%)" },
];

/**
 * The sheet's construction lines: two column guides, two header rules and the
 * dots where they cross. They draft themselves in once on page load.
 */
export function BlueprintGuides() {
  return (
    <>
      <DashedRule axis="y" draw={false} className="guide-y top-0 bottom-0 left-[30%] hidden md:block" />
      <DashedRule axis="y" draw={false} className="guide-y top-0 bottom-0 right-[30%] hidden md:block" />

      <DashedRule draw={false} className="guide-x left-0 right-0 top-[22vh]" />
      <DashedRule draw={false} className="guide-x left-0 right-0 top-[calc(22vh+112px)]" />

      {crossings.map((style, i) => (
        <RegDot
          key={i}
          ping
          className="guide-dot z-10 hidden md:block bg-black/50 dark:bg-white/[0.25]"
          style={style}
        />
      ))}
    </>
  );
}
