import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ExternalLinks } from "./ExternalLinks";

describe("ExternalLinks", () => {
  it("links 为空对象时不渲染", () => {
    const { container } = render(<ExternalLinks links={{}} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("links 为 undefined 时不渲染", () => {
    const { container } = render(<ExternalLinks links={undefined} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("只渲染存在 URL 的按钮", () => {
    render(<ExternalLinks links={{ github: "https://github.com/x" }} />);
    expect(
      screen.getByRole("link", { name: /GitHub/ }),
    ).toHaveAttribute("href", "https://github.com/x");
    expect(screen.queryByRole("link", { name: /Demo/ })).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /项目文档/ }),
    ).not.toBeInTheDocument();
  });

  it("渲染全部三个按钮", () => {
    render(
      <ExternalLinks
        links={{
          github: "https://github.com/x",
          demo: "https://demo.example.com",
          document: "https://docs.example.com",
        }}
      />,
    );
    expect(screen.getByRole("link", { name: /GitHub/ })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Demo/ })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /项目文档/ })).toBeInTheDocument();
  });

  it("外链带 target=_blank 与 rel=noopener noreferrer", () => {
    render(<ExternalLinks links={{ github: "https://github.com/x" }} />);
    const link = screen.getByRole("link", { name: /GitHub/ });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
