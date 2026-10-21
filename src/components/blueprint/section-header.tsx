import React from "react";
import clsx from "clsx";
import { DashedRule, RegDot } from "@/components/blueprint/dashed-rule";
import { DecodeText } from "@/components/fx/decode-text";

interface SectionHeaderProps {
  /** Sheet number, shared with the index nav and the scroll ruler. */
  n: string;
  title: string;
  /** Draw a rule along the top edge as well as the bottom. */
  top?: boolean;
  className?: string;
}

export function SectionHeader({ n, title, top = false, className }: SectionHeaderProps) {
  return (
    <div data-decode-trigger="" className={clsx("py-2 relative", className)}>
      {top && (
        <>
          <DashedRule bleed className="top-0" />
          <RegDot corner="tl" />
          <RegDot corner="tr" />
        </>
      )}

      <h2 data-split="" className="flex items-baseline gap-2.5 text-[18px] font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
        <span data-split-num="" className="font-mono text-[11px] font-medium tabular-nums tracking-normal text-zinc-400 dark:text-zinc-500">
          {n}
        </span>
        <DecodeText text={title} />
      </h2>

      <DashedRule bleed className="bottom-0" />
      <RegDot corner="bl" ping />
      <RegDot corner="br" ping />
    </div>
  );
}
