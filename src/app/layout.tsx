import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Doto } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Harshit Kudhial | AI/ML Engineer",
  description:
    "AI/ML Engineer specializing in LLMs, RAG, Agentic AI, MLOps, and Open Source. 30 merged PRs across CNCF Kubescape & Linux Foundation Zephyr RTOS.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "256x256" },
      { url: "/icon.png", sizes: "256x256" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Harshit Kudhial | AI/ML Engineer",
    description:
      "AI/ML Engineer specializing in LLMs, RAG, Agentic AI, MLOps, and Open Source.",
    url: "https://github.com/harshitnub077",
    siteName: "Harshit Kudhial",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshit Kudhial | AI/ML Engineer",
    description:
      "AI/ML Engineer specializing in LLMs, RAG, Agentic AI, MLOps, and Open Source.",
    creator: "@harshitnub077",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${doto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
