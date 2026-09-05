import Link from "next/link";
import type { Thought } from "@/lib/types";
import { thoughtStatusLabel } from "@/lib/utils";

/** Essay Index 行（§24）：编号 + 标题 + tags + 状态，不用 Card Grid */
export function ThoughtIndexItem({
  thought,
  index,
}: {
  thought: Thought;
  index: number;
}) {
  return (
    <article className="flex flex-col gap-3 border-t border-line py-7 sm:flex-row sm:items-baseline sm:gap-8">
      <span className="font-mono text-xs text-muted">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="flex-1">
        <h2 className="text-xl font-medium leading-snug tracking-tight text-foreground">
          <Link
            href={`/thoughts/${thought.slug}`}
            className="transition-colors hover:text-accent"
          >
            {thought.title}
          </Link>
        </h2>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
          {thought.tags.slice(0, 3).map((t) => t.toUpperCase()).join(" · ")}
        </p>
        <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
          {thoughtStatusLabel(thought.status)}
        </p>
      </div>
    </article>
  );
}
