import { test, expect, Page } from '@playwright/test';
import { ChatAppEndpoints } from '../commons/endpoints';

const login = async (page: Page, username: string, password: string): Promise<void> => {
  await page.getByPlaceholder('Enter your username').fill(username);
  await page.getByPlaceholder('Enter your password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
};

test.beforeEach(async ({ page }) => {
  await page.goto(ChatAppEndpoints.HOME);
  await expect(page).toHaveURL(ChatAppEndpoints.LOGIN);
});

test.describe('Login - UI Testing', { tag: ['@login'] }, () => {
  test('login successfully with valid credential', { tag: ['@positive'] }, async ({ page }) => {
    await login(page, 'hongducdev', '123456');
    await expect(page).toHaveURL(ChatAppEndpoints.HOME);
  });

  const negativeTests: { caseName: string; username: string; password: string; errorMessage: string }[] = [
    { caseName: 'incorrect password', username: 'hongducdev', password: '12345', errorMessage: 'Password is incorrect' },
    { caseName: 'unregistered username', username: 'hongducdev1', password: '123456', errorMessage: 'Account does not exist' },
    { caseName: 'empty username', username: '', password: '123456', errorMessage: 'Please fill in all fields' },
    { caseName: 'empty password', username: 'hongducdev', password: '', errorMessage: 'Please fill in all fields' },
  ];

  negativeTests.forEach(({ caseName, username, password, errorMessage }) => {
    test(`login failed due to ${caseName}`, { tag: ['@negative'] }, async ({ page }) => {
      await login(page, username, password);
      await expect(page.getByText(errorMessage)).toBeVisible();
   
    });
  });
});