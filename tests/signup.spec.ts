import { test, expect } from "../fixtures/page.fixture";
import { ChatAppEndpoints } from "../constants/endpoints";
import { negativeTests, positiveTests } from "../data/signup.data";

test.beforeEach(async ({ page, loginPage, context }) => {
  const pageTemp = await context.newPage();
  await pageTemp.goto(ChatAppEndpoints.HOME);
  await page.goto(ChatAppEndpoints.HOME);
  await page.reload();
  // await loginPage.clickSignupLink();
  // await expect(page).toHaveURL(ChatAppEndpoints.SIGNUP);
});

test.describe("Sign Up - UI Testing", { tag: ["@signup"] }, () => {
  positiveTests.forEach(
    ({ caseName, fullname, username, password, password_retype, sex }) => {
      test(
        `signup successfully with ${caseName}`,
        { tag: ["@positive"] },
        async ({ page, signupPage }) => {
          // await signupPage.signup(
          //   fullname,
          //   username,
          //   password,
          //   password_retype,
          //   sex
          // );
          // await expect(page).toHaveURL(ChatAppEndpoints.HOME);
        }
      );
    }
  );
  negativeTests.forEach(
    ({
      caseName,
      fullname,
      username,
      password,
      password_retype,
      sex,
      errorMessage,
    }) => {
      test(
        `signup failed due to ${caseName}`,
        { tag: ["@negative"] },
        async ({ signupPage }) => {
          //   await signupPage.signup(
          //     fullname,
          //     username,
          //     password,
          //     password_retype,
          //     sex
          //   );
          //   await expect(signupPage.errorMessage).toHaveText(errorMessage);
        }
      );
    }
  );
});
