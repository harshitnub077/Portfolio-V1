import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Harshit Kudhial | Digital Alchemy",
  description: "Creative Developer & ML Engineer.",
};

export const viewport = {
  themeColor: "#000000",
};

import GlobalCanvas from "@/components/v2/scene/GlobalCanvas";
import SmoothScroll from "@/components/v2/layout/SmoothScroll";
import Dock from "@/components/v2/ui/Dock";

// ... existing code ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${spaceGrotesk.variable} antialiased bg-black text-white`}
      >
        <GlobalCanvas />
        <Dock />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
