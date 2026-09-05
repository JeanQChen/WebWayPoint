import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CurrentFocus } from "./CurrentFocus";

describe("CurrentFocus", () => {
  it("渲染当前焦点关键词", () => {
    render(<CurrentFocus />);
    expect(screen.getByText("Evidence Architecture")).toBeInTheDocument();
    expect(screen.getByText("Harness")).toBeInTheDocument();
    expect(screen.getByText("RAG Architecture")).toBeInTheDocument();
    expect(screen.getByText("Observability & Reliability")).toBeInTheDocument();
  });
});
