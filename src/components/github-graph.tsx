"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { fallbackGithubContributions } from "@/content/portfolio-data";

type Day = { contributionCount: number; date: string };
type Week = { contributionDays: Day[] };

/** Golden-angle hue per day: every cell gets its own colour, neighbours never match. */
const dayHue = (index: number) => (index * 137.508) % 360;

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const pad = (n: number) => String(n).padStart(2, "0");
const isoDay = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

/**
 * Re-shape any contribution calendar to "this year so far": 1 January to today,
 * grouped into Sunday-first weeks, with each month label pinned to the week it
 * starts in.
 */
function yearToDate(weeks: Week[], end: string) {
  const now = new Date(`${end}T00:00:00`);
  const start = `${now.getFullYear()}-01-01`;
  const counts = new Map<string, number>();
  weeks.forEach((w) => w.contributionDays.forEach((d) => counts.set(d.date, d.contributionCount)));

  const out: Week[] = [];
  let current: Day[] = [];
  const cursor = new Date(now.getFullYear(), 0, 1);
  while (isoDay(cursor) <= end) {
    const date = isoDay(cursor);
    if (cursor.getDay() === 0 && current.length) {
      out.push({ contributionDays: current });
      current = [];
    }
    current.push({ date, contributionCount: counts.get(date) ?? 0 });
    cursor.setDate(cursor.getDate() + 1);
  }
  if (current.length) out.push({ contributionDays: current });

  const labels: { name: string; week: number }[] = [];
  out.forEach((w, i) =>
    w.contributionDays.forEach((d) => {
      if (d.date.endsWith("-01")) labels.push({ name: MONTHS[Number(d.date.slice(5, 7)) - 1], week: i });
    })
  );

  const total = out.reduce((sum, w) => sum + w.contributionDays.reduce((s, d) => s + d.contributionCount, 0), 0);
  return { weeks: out, labels, total, start };
}

export function GithubGraph() {
  const [source, setSource] = useState<Week[]>(fallbackGithubContributions.weeks);
  const [hoveredDay, setHoveredDay] = useState<{
    count: number;
    date: string;
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    // Fresh data for this calendar year, when the API route has a token.
    const year = new Date().getFullYear();
    const query = `
      query {
        user(login: "harshitnub077") {
          contributionsCollection(from: "${year}-01-01T00:00:00Z", to: "${new Date().toISOString()}") {
            contributionCalendar {
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
    `;

    fetch("/api/github", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then((json) => {
        const cal = json?.data?.user?.contributionsCollection?.contributionCalendar;
        if (cal?.weeks?.length) setSource(cal.weeks);
      })
      .catch(() => {
        // Fallback already set.
      });
  }, []);

  // "Today" is only known in the browser; until then end at the data's last day,
  // so the pre-rendered HTML and the first client render match exactly.
  const [today, setToday] = useState<string | null>(null);
  useEffect(() => setToday(isoDay(new Date())), []);
  const lastDataDay = useMemo(() => {
    const days = source.flatMap((w) => w.contributionDays.map((d) => d.date)).sort();
    return days[days.length - 1] ?? "2026-01-01";
  }, [source]);
  const end = today ?? lastDataDay;
  const { weeks, labels, total } = useMemo(() => yearToDate(source, end), [source, end]);

  // On narrow screens the calendar scrolls sideways: open it at the latest days.
  const scrollerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = scrollerRef.current;
    if (el) el.scrollLeft = el.scrollWidth;
  }, [weeks]);
  const year = Number(end.slice(0, 4));
  const endMonth = MONTHS[Number(end.slice(5, 7)) - 1];

  const colorLevels = useMemo(
    () => [
      "bg-zinc-100 dark:bg-zinc-800",
      "bg-zinc-300 dark:bg-zinc-600",
      "bg-zinc-500 dark:bg-zinc-500",
      "bg-zinc-700 dark:bg-zinc-300",
      "bg-zinc-950 dark:bg-zinc-100",
    ],
    []
  );

  const getLevel = (count: number) => {
    if (count === 0) return 0;
    if (count <= 2) return 1;
    if (count <= 5) return 2;
    if (count <= 10) return 3;
    return 4;
  };

  const formatDate = (dateStr: string) =>
    new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(
      new Date(`${dateStr}T00:00:00`)
    );

  const columns = { gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))` };

  return (
    <div className="w-full flex flex-col py-2">
      <div className="flex items-center justify-between pb-3">
        <span className="text-[12px] text-zinc-500 dark:text-zinc-400">
          <strong className="font-semibold text-zinc-800 dark:text-zinc-200">{total.toLocaleString()}</strong>{" "}
          contributions in {year}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-400 dark:text-zinc-500">
          Jan – {endMonth} {year}
        </span>
      </div>

      <div ref={scrollerRef} className="relative overflow-x-auto pb-2 scrollbar-none">
        <div className="min-w-[440px] flex flex-col gap-1.5">
          {/* Month labels, pinned to the week each month begins */}
          <div className="grid h-4 text-[10px] text-zinc-400 dark:text-zinc-500" style={columns}>
            {labels.map((m) => (
              <span key={m.name} className="whitespace-nowrap" style={{ gridColumnStart: m.week + 1 }}>
                {m.name}
              </span>
            ))}
          </div>

          {/* Calendar: one column per week, Sunday at the top; it stretches to fill the column */}
          <div className="grid grid-flow-col grid-rows-7 gap-[3px]" style={columns}>
            {weeks.map((week, wIdx) => {
              const first = new Date(`${week.contributionDays[0].date}T00:00:00`).getDay();
              return (
                <React.Fragment key={wIdx}>
                  {wIdx === 0 &&
                    Array.from({ length: first }).map((_, a) => (
                      <div key={`pad-${a}`} className="aspect-square" aria-hidden="true" />
                    ))}
                  {week.contributionDays.map((day) => {
                    const level = getLevel(day.contributionCount);
                    return (
                      <div
                        key={day.date}
                        style={{ "--h": dayHue(wIdx * 7 + new Date(`${day.date}T00:00:00`).getDay()) } as React.CSSProperties}
                        aria-label={`${day.contributionCount} contributions on ${formatDate(day.date)}`}
                        className={`gh-cell aspect-square w-full rounded-[2px] opacity-85 cursor-pointer ${colorLevels[level]}`}
                        onMouseEnter={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setHoveredDay({
                            count: day.contributionCount,
                            date: day.date,
                            x: rect.left + rect.width / 2,
                            y: rect.top,
                          });
                        }}
                        onMouseLeave={() => setHoveredDay(null)}
                      />
                    );
                  })}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Floating Tooltip */}
        {hoveredDay && (
          <div
            className="fixed z-50 pointer-events-none -translate-x-1/2 -translate-y-full px-2 py-1 rounded bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-[10px] shadow-lg whitespace-nowrap mb-1"
            style={{ left: hoveredDay.x, top: hoveredDay.y - 6 }}
          >
            <strong>
              {hoveredDay.count === 0
                ? "No contributions"
                : `${hoveredDay.count} contribution${hoveredDay.count > 1 ? "s" : ""}`}
            </strong>{" "}
            on {formatDate(hoveredDay.date)}
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-end gap-1.5 text-[10px] text-zinc-400 dark:text-zinc-500 pt-2">
        <span>Less</span>
        {colorLevels.map((cls, i) => (
          <div key={i} className={`w-[9px] h-[9px] rounded-[2px] ${cls}`} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}
