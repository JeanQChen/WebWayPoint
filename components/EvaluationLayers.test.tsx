import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { EvaluationLayers } from "./EvaluationLayers";

describe("EvaluationLayers", () => {
  it("渲染三层评测与指标", () => {
    render(<EvaluationLayers />);
    expect(screen.getByText("SYSTEM")).toBeInTheDocument();
    expect(screen.getByText("CAPABILITY")).toBeInTheDocument();
    expect(screen.getByText("COMPONENT")).toBeInTheDocument();
    expect(screen.getByText(/Accuracy/)).toBeInTheDocument();
  });
});
