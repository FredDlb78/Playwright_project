import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
  await page.getByRole("link", { name: "Sign up" }).click();
  await expect(page.locator("#signInModalLabel")).toContainText("Sign up");

  await page.getByRole("textbox", { name: "Username:" }).click();
  await page.getByRole("textbox", { name: "Username:" }).fill("safaUSe11");

  await page.getByRole("textbox", { name: "Password:" }).click();
  await page.getByRole("textbox", { name: "Password:" }).fill("safa");
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.accept().catch(() => {});
  });
  await page.getByRole("button", { name: "Sign up" }).click();
  await page.getByRole("link", { name: "Sign up" }).click();
});
