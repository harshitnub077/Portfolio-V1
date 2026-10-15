"use client";

import React, { useState, useEffect } from "react";

function Dot() {
  return (
    <div className="mx-0.5 sm:mx-1 flex flex-col gap-2 -translate-x-[2px] sm:-translate-x-[3px]">
      <div className="w-[2px] h-[2px] bg-zinc-400 dark:bg-zinc-500" />
      <div className="w-[2px] h-[2px] bg-zinc-400 dark:bg-zinc-500" />
    </div>
  );
}

export function CurrentTime() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) {
    return (
      <div className="flex items-center opacity-0">
        <div
          className="text-[20px] sm:text-[24px] tracking-[0.15em] text-zinc-400 dark:text-zinc-500"
          style={{ fontFamily: "var(--font-doto), monospace", fontWeight: 700 }}
        >
          00.00.00
        </div>
      </div>
    );
  }

  const hh = time.getHours().toString().padStart(2, "0");
  const mm = time.getMinutes().toString().padStart(2, "0");
  const ss = time.getSeconds().toString().padStart(2, "0");

  return (
    <div className="flex items-center h-[24px]">
      <div
        className="text-[20px] sm:text-[24px] tracking-[0.15em] flex items-center text-zinc-400 dark:text-zinc-500 h-full"
        style={{ fontFamily: "var(--font-doto), monospace", fontWeight: 700 }}
      >
        <span>{hh}</span>
        <Dot />
        <span>{mm}</span>
        <Dot />
        <span>{ss}</span>
      </div>
    </div>
  );
}
