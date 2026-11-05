import { NextResponse } from "next/server";
import {
  fallbackGithubContributions,
  fallbackGithubPRs,
} from "@/content/portfolio-data";

export const dynamic = "force-dynamic";

const USERNAME = "harshitnub077";

/**
 * Primary contributions provider: parse GitHub profile public contributions page directly.
 * Matches GitHub's public web profile exactly (user timezone, total count, 53 weeks).
 */
async function fetchPublicContributions(username: string) {
  try {
    const res = await fetch(`https://github.com/users/${username}/contributions`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      next: { revalidate: 1800 },
    });
    if (!res.ok) throw new Error(`GitHub HTML fetch status: ${res.status}`);
    const html = await res.text();

    const tooltipMap = new Map<string, string>();
    const tipRegex = /<tool-tip[^>]*for="([^"]+)"[^>]*>([^<]+)<\/tool-tip>/g;
    let tipMatch;
    while ((tipMatch = tipRegex.exec(html)) !== null) {
      tooltipMap.set(tipMatch[1], tipMatch[2]);
    }

    const tdRegex = /<td[^>]*data-date="(\d{4}-\d{2}-\d{2})"[^>]*id="([^"]+)"[^>]*>/g;
    const days: { date: string; contributionCount: number }[] = [];
    let match;
    while ((match = tdRegex.exec(html)) !== null) {
      const date = match[1];
      const id = match[2];
      const tip = tooltipMap.get(id) || "";
      let count = 0;
      const countMatch = tip.match(/^([0-9,]+)\s+contribution/);
      if (countMatch) {
        count = parseInt(countMatch[1].replace(/,/g, ""), 10);
      }
      days.push({ date, contributionCount: count });
    }

    if (days.length === 0) throw new Error("No contribution days parsed from HTML");

    days.sort((a, b) => a.date.localeCompare(b.date));

    // Group days into weeks starting on Sunday to match GitHub GraphQL structure
    const weeks: { contributionDays: { date: string; contributionCount: number }[] }[] = [];
    let currentWeek: { date: string; contributionCount: number }[] = [];

    for (const day of days) {
      const dayOfWeek = new Date(`${day.date}T00:00:00Z`).getUTCDay();
      if (dayOfWeek === 0 && currentWeek.length > 0) {
        weeks.push({ contributionDays: currentWeek });
        currentWeek = [];
      }
      currentWeek.push(day);
    }
    if (currentWeek.length > 0) {
      weeks.push({ contributionDays: currentWeek });
    }

    const totalContributions = days.reduce((sum, d) => sum + d.contributionCount, 0);

    return { totalContributions, weeks };
  } catch (err) {
    console.warn("fetchPublicContributions failed, falling back to Jogruber:", err);
    return fetchJogruberContributions(username);
  }
}

/**
 * Fallback provider 2: public contributions API.
 */
async function fetchJogruberContributions(username: string) {
  try {
    const year = new Date().getFullYear();
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`, {
      next: { revalidate: 1800 },
    });
    if (!res.ok) throw new Error(`Jogruber fetch status: ${res.status}`);
    const data = await res.json();
    const days = (data.contributions || []).map((d: { date: string; count: number }) => ({
      date: d.date,
      contributionCount: d.count,
    }));
    days.sort((a: { date: string }, b: { date: string }) => a.date.localeCompare(b.date));

    const weeks: { contributionDays: { date: string; contributionCount: number }[] }[] = [];
    let currentWeek: { date: string; contributionCount: number }[] = [];

    for (const day of days) {
      const dayOfWeek = new Date(`${day.date}T00:00:00Z`).getUTCDay();
      if (dayOfWeek === 0 && currentWeek.length > 0) {
        weeks.push({ contributionDays: currentWeek });
        currentWeek = [];
      }
      currentWeek.push(day);
    }
    if (currentWeek.length > 0) {
      weeks.push({ contributionDays: currentWeek });
    }

    const totalContributions =
      data.total?.[year] ??
      days.reduce((sum: number, d: { contributionCount: number }) => sum + d.contributionCount, 0);

    return { totalContributions, weeks };
  } catch (err) {
    console.error("fetchJogruberContributions failed:", err);
    return null;
  }
}

/**
 * Fallback provider: public GitHub Search REST API for Pull Requests.
 */
async function fetchPublicPRs(type: "merged" | "open" | "closed", token?: string) {
  try {
    const q =
      type === "closed"
        ? `author:${USERNAME} type:pr is:closed is:unmerged`
        : `author:${USERNAME} type:pr is:${type}`;

    const headers: Record<string, string> = {
      "User-Agent": "Portfolio-App",
      Accept: "application/vnd.github.v3+json",
    };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const res = await fetch(`https://api.github.com/search/issues?q=${encodeURIComponent(q)}&per_page=100`, {
      headers,
      next: { revalidate: 1800 },
    });

    if (!res.ok) throw new Error(`PR Search REST status: ${res.status}`);
    const data = await res.json();
    const edges = (data.items || []).map((item: {
      node_id: string;
      title: string;
      html_url: string;
      repository_url?: string;
      state?: string;
      created_at: string;
      pull_request?: { merged_at?: string | null };
      closed_at?: string | null;
    }) => {
      const repoMatch = item.repository_url?.match(/repos\/([^/]+\/[^/]+)/);
      const nameWithOwner = repoMatch ? repoMatch[1] : "";
      let state = item.state ? item.state.toUpperCase() : "OPEN";
      if (item.pull_request?.merged_at) {
        state = "MERGED";
      }

      return {
        node: {
          id: item.node_id,
          title: item.title,
          url: item.html_url,
          repository: {
            nameWithOwner,
          },
          state,
          createdAt: item.created_at,
          mergedAt: item.pull_request?.merged_at || null,
          closedAt: item.closed_at || null,
        },
      };
    });

    return { edges, pageInfo: { hasNextPage: false, endCursor: null } };
  } catch (err) {
    console.error(`fetchPublicPRs (${type}) failed:`, err);
    return null;
  }
}

