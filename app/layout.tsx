import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CanvasBackground from "@/components/CanvasBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rajenthar Jeganathan — Software Engineer",
  description: "Building distributed systems at scale. Java · Kafka · Kubernetes · 6+ years at Rakuten, Singapore.",
  openGraph: {
    title: "Rajenthar Jeganathan — Software Engineer",
    description: "Building distributed systems at scale. Java · Kafka · Kubernetes · 6+ years at Rakuten, Singapore.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[var(--bg)]">
        <CanvasBackground />
        {children}
      </body>
    </html>
  );
}
