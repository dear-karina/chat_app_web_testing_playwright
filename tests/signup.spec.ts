// import { test, expect, Page } from '@playwright/test';
// import { ChatAppEndpoints } from '../commons/endpoints';
// import {randomFullname, randomUsername, randomPassword, randomSex} from '../ultils/generate'
// const signup = async (page: Page, fullname: string, username: string, password: string, confirm_password: string | null | undefined, sex: string): Promise<void> => {
//   await page.getByPlaceholder('Enter your full name').fill(fullname);
//   await page.getByPlaceholder('Enter your username').fill(username);
//   await page.locator('#password').fill(password);
//   await page.locator('#confirmPassword').fill(confirm_password === null || confirm_password === undefined ? password : confirm_password);
//   if (sex === 'female') await page.getByLabel('Female').check();
//   await page.getByRole('button', { name: 'Sign Up' }).click();
// };

// test.beforeEach(async ({ page }) => {
//   await page.goto(ChatAppEndpoints.HOME);
//   await expect(page).toHaveURL(ChatAppEndpoints.LOGIN);
//   await page.getByRole('link', { name: 'Sign up' }).click();
//   await expect(page).toHaveURL(ChatAppEndpoints.SIGNUP);
// });

// test.describe('Sign Up - UI Testing', { tag: ['@signup'] }, () => {
//   test('signup successfully with valid credential', { tag: ['@positive'] }, async ({ page }) => {
//     await signup(page, randomFullname(), randomUsername(), randomPassword(), null, randomSex());
//     await expect(page).toHaveURL(ChatAppEndpoints.HOME);
//   });

//   const negativeTests: {
//     caseName: string;
//     fullname: string;
//     username: string;
//     password: string;
//     password_retype?: string | null;
//     sex: string;
//     errorMessage: string;
//   }[] = [
//     {
//       caseName: 'incorrect password retype',
//       fullname: randomFullname(),
//       username: randomUsername(),
//       password: randomPassword(),
//       password_retype: randomPassword(),
//       sex: randomSex(),
//       errorMessage: 'Passwords do not match',
//     },
//     {
//       caseName: 'short password (<8 chars)',
//       fullname: randomFullname(),
//       username: randomUsername(),
//       password: randomPassword(7),
//       password_retype: null,
//       sex: randomSex(),
//       errorMessage: 'Password is too short',
//     },
//     {
//       caseName: 'registered username',
//       fullname: randomFullname(),
//       username: 'hongducdev',
//       password: randomPassword(),
//       password_retype: null,
//       sex: randomSex(),
//       errorMessage: 'Username already exists',
//     },
//     {
//       caseName: 'empty fullname',
//       fullname: '',
//       username: randomUsername(),
//       password: randomPassword(),
//       password_retype: null,
//       sex: randomSex(),
//       errorMessage: 'Please fill in all fields',
//     },
//     {
//       caseName: 'empty username',
//       fullname: randomFullname(),
//       username: '',
//       password: randomPassword(),
//       password_retype: null,
//       sex: randomSex(),
//       errorMessage: 'Please fill in all fields',
//     },
//     {
//       caseName: 'empty password',
//       fullname: randomFullname(),
//       username: randomUsername(),
//       password: '',
//       password_retype: null,
//       sex: randomSex(),
//       errorMessage: 'Please fill in all fields',
//     },
//     {
//       caseName: 'empty password retype',
//       fullname: randomFullname(),
//       username: randomUsername(),
//       password: randomPassword(),
//       password_retype: '',
//       sex: randomSex(),
//       errorMessage: 'Please fill in all fields',
//     },
//   ];
//   negativeTests.forEach(({ caseName, fullname, username, password, password_retype, sex, errorMessage }) => {
//     test(`login failed due to ${caseName}`, { tag: ['@negative'] }, async ({ page }) => {
//       await signup(page, fullname, username, password, password_retype,sex);
//       await expect(page.getByText(errorMessage)).toBeVisible();
//     });
//   });
// });
