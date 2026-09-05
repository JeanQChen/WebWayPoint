import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ProjectIndexItem } from "@/components/ProjectIndexItem";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "AI产品实践",
  description: "金融 AI 产品项目：授信报告生成器与 Excel 数据处理工具。",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <Container className="py-16 sm:py-24">
      <header className="max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          PRACTICE
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          AI产品实践
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted">
          项目、尝试、失败、重构，以及一个想法如何逐渐成为系统。
        </p>
      </header>

      <div className="mt-12 border-b border-line">
        {projects.map((project, index) => (
          <ProjectIndexItem key={project.slug} project={project} index={index} />
        ))}
      </div>
    </Container>
  );
}
