import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Doto } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ContourField } from "@/components/fx/backgrounds/contour-field";
import { SmoothScroll } from "@/components/fx/smooth-scroll";
import { ReticleCursor } from "@/components/fx/reticle-cursor";
import { FxBoot } from "@/components/fx/fx-boot";
import { FX_BOOT_SCRIPT } from "@/components/fx/boot-script";
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
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", sizes: "256x256", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
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
      <head>
        <script dangerouslySetInnerHTML={{ __html: FX_BOOT_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <FxBoot />
          <SmoothScroll />
          <ContourField />
          {children}
          <ReticleCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
