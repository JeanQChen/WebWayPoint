import { expect, test } from "@playwright/test";

test.describe("Waypoint 冒烟测试", () => {
  test("首页能渲染 intro 与三个内容入口", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByText("个人的思考、成长和实践。").first(),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "AI产品实践" }),
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "我的思考" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "好物共享" })).toBeVisible();
    await expect(page.getByText("授信报告生成器").first()).toBeVisible();
    await expect(page.getByText(/RAG 不只是召回/)).toBeVisible();
  });

  test("桌面端导航链接可达主要页面", async ({ page, isMobile }) => {
    test.skip(isMobile, "仅桌面端验证主导航点击");
    await page.goto("/");

    const nav = page.getByRole("navigation", { name: "主导航" });
    await nav.getByRole("link", { name: "AI产品实践", exact: true }).click();
    await expect(page).toHaveURL(/\/projects$/);
    await expect(
      page.getByRole("heading", { level: 1, name: "AI产品实践" }),
    ).toBeVisible();

    await nav.getByRole("link", { name: "我的思考", exact: true }).click();
    await expect(page).toHaveURL(/\/thoughts$/);
    await expect(
      page.getByRole("heading", { level: 1, name: "我的思考" }),
    ).toBeVisible();
  });

  test("授信项目详情页渲染 Evolution 路径与分层 System Map", async ({ page }) => {
    await page.goto("/projects/credit-report");
    await expect(
      page.getByRole("heading", { level: 1, name: "授信报告生成器" }),
    ).toBeVisible();
    await expect(page.getByText("通用 LLM 生成报告")).toBeVisible();
    await expect(
      page.getByText(/Evidence \+ Harness \+ RAG Architecture/),
    ).toBeVisible();
    await expect(
      page.getByRole("img", { name: /当前系统分层结构/ }),
    ).toBeVisible();
  });

  test("Excel 项目详情页可访问", async ({ page }) => {
    await page.goto("/projects/excel-tool");
    await expect(
      page.getByRole("heading", { level: 1, name: "Excel 数据处理工具" }),
    ).toBeVisible();
  });

  test("思考详情页可访问", async ({ page }) => {
    await page.goto("/thoughts/rag-router-retrieval-strategy");
    await expect(
      page.getByRole("heading", { level: 1, name: /RAG 不只是召回/ }),
    ).toBeVisible();
  });

  test("资源与关于页可访问", async ({ page }) => {
    await page.goto("/resources");
    await expect(
      page.getByRole("heading", { level: 1, name: "好物共享" }),
    ).toBeVisible();

    await page.goto("/about");
    await expect(
      page.getByRole("heading", { level: 1, name: "About Waypoint" }),
    ).toBeVisible();
  });

  test("SEO 端点可访问", async ({ page }) => {
    const sitemap = await page.request.get("/sitemap.xml");
    expect(sitemap.status()).toBe(200);
    expect(await sitemap.text()).toContain("/projects/credit-report");

    const robots = await page.request.get("/robots.txt");
    expect(robots.status()).toBe(200);
    expect(await robots.text()).toContain("sitemap");
  });
});
