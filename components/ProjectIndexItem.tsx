import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { firstSentence, projectStatusLabel } from "@/lib/utils";

/** Editorial Project Index 行（§11）：编号 + 标题 + 一句简介 + 状态，不用 Card */
export function ProjectIndexItem({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="flex flex-col gap-3 border-t border-line py-7 sm:flex-row sm:items-baseline sm:gap-8">
      <span className="font-mono text-xs text-muted">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="flex-1">
        <h2 className="text-xl font-medium tracking-tight text-foreground">
          <Link
            href={`/projects/${project.slug}`}
            className="transition-colors hover:text-accent"
          >
            {project.title}
          </Link>
          {project.titleEn ? (
            <span className="ml-3 font-display text-[13px] text-muted">
              {project.titleEn}
            </span>
          ) : null}
        </h2>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">
          {firstSentence(project.description)}
        </p>
        <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
          {projectStatusLabel(project.status)}
        </p>
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className="inline-flex shrink-0 items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
      >
        查看项目
        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </Link>
    </article>
  );
}
