"use client";

import { useEffect } from "react";

/** Tells the boot script (see boot-script.ts) that the app hydrated. */
export function FxBoot() {
  useEffect(() => {
    (window as Window & { __fxBooted?: boolean }).__fxBooted = true;
  }, []);
  return null;
}
