import { describe, expect, it } from "vitest";
import {
  getFeaturedProject,
  getOtherProjects,
  getProjectBySlug,
  getProjects,
  getResources,
  getThoughtBySlug,
  getThoughts,
} from "./content";

describe("content loaders", () => {
  it("返回项目列表，授信项目为旗舰项目", () => {
    const projects = getProjects();
    expect(projects.length).toBeGreaterThanOrEqual(2);
    expect(getFeaturedProject()?.slug).toBe("credit-report");
  });

  it("getProjectBySlug 返回对应项目，未知 slug 返回 undefined", () => {
    expect(getProjectBySlug("credit-report")?.title).toBe("授信报告生成器");
    expect(getProjectBySlug("excel-tool")?.featured).toBe(false);
    expect(getProjectBySlug("unknown")).toBeUndefined();
  });

  it("getOtherProjects 排除旗舰项目", () => {
    const others = getOtherProjects();
    expect(others.every((p) => !p.featured)).toBe(true);
    expect(others.map((p) => p.slug)).toContain("excel-tool");
  });

  it("授信项目 Evolution 包含 8 个阶段，核心字段非空", () => {
    const evolution = getProjectBySlug("credit-report")?.evolution ?? [];
    expect(evolution).toHaveLength(8);
    for (const stage of evolution) {
      expect(stage.label).toBeTruthy();
      expect(stage.title).toBeTruthy();
      expect(stage.wanted.length).toBeGreaterThan(0);
      expect(stage.changed.length).toBeGreaterThan(0);
      expect(stage.learned.length).toBeGreaterThan(0);
    }
  });

  it("授信项目最后一个阶段标记为 current", () => {
    const evolution = getProjectBySlug("credit-report")?.evolution ?? [];
    expect(evolution[evolution.length - 1].current).toBe(true);
  });

  it("Thoughts 包含两个研究主题", () => {
    const thoughts = getThoughts();
    expect(thoughts).toHaveLength(2);
    expect(getThoughtBySlug("rag-router-retrieval-strategy")?.status).toBe(
      "drafting",
    );
    expect(
      getThoughtBySlug("knowledge-graph-ontology-reasoning")?.status,
    ).toBe("researching");
  });

  it("Resources 包含用户提供的资源", () => {
    const resources = getResources();
    expect(resources.length).toBeGreaterThanOrEqual(1);
    expect(resources.map((r) => r.slug)).toContain("ai-agent-book");
  });
});
