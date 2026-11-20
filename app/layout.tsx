import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { profile } from "@/app/data/portfolio";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/geist-latin.woff2",
  weight: "100 900",
  variable: "--font-geist-sans",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/geist-mono-latin.woff2",
  weight: "100 900",
  variable: "--font-geist-mono",
  display: "swap",
});
const title = "Jhakeem Moultrie | Software Engineering Portfolio";
const description =
  "Software engineering student and U.S. Army veteran building thoughtful web and mobile applications with React, Next.js, TypeScript, and React Native. Explore projects, skills, and résumé.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  applicationName: "Jhakeem Moultrie — Portfolio",
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  alternates: { canonical: "/" },
  keywords: [
    "Jhakeem Moultrie",
    "software engineering",
    "React",
    "Next.js",
    "TypeScript",
    "React Native",
    "software engineering internships",
    "developer portfolio",
  ],
  openGraph: {
    title,
    description,
    url: profile.siteUrl,
    siteName: "Jhakeem Moultrie",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Jhakeem Moultrie — Thoughtful code. Real-world impact.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/social-preview.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#080b10",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
