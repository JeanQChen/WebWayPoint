import { expect, test } from "@playwright/test";

/**
 * 响应式导航检查（§44）：移动端汉堡菜单展开/收起。
 * 该用例只在 mobile 项目下运行。
 */
test.describe("移动端导航", () => {
  test.skip(({ isMobile }) => !isMobile, "仅移动端运行");

  test("汉堡菜单可展开并展示导航链接", async ({ page }) => {
    await page.goto("/");
    const toggle = page.getByRole("button", { name: "打开菜单" });
    await expect(toggle).toBeVisible();

    await toggle.click();
    const mobileNav = page.getByRole("navigation", { name: "移动端导航" });
    await expect(mobileNav).toBeVisible();
    await expect(
      mobileNav.getByRole("link", { name: "AI产品实践", exact: true }),
    ).toBeVisible();
    await expect(
      mobileNav.getByRole("link", { name: "我的思考", exact: true }),
    ).toBeVisible();
    await expect(
      mobileNav.getByRole("link", { name: "好物共享", exact: true }),
    ).toBeVisible();
    await expect(
      mobileNav.getByRole("link", { name: "关于", exact: true }),
    ).toBeVisible();
  });

  test("点击菜单项后菜单收起", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "打开菜单" }).click();
    await page
      .getByRole("navigation", { name: "移动端导航" })
      .getByRole("link", { name: "AI产品实践", exact: true })
      .click();
    await expect(page).toHaveURL(/\/projects$/);
    await expect(
      page.getByRole("navigation", { name: "移动端导航" }),
    ).toBeHidden();
  });
});
