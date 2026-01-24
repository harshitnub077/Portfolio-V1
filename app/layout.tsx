import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Cursor from "@/components/layout/Cursor";
import Preloader from "@/components/layout/Preloader";
import Noise from "@/components/layout/Noise";
import Vignette from "@/components/layout/Vignette";

const inter = Inter({
  variable: "--font-heading",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harshit Kudhial | Portfolio",
  description: "2nd Year Undergraduate at Newton School of Technology. AI & Full Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${mono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <Preloader />
        <Cursor />
        <Noise />
        <Vignette />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
