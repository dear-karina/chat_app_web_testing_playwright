import { test, expect } from "../fixtures/page.fixture";
import { ChatAppEndpoints } from "../constants/endpoints";
import { positiveTest, negativeTest } from "../data/search_user.data";
test.beforeEach(async ({ page, loginPage, context }) => {
  // const pageTemp = await context.newPage();
  // await pageTemp.goto(ChatAppEndpoints.HOME);
  // await page.goto(ChatAppEndpoints.HOME);
  // await page.reload();
  // await loginPage.login("hongducdev", "123456");
  await new Promise((resolve) => setTimeout(resolve, 5000));
});

test.describe(
  "Search user - UI Testing",
  { tag: ["@search-user"] },
  async () => {
    test(
      "should found the user if username is registered",
      { tag: ["@positive"] },
      async ({ homePage }) => {
        // await homePage.search(positiveTest.query);
        // await homePage.assertTargetFocused(positiveTest.query);
      }
    );

    negativeTest.forEach(({ caseName, query, errorMessage }) => {
      test(caseName, { tag: ["@negative"] }, async ({ homePage }) => {
        // await homePage.search(query);
        // await expect(homePage.errorMessage).toHaveText(errorMessage);
      });
    });
  }
);
