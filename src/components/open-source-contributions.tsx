"use client";

import React, { useState, useEffect } from "react";
import { GitPullRequest, GitMerge, XCircle } from "lucide-react";
import { fallbackGithubPRs } from "@/content/portfolio-data";

type TabState = "merged" | "open" | "closed";

interface PullRequestNode {
  id: string;
  title: string;
  url: string;
  repository: {
    nameWithOwner: string;
  };
  state: string;
  createdAt: string;
  mergedAt?: string | null;
  closedAt?: string | null;
}

export function OpenSourceContributions() {
  const [activeTab, setActiveTab] = useState<TabState>("merged");
  const [prs, setPrs] = useState<Record<TabState, PullRequestNode[]>>({
    merged: fallbackGithubPRs.merged as PullRequestNode[],
    open: fallbackGithubPRs.open as PullRequestNode[],
    closed: fallbackGithubPRs.closed as PullRequestNode[],
  });
  const [displayCount, setDisplayCount] = useState(10);

  useEffect(() => {
    const fetchPRs = async (tab: TabState, query: string) => {
      try {
        const res = await fetch("/api/github", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query }),
        });
        const json = await res.json();
        const edges = json?.data?.search?.edges;
        if (edges && edges.length > 0) {
          const list = edges.map((e: { node: PullRequestNode }) => e.node);
          setPrs((prev) => ({ ...prev, [tab]: list }));
        }
      } catch {
        // Fallback remains
      }
    };

    fetchPRs(
      "merged",
      'query { search(query: "author:harshitnub077 type:pr is:merged", type: ISSUE, first: 100) { edges { node { ... on PullRequest { id title url repository { nameWithOwner } state createdAt mergedAt closedAt } } } } }'
    );
    fetchPRs(
      "open",
      'query { search(query: "author:harshitnub077 type:pr is:open", type: ISSUE, first: 100) { edges { node { ... on PullRequest { id title url repository { nameWithOwner } state createdAt mergedAt closedAt } } } } }'
    );
    fetchPRs(
      "closed",
      'query { search(query: "author:harshitnub077 type:pr is:closed is:unmerged", type: ISSUE, first: 100) { edges { node { ... on PullRequest { id title url repository { nameWithOwner } state createdAt mergedAt closedAt } } } } }'
    );
  }, []);

  const currentList = prs[activeTab] || [];
  const visibleList = currentList.slice(0, displayCount);

  const formatPRDate = (dateStr?: string) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat("en", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  return (
    <div className="w-full flex flex-col">
      {/* Tabs */}
      <div className="flex items-center gap-1.5 py-3 border-b border-black/10 dark:border-white/10">
        <button
          onClick={() => {
            setActiveTab("merged");
            setDisplayCount(10);
          }}
          className={`px-3 py-1.5 rounded-[6px] text-[12px] font-medium flex items-center gap-2 transition-colors cursor-pointer ${
            activeTab === "merged"
              ? "bg-zinc-100 dark:bg-zinc-800 text-purple-600 dark:text-purple-400 font-semibold"
              : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
          }`}
        >
          <GitMerge className="w-3.5 h-3.5" />
          <span>Merged</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-zinc-200/60 dark:bg-zinc-700/60 text-zinc-600 dark:text-zinc-300">
            {prs.merged.length}
          </span>
        </button>

        <button
          onClick={() => {
            setActiveTab("open");
            setDisplayCount(10);
          }}
          className={`px-3 py-1.5 rounded-[6px] text-[12px] font-medium flex items-center gap-2 transition-colors cursor-pointer ${
            activeTab === "open"
              ? "bg-zinc-100 dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400 font-semibold"
              : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
          }`}
        >
          <GitPullRequest className="w-3.5 h-3.5" />
          <span>Open</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-zinc-200/60 dark:bg-zinc-700/60 text-zinc-600 dark:text-zinc-300">
            {prs.open.length}
          </span>
        </button>

        <button
          onClick={() => {
            setActiveTab("closed");
            setDisplayCount(10);
          }}
          className={`px-3 py-1.5 rounded-[6px] text-[12px] font-medium flex items-center gap-2 transition-colors cursor-pointer ${
            activeTab === "closed"
              ? "bg-zinc-100 dark:bg-zinc-800 text-rose-600 dark:text-rose-400 font-semibold"
              : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
          }`}
        >
          <XCircle className="w-3.5 h-3.5" />
          <span>Closed</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-zinc-200/60 dark:bg-zinc-700/60 text-zinc-600 dark:text-zinc-300">
            {prs.closed.length}
          </span>
        </button>
      </div>

      {/* PR Items List */}
      <div className="flex flex-col divide-y divide-black/5 dark:divide-white/5">
        {visibleList.map((pr) => {
          const date = pr.mergedAt || pr.closedAt || pr.createdAt;
          return (
            <a
              key={pr.id}
              href={pr.url}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-2 -mx-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 rounded-md transition-colors group cursor-pointer"
            >
              <div className="flex items-start gap-2.5 min-w-0">
                <div className="mt-0.5 shrink-0">
                  {activeTab === "merged" ? (
                    <GitMerge className="w-4 h-4 text-purple-500" />
                  ) : activeTab === "open" ? (
                    <GitPullRequest className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <XCircle className="w-4 h-4 text-rose-500" />
                  )}
                </div>

                <div className="flex flex-col min-w-0">
                  <span className="text-[13px] font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-ink transition-colors line-clamp-1">
                    {pr.title}
                  </span>
                  <span className="text-[11px] text-zinc-400 dark:text-zinc-500 font-mono">
                    {pr.repository.nameWithOwner}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 pl-6 sm:pl-0">
                <span className="text-[11px] text-zinc-400 dark:text-zinc-500">
                  {formatPRDate(date)}
                </span>
                <span className="text-zinc-400 group-hover:text-ink transition-[color,translate] duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </div>
            </a>
          );
        })}
      </div>

      {/* Show more button */}
      {currentList.length > displayCount && (
        <div className="flex justify-center pt-4">
          <button
            onClick={() => setDisplayCount((prev) => prev + 15)}
            className="px-4 py-1.5 rounded-[6px] border border-black/10 dark:border-white/10 text-[12px] font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
          >
            Show more contributions ({currentList.length - displayCount} remaining)
          </button>
        </div>
      )}
    </div>
  );
}
