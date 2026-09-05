import { describe, expect, it } from "vitest";
import { cn, projectStatusLabel, thoughtStatusLabel } from "./utils";

describe("cn", () => {
  it("拼接非空类名", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  it("忽略 falsy 值", () => {
    expect(cn("a", false, null, undefined, "", "b")).toBe("a b");
  });

  it("无参数返回空串", () => {
    expect(cn()).toBe("");
  });
});

describe("status labels", () => {
  it("映射项目状态", () => {
    expect(projectStatusLabel("building")).toBe("BUILDING");
    expect(projectStatusLabel("iterating")).toBe("ITERATING");
    expect(projectStatusLabel("completed")).toBe("COMPLETED");
    expect(projectStatusLabel("archived")).toBe("ARCHIVED");
  });

  it("映射思考状态", () => {
    expect(thoughtStatusLabel("drafting")).toBe("DRAFTING");
    expect(thoughtStatusLabel("researching")).toBe("RESEARCHING");
  });
});
