import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { getProjectBySlug } from "@/lib/content";
import { EvolutionPath } from "./EvolutionPath";

describe("EvolutionPath", () => {
  const stages = getProjectBySlug("credit-report")?.evolution ?? [];

  it("渲染全部 8 个可折叠阶段（<details> + <summary>）", () => {
    const { container } = render(<EvolutionPath stages={stages} />);
    expect(stages).toHaveLength(8);
    expect(container.querySelectorAll("details")).toHaveLength(8);
    expect(container.querySelectorAll("summary")).toHaveLength(8);
  });

  it("每个阶段默认折叠，summary 展示编号标题与一句话总结", () => {
    render(<EvolutionPath stages={stages} />);
    expect(screen.getByText("通用 LLM 生成报告")).toBeInTheDocument();
    expect(
      screen.getByText("能生成文本，但无法形成一个可靠工作的产品。"),
    ).toBeInTheDocument();
    const details = document.querySelectorAll("details");
    details.forEach((d) => expect(d.open).toBe(false));
  });

  it("展开内容包含每个阶段的四个字段标题", () => {
    render(<EvolutionPath stages={stages} />);
    expect(screen.getAllByText("当时想解决什么")).toHaveLength(8);
    expect(screen.getAllByText("形成了什么认识")).toHaveLength(8);
  });
});
