import { test as base } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';
type PageFixture = {
	loginPage: LoginPage;
};

export const test = base.extend<PageFixture>({
	loginPage: async ({ page }, use) => {
		await use(new LoginPage(page));
	},
});


export { expect } from '@playwright/test';