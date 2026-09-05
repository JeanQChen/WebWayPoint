import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SystemMap } from "./SystemMap";

describe("SystemMap", () => {
  it("具备 img 角色与描述性 aria-label", () => {
    render(<SystemMap />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute(
      "aria-label",
      expect.stringContaining("Documents / Data"),
    );
    expect(img).toHaveAttribute(
      "aria-label",
      expect.stringContaining("Human Review"),
    );
  });

  it("内容包含关键层", () => {
    const { container } = render(<SystemMap />);
    expect(container.textContent).toContain("Parsing & Routing");
    expect(container.textContent).toContain("Evidence");
    expect(container.textContent).toContain("Financial Analysis");
  });
});
