import { ArrowUpRight, ExternalLink, FileText } from "lucide-react";
import { GitHubIcon } from "./icons";
import type { ProjectLinks } from "@/lib/types";

interface ExternalLinkItem {
  key: string;
  label: string;
  href: string;
  icon: React.ReactNode;
}

function buildItems(links?: ProjectLinks): ExternalLinkItem[] {
  if (!links) return [];
  const items: ExternalLinkItem[] = [];
  if (links.github) {
    items.push({
      key: "github",
      label: "GitHub",
      href: links.github,
      icon: <GitHubIcon className="h-4 w-4" />,
    });
  }
  if (links.demo) {
    items.push({
      key: "demo",
      label: "Demo",
      href: links.demo,
      icon: <ExternalLink className="h-4 w-4" aria-hidden="true" />,
    });
  }
  if (links.document) {
    items.push({
      key: "document",
      label: "项目文档",
      href: links.document,
      icon: <FileText className="h-4 w-4" aria-hidden="true" />,
    });
  }
  return items;
}

/**
 * 外部链接（§45 / §29）：有 URL 才渲染，全部为空时整个区域不渲染。
 * 使用 Text Link + Arrow，不做按钮式边框。
 */
export function ExternalLinks({ links }: { links?: ProjectLinks }) {
  const items = buildItems(links);
  if (items.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2">
      {items.map((item) => (
        <a
          key={item.key}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-foreground transition-colors hover:text-accent"
        >
          {item.icon}
          {item.label}
          <ArrowUpRight className="h-3.5 w-3.5 text-muted" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
