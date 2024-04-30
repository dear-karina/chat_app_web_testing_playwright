import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { SignupPage } from "../pages/SignupPage";
type PageFixture = {
  loginPage: LoginPage;
  signupPage: SignupPage;
  homePage: HomePage;
};

export const test = base.extend<PageFixture>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  signupPage: async ({ page }, use) => {
    await use(new SignupPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});

export { expect } from "@playwright/test";
