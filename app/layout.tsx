import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Waypoint | Financial AI Product Portfolio",
    template: "%s | Waypoint",
  },
  description:
    "金融 AI 产品实践、项目复盘与研究记录。关注 RAG、Agent Workflow、Evaluation、Evidence 与金融 AI 产品设计。",
  openGraph: {
    title: "Waypoint | Financial AI Product Portfolio",
    description:
      "金融 AI 产品实践、项目复盘与研究记录。关注 RAG、Agent Workflow、Evaluation、Evidence 与金融 AI 产品设计。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="zh-CN"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
