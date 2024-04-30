import { Locator, Page, expect } from "@playwright/test";
import { homeLocator } from "./locators/home.locator";
export class HomePage {
  protected readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  get searchTextBox(): Locator {
    return this.page.locator(homeLocator.SEARCH_TEXT_BOX);
  }
  get searchButton(): Locator {
    return this.page.locator(homeLocator.SEARCH_BUTTON);
  }
  get logoutButton(): Locator {
    return this.page.getByRole("button", { name: "Log out" });
  }
  get errorMessage(): Locator {
    return this.page.locator(homeLocator.ERROR_MESSAGE_TEXT);
  }
  get messageTextBox(): Locator {
    return this.page.locator(homeLocator.MESSAGE_TEXT_BOX);
  }
  get sendMessageButton(): Locator {
    return this.page.locator(homeLocator.SEND_MESSAGE_BUTTON);
  }
  async typeSearch(q: string) {
    await this.searchTextBox.fill(q);
  }
  async typeMessage(message: string) {
    await this.messageTextBox.fill(message);
  }
  async clickSearchButton() {
    await this.searchButton.click();
  }
  async clickSendButton() {
    await this.sendMessageButton.click();
  }
  async clickLogoutButton() {
    await this.logoutButton.click();
  }
  public async search(q: string, delayMilliseconds: number = 1000) {
    await this.typeSearch(q);
    await new Promise((resolve) => setTimeout(resolve, delayMilliseconds));
    await this.clickSearchButton();
  }

  async assertTargetFocused(user: string) {
    await expect(this.page.getByText(`To: ${user}`)).toBeVisible();
  }
  async assertMessageVisible(message: string) {
    await expect(this.page.getByText(message)).toBeVisible();
  }
  async sendMessage(message: string, by: "ENTER" | "send-button") {
    await this.typeMessage(message);
    by === "ENTER"
      ? await this.messageTextBox.press("Enter")
      : await this.clickSendButton();
  }
}
