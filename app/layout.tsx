import type { Metadata } from "next";
import { Inter_Tight, Fraunces, JetBrains_Mono } from "next/font/google";
import { resumeData } from "@/lib/data";
import "./globals.css";

const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: resumeData.meta.siteTitle,
  description: resumeData.meta.siteDescription,
  authors: [{ name: `${resumeData.identity.firstName} ${resumeData.identity.lastName}` }],
  openGraph: {
    title: resumeData.meta.siteTitle,
    description: resumeData.meta.siteDescription,
    type: "profile",
    locale: "fr_CH",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body className="font-sans text-ink bg-paper antialiased">{children}</body>
    </html>
  );
}
