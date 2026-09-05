import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();
  const githubUrl = siteConfig.githubUrl;

  return (
    <footer className="border-t border-line py-12">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-[15px] font-medium tracking-tight text-foreground">
              {siteConfig.name}
            </p>
            <p className="mt-1.5 text-[13px] text-muted">
              个人的思考、成长和实践。
            </p>
          </div>

          <nav
            aria-label="页脚导航"
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted"
          >
            <Link href="/projects" className="transition-colors hover:text-foreground">
              AI产品实践
            </Link>
            <Link href="/thoughts" className="transition-colors hover:text-foreground">
              我的思考
            </Link>
            <Link href="/resources" className="transition-colors hover:text-foreground">
              好物共享
            </Link>
            <Link href="/about" className="transition-colors hover:text-foreground">
              关于
            </Link>
            {githubUrl ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
              >
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ) : null}
          </nav>
        </div>

        <p className="mt-10 border-t border-line pt-6 text-xs text-muted">
          © {year} {siteConfig.name}
        </p>
      </Container>
    </footer>
  );
}
