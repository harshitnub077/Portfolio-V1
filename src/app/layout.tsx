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
  title: "Harshit Kudhial | V7 Swiss Kinetic Blueprint",
  description: "Awwwards winning structural grid portfolio of Harshit Kudhial built with GSAP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Removed dark mode class to force Pure White background
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceMono.variable} font-inter antialiased bg-white text-black`} suppressHydrationWarning>
        <Preloader />
        <SmoothScrollProvider>
          {/* CustomCursor manages the sharp square crosshair */}
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
