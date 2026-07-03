import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScrollProvider from "@/components/ui/SmoothScrollProvider";
import Preloader from "@/components/ui/Preloader";

// Massive Structural Headlines
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Technical grids and counters
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono"
});

export const metadata: Metadata = {
  title: "Harshit Kudhial | Premium Bento UI",
  description: "Modern Bento Grid Portfolio of Harshit Kudhial built with Next.js, GSAP, and Tailwind v4.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceMono.variable} font-inter antialiased bg-[#050505] text-[#FAFAFA]`} suppressHydrationWarning>
        <div className="bg-glow"></div>
        <Preloader />
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
