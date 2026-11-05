import React from "react";
import clsx from "clsx";

interface DecodeTextProps {
  text: string;
  className?: string;
}

export function DecodeText({ text, className }: DecodeTextProps) {
  return (
    <span className={clsx("decode-text inline-block", className)}>
      {text}
    </span>
  );
}