export async function GET() {
  const liveCal = await fetchPublicContributions(USERNAME);
  if (liveCal && liveCal.weeks && liveCal.weeks.length > 0) {
    return NextResponse.json({
      status: "ok",
      data: {
        user: {
          contributionsCollection: {
            contributionCalendar: liveCal,
          },
        },
      },
    });
  }

  return NextResponse.json({
    status: "ok",
    data: {
      user: {
        contributionsCollection: {
          contributionCalendar: fallbackGithubContributions,
        },
      },
    },
  });
}

export async function POST(req: Request) {
  try {
    const { query } = await req.json();
    const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;

    // 1. Contributions query: fetch public contribution calendar to match GitHub profile exactly (1,640 contributions, 53 weeks)
    if (query && query.includes("contributionsCollection")) {
      const liveCal = await fetchPublicContributions(USERNAME);
      if (liveCal && liveCal.weeks && liveCal.weeks.length > 0) {
        return NextResponse.json({
          data: {
            user: {
              contributionsCollection: {
                contributionCalendar: liveCal,
              },
            },
          },
        });
      }

      // If public HTML parsing failed, try GraphQL if token is available
      if (token) {
        try {
          const ghRes = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
              "User-Agent": "Portfolio-App",
            },
            body: JSON.stringify({ query }),
            next: { revalidate: 1800 },
          });

          if (ghRes.ok) {
            const data = await ghRes.json();
            if (data && data.data && !data.errors) {
              return NextResponse.json(data);
            }
          }
        } catch (e) {
          console.warn("GitHub GraphQL fallback error:", e);
        }
      }

      return NextResponse.json({
        data: {
          user: {
            contributionsCollection: {
              contributionCalendar: fallbackGithubContributions,
            },
          },
        },
      });
    }

    // 2. PR Queries (merged, open, closed): use GraphQL if token present, else public search REST API
    if (token) {
      try {
        const ghRes = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            "User-Agent": "Portfolio-App",
          },
          body: JSON.stringify({ query }),
          next: { revalidate: 1800 },
        });

        if (ghRes.ok) {
          const data = await ghRes.json();
          if (data && data.data && !data.errors) {
            return NextResponse.json(data);
          }
        }
      } catch (e) {
        console.warn("GitHub GraphQL PR error, using REST fallback:", e);
      }
    }

    if (query && query.includes("is:merged")) {
      const livePRs = await fetchPublicPRs("merged", token);
      if (livePRs && livePRs.edges && livePRs.edges.length > 0) {
        return NextResponse.json({ data: { search: livePRs } });
      }
      return NextResponse.json({
        data: {
          search: {
            edges: fallbackGithubPRs.merged.map((pr) => ({ node: pr })),
            pageInfo: { hasNextPage: false, endCursor: null },
          },
        },
      });
    }

    if (query && query.includes("is:open")) {
      const livePRs = await fetchPublicPRs("open", token);
      if (livePRs && livePRs.edges && livePRs.edges.length > 0) {
        return NextResponse.json({ data: { search: livePRs } });
      }
      return NextResponse.json({
        data: {
          search: {
            edges: fallbackGithubPRs.open.map((pr) => ({ node: pr })),
            pageInfo: { hasNextPage: false, endCursor: null },
          },
        },
      });
    }

    if (query && query.includes("is:closed")) {
      const livePRs = await fetchPublicPRs("closed", token);
      if (livePRs && livePRs.edges && livePRs.edges.length > 0) {
        return NextResponse.json({ data: { search: livePRs } });
      }
      return NextResponse.json({
        data: {
          search: {
            edges: fallbackGithubPRs.closed.map((pr) => ({ node: pr })),
            pageInfo: { hasNextPage: false, endCursor: null },
          },
        },
      });
    }

    return NextResponse.json({
      data: {
        search: {
          edges: [],
          pageInfo: { hasNextPage: false, endCursor: null },
        },
      },
    });
  } catch (error) {
    console.error("API /api/github error:", error);
    return NextResponse.json(
      { error: "Failed to process GitHub query" },
      { status: 500 }
    );
  }
}
