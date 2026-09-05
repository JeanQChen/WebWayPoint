import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/Container";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "关于",
  description: "个人的思考、成长和实践。",
};

export default function AboutPage() {
  return (
    <Container className="py-16 sm:py-24">
      <header className="max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          ABOUT
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          About Waypoint
        </h1>
      </header>

      <div className="mt-10 max-w-2xl space-y-6 text-base leading-relaxed text-foreground">
        <p>个人的思考、成长和实践。</p>
        <p className="text-muted">
          这里记录正在做的项目、仍在变化的判断，以及一些真正帮助过我的东西。
        </p>
      </div>

      {siteConfig.githubUrl ? (
        <div className="mt-12">
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
          >
            GitHub
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      ) : null}
    </Container>
  );
}
