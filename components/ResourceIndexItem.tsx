import { ArrowUpRight } from "lucide-react";
import type { Resource } from "@/lib/types";

/** Curated List 行（§25）：类别 + 标题 + 为什么值得看 + tags，不用 Card Grid */
export function ResourceIndexItem({
  resource,
  index,
}: {
  resource: Resource;
  index: number;
}) {
  return (
    <article className="flex flex-col gap-3 border-t border-line py-7 sm:flex-row sm:items-baseline sm:gap-8">
      <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
        {resource.category} / {String(index + 1).padStart(2, "0")}
      </span>

      <div className="flex-1">
        <h2 className="text-xl font-medium tracking-tight text-foreground">
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            {resource.name}
          </a>
        </h2>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">
          {resource.why}
        </p>
        <p className="mt-2 text-[13px] text-muted">
          {resource.tags.slice(0, 3).join(" · ")}
        </p>
      </div>

      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={resource.name}
        className="inline-flex shrink-0 items-center text-muted transition-colors hover:text-accent"
      >
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </article>
  );
}
