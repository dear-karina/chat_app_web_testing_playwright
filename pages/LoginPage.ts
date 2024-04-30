import { Locator, Page } from "@playwright/test";
import { ChatAppEndpoints } from "../constants/endpoints";
import { loginLocator } from "./locators/login.locator";
export class LoginPage {
  protected readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  get usernameTextBox(): Locator {
    return this.page.locator(loginLocator.USERNAME_TEXT_BOX);
  }
  get passwordTextBox(): Locator {
    return this.page.locator(loginLocator.PASSWORD_TEXT_BOX);
  }
  get errorMessage(): Locator {
    return this.page.locator(loginLocator.ERROR_MESSAGE_TEXT);
  }

  get loginButton(): Locator {
    return this.page.locator(loginLocator.LOGIN_BUTTON);
  }
  get signupLink(): Locator {
    return this.page.getByRole("link", { name: "Sign up" });
  }
  async typeUsername(username: string) {
    await this.usernameTextBox.fill(username);
  }

  async typePassword(password: string) {
    await this.passwordTextBox.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }
  async clickSignupLink() {
    await this.signupLink.click();
  }

  public async goto() {
    await this.page.goto(ChatAppEndpoints.HOME);
  }

  public async login(username: string, password: string) {
    await this.typeUsername(username);
    await this.typePassword(password);
    await this.clickLoginButton();
  }
}
