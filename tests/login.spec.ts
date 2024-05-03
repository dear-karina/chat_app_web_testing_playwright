import { test, expect } from "../fixtures/page.fixture";
import { ChatAppEndpoints } from "../constants/endpoints";
import { negativeTests, positiveTest } from "../data/login.data";

test.beforeEach(async ({ page, context }) => {
  // const pageTemp = await context.newPage();
  // await pageTemp.goto(ChatAppEndpoints.HOME);
  // await page.goto(ChatAppEndpoints.HOME);
  // await page.reload();
  await new Promise((resolve) => setTimeout(resolve, 5000));
});

test.describe("Login - UI Testing", { tag: ["@login"] }, () => {
  test(
    "login successfully with valid credentials",
    { tag: ["@positive"] },
    async ({ page, loginPage }) => {
      // await loginPage.login(positiveTest.username, positiveTest.password);
      // await expect(page).toHaveURL(ChatAppEndpoints.HOME);
    }
  );

  negativeTests.forEach(({ caseName, username, password, errorMessage }) => {
    test(
      `login failed due to ${caseName}`,
      { tag: ["@negative"] },
      async ({ loginPage }) => {
        // await loginPage.login(username, password);
        // await expect(loginPage.errorMessage).toHaveText(errorMessage);
      }
    );
  });
});
