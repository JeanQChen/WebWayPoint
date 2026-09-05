import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DesignDecisions } from "./DesignDecisions";

describe("DesignDecisions", () => {
  it("渲染四个设计原则", () => {
    render(<DesignDecisions />);
    expect(screen.getByText("Workflow vs Agent")).toBeInTheDocument();
    expect(screen.getByText("LLM vs Code")).toBeInTheDocument();
    expect(screen.getByText("Generate vs Verify")).toBeInTheDocument();
    expect(screen.getByText("Modular vs Monolithic")).toBeInTheDocument();
  });
});
