import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "@/app/page";

describe("首页集成", () => {
  it("从真实 Content 数据完成渲染（intro + 三个入口，无 Hero）", () => {
    render(<HomePage />);

    // Intro（§8）
    expect(screen.getByText("个人的思考、成长和实践。")).toBeInTheDocument();

    // 三个内容入口（§9）
    expect(
      screen.getByRole("heading", { level: 2, name: "AI产品实践" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "我的思考" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "好物共享" }),
    ).toBeInTheDocument();

    // 入口条目
    expect(screen.getByText("授信报告生成器")).toBeInTheDocument();
    expect(screen.getByText("Excel 数据处理工具")).toBeInTheDocument();
    expect(screen.getByText(/RAG 不只是召回/)).toBeInTheDocument();
    expect(screen.getByText(/深入理解 AI Agent/)).toBeInTheDocument();

    // 查看全部
    expect(screen.getByText("查看全部实践")).toBeInTheDocument();
    expect(screen.getByText("查看全部思考")).toBeInTheDocument();
    expect(screen.getByText("查看全部资源")).toBeInTheDocument();
  });

  it("不存在空链接", () => {
    render(<HomePage />);
    const links = screen.getAllByRole("link");
    for (const link of links) {
      const href = link.getAttribute("href");
      expect(href).toBeTruthy();
      expect(href).not.toBe("");
    }
  });
});
