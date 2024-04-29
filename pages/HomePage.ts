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
  async typeSearch(q: string) {
    await this.searchTextBox.fill(q);
  }
  async clickSearchButton() {
    await this.searchButton.click();
  }

  async clickLogoutButton() {
    await this.logoutButton.click();
  }
  public async search(q: string) {
    await this.typeSearch(q);
    await this.clickSearchButton();
  }
  async assertTargetFocused(user: string) {
    await expect(this.page.getByText(`To: ${user}`)).toBeVisible();
  }
}
