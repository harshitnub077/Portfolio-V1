"use client";

import React, { useState, useEffect, useMemo } from "react";
import { fallbackGithubContributions } from "@/content/portfolio-data";

export function GithubGraph() {
  const [weeks, setWeeks] = useState(fallbackGithubContributions.weeks);
  const [months, setMonths] = useState(fallbackGithubContributions.months);
  const [totalContributions, setTotalContributions] = useState(
    fallbackGithubContributions.totalContributions
  );
  const [hoveredDay, setHoveredDay] = useState<{
    count: number;
    date: string;
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    // Optionally fetch fresh contributions via /api/github
    const query = `
      query {
        user(login: "harshitnub077") {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              months { name }
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
        if (cal) {
          setWeeks(cal.weeks);
          setMonths(cal.months);
          setTotalContributions(cal.totalContributions);
        }
      })
      .catch(() => {
        // Fallback already set!
      });
  }, []);

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

  const formatDate = (dateStr: string) => {
    return new Intl.DateTimeFormat("en", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(`${dateStr}T00:00:00`));
  };

  return (
    <div className="w-full flex flex-col py-2">
      <div className="flex items-center justify-between pb-3">
        <span className="text-[12px] text-zinc-500 dark:text-zinc-400">
          <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
            {totalContributions.toLocaleString()}
          </strong>{" "}
          contributions in the last year
        </span>
      </div>

      <div className="relative overflow-x-auto pb-2 scrollbar-none">
        <div className="min-w-[650px] flex flex-col gap-1.5">
          {/* Months label row */}
          <div className="flex text-[10px] text-zinc-400 dark:text-zinc-500 pl-4 h-4">
            {months.map((m, i) => (
              <span
                key={i}
                className="flex-1"
                style={{ minWidth: "48px" }}
              >
                {m.name.slice(0, 3)}
              </span>
            ))}
          </div>

          {/* Calendar Heatmap grid */}
          <div className="flex gap-[3px]">
            {weeks.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-[3px]">
                {/* Spacer cells at top for first week */}
                {wIdx === 0 &&
                  Array.from({ length: 7 - week.contributionDays.length }).map(
                    (_, a) => (
                      <div
                        key={`empty-top-${a}`}
                        className="w-[10px] h-[10px] rounded-[2px] bg-transparent"
                      />
                    )
                  )}
                {week.contributionDays.map((day) => {
                  const level = getLevel(day.contributionCount);
                  return (
                    <div
                      key={day.date}
                      aria-label={`${day.contributionCount} contributions on ${formatDate(
                        day.date
                      )}`}
                      className={`w-[10px] h-[10px] rounded-[2px] opacity-85 transition-[opacity,transform] hover:scale-125 hover:opacity-100 cursor-pointer ${colorLevels[level]}`}
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
                {/* Spacer cells at bottom for last week */}
                {wIdx !== 0 &&
                  week.contributionDays.length < 7 &&
                  Array.from({ length: 7 - week.contributionDays.length }).map(
                    (_, a) => (
                      <div
                        key={`empty-bottom-${a}`}
                        className="w-[10px] h-[10px] rounded-[2px] bg-transparent"
                      />
                    )
                  )}
              </div>
            ))}
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
                : `${hoveredDay.count} contribution${
                    hoveredDay.count > 1 ? "s" : ""
                  }`}
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
