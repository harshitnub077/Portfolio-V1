"use client";

import { useEffect, useState } from "react";
import { coords } from "@/content/site";

/** Live local time in Delhi, ticking like mission telemetry. */
export default function MissionClock({ className }: { className?: string }) {
  const [now, setNow] = useState<string>("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: coords.tz,
    });
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className={className}>IST {now || "--:--:--"}</span>;
}
