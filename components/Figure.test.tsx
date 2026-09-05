import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Figure } from "./Figure";

describe("Figure", () => {
  it("无 src 时渲染低权重占位槽与 caption", () => {
    render(
      <Figure
        id="FIG.01"
        caption="授信报告生成器当前界面"
        placeholder="credit-product-main"
      />,
    );
    expect(
      screen.getByText("Product screenshot to be added"),
    ).toBeInTheDocument();
    expect(screen.getByText(/credit-product-main/)).toBeInTheDocument();
    expect(screen.getByText("FIG.01")).toBeInTheDocument();
    expect(screen.getByText("授信报告生成器当前界面")).toBeInTheDocument();
  });

  it("有 src 时渲染 <img>", () => {
    render(
      <Figure
        id="FIG.01"
        caption="某界面"
        placeholder="credit-product-main"
        src="/images/credit-report/credit-product-main.png"
      />,
    );
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "/images/credit-report/credit-product-main.png",
    );
  });
});
