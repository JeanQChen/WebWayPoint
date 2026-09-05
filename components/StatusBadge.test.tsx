import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { StatusBadge } from "./StatusBadge";

describe("StatusBadge", () => {
  it("渲染标签文字", () => {
    render(<StatusBadge label="ITERATING" />);
    expect(screen.getByText("ITERATING")).toBeInTheDocument();
  });

  it("tone=muted 同样渲染文字", () => {
    render(<StatusBadge label="DRAFTING" tone="muted" />);
    expect(screen.getByText("DRAFTING")).toBeInTheDocument();
  });
});
