import { defineConfig, devices } from "@playwright/test";

/**
 * E2E Smoke Test（§46 / Phase 6）
 * 前置：先 `npm run build`，再 `npm run test:e2e`。
 * webServer 用 `next start` 托管生产构建，贴近真实部署行为。
 */
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: "list",
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    // 移动端用 Chromium 引擎 + iPhone 视口，避免额外安装 WebKit（§46 冒烟测试足够）
    {
      name: "mobile",
      use: { ...devices["iPhone 13"], browserName: "chromium" },
    },
  ],
  webServer: {
    command: "npm run start",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
