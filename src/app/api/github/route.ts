import { NextResponse } from "next/server";
import {
  fallbackGithubContributions,
  fallbackGithubPRs,
} from "@/content/portfolio-data";

export async function GET() {
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

    const token = process.env.GITHUB_TOKEN;

    if (token) {
      const ghRes = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "User-Agent": "Portfolio-App",
        },
        body: JSON.stringify({ query }),
      });

      if (ghRes.ok) {
        const data = await ghRes.json();
        return NextResponse.json(data);
      }
    }

    // Fallback: match contribution query vs PR queries
    if (query && query.includes("contributionsCollection")) {
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

    if (query && query.includes("is:merged")) {
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
