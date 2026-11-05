import fs from "node:fs";

const USERNAME = "harshitnub077";
const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;

async function fetchContributions() {
  console.log("Fetching live contributions from GitHub profile...");
  const res = await fetch(`https://github.com/users/${USERNAME}/contributions`, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    },
  });
  if (!res.ok) throw new Error(`Failed to fetch contributions: ${res.status}`);
  const html = await res.text();

  const tooltipMap = new Map();
  const tipRegex = /<tool-tip[^>]*for="([^"]+)"[^>]*>([^<]+)<\/tool-tip>/g;
  let tipMatch;
  while ((tipMatch = tipRegex.exec(html)) !== null) {
    tooltipMap.set(tipMatch[1], tipMatch[2]);
  }

  const tdRegex = /<td[^>]*data-date="(\d{4}-\d{2}-\d{2})"[^>]*id="([^"]+)"[^>]*>/g;
  const days = [];
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

  if (days.length === 0) throw new Error("No days parsed");

  days.sort((a, b) => a.date.localeCompare(b.date));

  const weeks = [];
  let currentWeek = [];
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

  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const months = [];
  const seenMonths = new Set();
  weeks.forEach((w) => {
    w.contributionDays.forEach((d) => {
      const m = MONTHS[Number(d.date.slice(5, 7)) - 1];
      if (d.date.endsWith("-01") && !seenMonths.has(m)) {
        months.push({ name: m });
        seenMonths.add(m);
      }
    });
  });

  return { totalContributions, months, weeks };
}

async function fetchPRs(type) {
  const q =
    type === "closed"
      ? `author:${USERNAME} type:pr is:closed is:unmerged`
      : `author:${USERNAME} type:pr is:${type}`;

  const headers = {
    "User-Agent": "Portfolio-Sync-Script",
    Accept: "application/vnd.github.v3+json",
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(`https://api.github.com/search/issues?q=${encodeURIComponent(q)}&per_page=100`, {
    headers,
  });
  if (!res.ok) throw new Error(`Failed to search PRs (${type}): ${res.status}`);
  const data = await res.json();

  return (data.items || []).map((item) => {
    const repoMatch = item.repository_url?.match(/repos\/([^/]+\/[^/]+)/);
    const nameWithOwner = repoMatch ? repoMatch[1] : "";
    let state = item.state ? item.state.toUpperCase() : "OPEN";
    if (item.pull_request?.merged_at) {
      state = "MERGED";
    }

    return {
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
    };
  });
}

async function main() {
  try {
    const contributions = await fetchContributions();
    console.log(`Contributions: ${contributions.totalContributions} total, ${contributions.weeks.length} weeks`);

    console.log("Fetching merged PRs...");
    const mergedPRs = await fetchPRs("merged");
    console.log(`Merged PRs: ${mergedPRs.length}`);

    console.log("Fetching open PRs...");
    const openPRs = await fetchPRs("open");
    console.log(`Open PRs: ${openPRs.length}`);

    console.log("Fetching closed PRs...");
    const closedPRs = await fetchPRs("closed");
    console.log(`Closed PRs: ${closedPRs.length}`);

    // Update src/content/portfolio-data.ts
    const portfolioDataPath = "src/content/portfolio-data.ts";
    const original = fs.readFileSync(portfolioDataPath, "utf8");
    const cutIndex = original.indexOf("export const fallbackGithubContributions = {");
    if (cutIndex === -1) {
      throw new Error("Could not find fallbackGithubContributions anchor in portfolio-data.ts");
    }
    const head = original.substring(0, cutIndex);

    const prs = { merged: mergedPRs, open: openPRs, closed: closedPRs };
    const newContent = `${head}export const fallbackGithubContributions = ${JSON.stringify(contributions, null, 2)};\n\nexport const fallbackGithubPRs = ${JSON.stringify(prs, null, 2)};\n`;

    fs.writeFileSync(portfolioDataPath, newContent, "utf8");
    console.log("Updated src/content/portfolio-data.ts successfully");

    // Calculate Kubescape & Zephyr specific merged counts
    const zephyrMerged = mergedPRs.filter((pr) => pr.repository?.nameWithOwner?.toLowerCase().includes("zephyr")).length;
    const kubescapeMerged = mergedPRs.filter((pr) => pr.repository?.nameWithOwner?.toLowerCase().includes("kubescape")).length;
    const totalOSS = zephyrMerged + kubescapeMerged;

    console.log(`OSS Stats - Zephyr: ${zephyrMerged}, Kubescape: ${kubescapeMerged}, Combined: ${totalOSS}`);

    // Update site.ts if numbers changed
    const sitePath = "src/content/site.ts";
    if (fs.existsSync(sitePath)) {
      let siteContent = fs.readFileSync(sitePath, "utf8");
      siteContent = siteContent.replace(/\d+ merged PRs — POSIX & kernel concurrency/g, `${zephyrMerged} merged PRs — POSIX & kernel concurrency`);
      siteContent = siteContent.replace(/\d+ merged PRs — SSRF hardening/g, `${kubescapeMerged} merged PRs — SSRF hardening`);
      fs.writeFileSync(sitePath, siteContent, "utf8");
      console.log("Synced src/content/site.ts");
    }

    console.log("All GitHub data synced successfully!");
  } catch (err) {
    console.error("Sync error:", err);
    process.exit(1);
  }
}

main();
