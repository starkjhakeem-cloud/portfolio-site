import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jhakeem Moultrie | Software Engineering Portfolio",
  description: "Explore web and mobile software projects by Jhakeem Moultrie, a software engineering student building with React, Next.js, TypeScript, and React Native.",
  openGraph: {
    title: "Jhakeem Moultrie | Software Engineering Portfolio",
    description: "Web and mobile applications, engineering projects, and technical skills.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
