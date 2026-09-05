import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import React from "react";
import { afterEach, vi } from "vitest";

// RTL 的自动清理依赖全局 afterEach；Vitest 未开 globals 时需手动注册，
// 否则跨测试 DOM 会累积，导致 "found multiple elements" 误报。
afterEach(() => {
  cleanup();
});

// 组件测试里把 next/link 渲染为普通 <a>，避免依赖 Next 路由上下文
vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...props
  }: {
    href: string;
    children?: React.ReactNode;
    [key: string]: unknown;
  }) =>
    React.createElement("a", { href, ...props }, children),
}));

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));
