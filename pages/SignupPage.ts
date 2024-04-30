import { Locator, Page } from "@playwright/test";
import { signupLocator } from "./locators/signup.locator";
export class SignupPage {
  protected readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  get fullnameTextBox(): Locator {
    return this.page.locator(signupLocator.FULLNAME_TEXT_BOX);
  }
  get usernameTextBox(): Locator {
    return this.page.locator(signupLocator.USERNAME_TEXT_BOX);
  }
  get passwordTextBox(): Locator {
    return this.page.locator(signupLocator.PASSWORD_TEXT_BOX);
  }
  get passwordRetypeTextBox(): Locator {
    return this.page.locator(signupLocator.PASSWORD_RETYPE_TEXT_BOX);
  }
  get maleGenderRadioButton(): Locator {
    return this.page.locator(signupLocator.MALE_GENDER_RADIO_BUTTON);
  }
  get femaleGenderRadioButton(): Locator {
    return this.page.locator(signupLocator.FEMALE_GENDER_RADIO_BUTTON);
  }
  get errorMessage(): Locator {
    return this.page.locator(signupLocator.ERROR_MESSAGE_TEXT);
  }

  get signupButton(): Locator {
    return this.page.locator(signupLocator.LOGIN_BUTTON);
  }
  async typeFullname(fullname: string) {
    await this.fullnameTextBox.fill(fullname);
  }
  async typeUsername(username: string) {
    await this.usernameTextBox.fill(username);
  }

  async typePassword(password: string) {
    await this.passwordTextBox.fill(password);
  }
  async typePasswordRetype(password: string) {
    await this.passwordRetypeTextBox.fill(password);
  }

  async clickSignupButton() {
    await this.signupButton.click();
  }
  async checkMaleRadioButton() {
    await this.maleGenderRadioButton.click();
  }
  async checkFemaleRadioButton() {
    await this.maleGenderRadioButton.click();
  }

  public async signup(
    fullname: string,
    username: string,
    password: string,
    password_retype: string | undefined,
    gender: "male" | "female" | undefined
  ) {
    await this.typeFullname(fullname);
    await this.typeUsername(username);
    await this.typePassword(password);
    await this.typePasswordRetype(
      password_retype === undefined ? password : password_retype
    );
    if (gender === "male") {
      await this.checkMaleRadioButton();
    } else if (gender === "female") {
      await this.checkFemaleRadioButton();
    }
    await this.clickSignupButton();
  }
}
