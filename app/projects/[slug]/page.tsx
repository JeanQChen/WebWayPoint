import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { EvolutionPath } from "@/components/EvolutionPath";
import { ExternalLinks } from "@/components/ExternalLinks";
import { getProjectBySlug, getProjects } from "@/lib/content";
import { getProjectMdxComponent } from "@/lib/mdx";
import { firstSentence, projectStatusLabel } from "@/lib/utils";

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const Content = getProjectMdxComponent(slug);
  if (!Content) notFound();

  return (
    <Container className="py-16 sm:py-24">
      {/* Hero：Small Metadata（§13），不是宣传式 Hero */}
      <header className="max-w-[880px]">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          <span>01 / AI PRODUCT PRACTICE</span>
          <span aria-hidden="true">·</span>
          <span>{projectStatusLabel(project.status)}</span>
        </div>
        <h1 className="mt-5 text-[40px] font-semibold leading-[1.05] tracking-tight text-foreground sm:text-[52px]">
          {project.title}
        </h1>
        {project.titleEn ? (
          <p className="mt-3 font-display text-[15px] text-muted">
            {project.titleEn}
          </p>
        ) : null}
        <p className="mt-6 max-w-[720px] text-lg leading-relaxed text-muted">
          {firstSentence(project.description)}
        </p>
        {project.tags.length > 0 ? (
          <p className="mt-4 text-[13px] text-muted">
            {project.tags.slice(0, 3).join(" · ")}
          </p>
        ) : null}
      </header>

      <article className="mt-16">
        {/* Content 是按 slug 动态解析的 MDX 组件（@next/mdx 标准用法），
            动态组件模式下 react-hooks/static-components 为误报 */}
        {/* eslint-disable-next-line react-hooks/static-components */}
        <Content
          components={{
            EvolutionPath: () => (
              <EvolutionPath stages={project.evolution ?? []} />
            ),
          }}
        />
      </article>

      <footer className="mt-20 border-t border-line pt-8">
        <ExternalLinks links={project.links} />
        <p className="mt-6 text-xs leading-relaxed text-muted">
          本项目展示内容使用虚拟、模拟或公开数据，不包含真实客户及内部业务信息。
        </p>
      </footer>
    </Container>
  );
}
