import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Overview } from "./Overview";

describe("Overview", () => {
  it("渲染 CONTEXT / GOAL / BOUNDARY 三栏", () => {
    render(<Overview />);
    expect(screen.getByText("CONTEXT")).toBeInTheDocument();
    expect(screen.getByText("GOAL")).toBeInTheDocument();
    expect(screen.getByText("BOUNDARY")).toBeInTheDocument();
  });
});
