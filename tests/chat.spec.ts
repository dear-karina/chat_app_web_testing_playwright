import { test, expect, Page, BrowserContext, chromium, firefox } from '@playwright/test';
import {randomMessage} from '../ultils/generate'
import { ChatAppEndpoints } from '../commons/endpoints';

test('chat',{ tag: ['@chat', '@postitive'] }, async()=>{
    // Create contexts for account A and account B
    const browserA= await chromium.launch()
    const contextA = await browserA.newContext()
    const browserB= await firefox.launch()
    const contextB = await browserB.newContext()

    // Create pages within each context
    const pageA = await contextA.newPage();
    const pageB = await contextB.newPage();

    // Navigate to the website for both pages
    await Promise.all([
        pageA.goto(ChatAppEndpoints.HOME),
        pageB.goto(ChatAppEndpoints.HOME)
    ]);

    // Login to account A and account B in parallel
    await Promise.all([
        login(pageA,"hongducdev", "123456"),
        login(pageB,"khavyhana", "123456"),
    ]);

    // Send a message from account A to account B
    await pageA.getByText("khavyhana").first().click();
    const randomMessageFromA=randomMessage()
    await pageA.locator('#message').fill(randomMessageFromA);
    await pageA.locator('#message').press('Enter');

    //Check if account B receive the message sent by account A
    await pageB.getByText("Nguyen Hong Duc").first().click();
    await expect(pageB.getByText(randomMessageFromA)).toBeVisible();

    // Send a message from account B to account A
    const randomMessageFromB=randomMessage()
    await pageB.locator('#message').fill(randomMessageFromB);
    await pageB.locator('#send').click();

    //Check if account B receive the message sent by account A
    await expect(pageA.getByText(randomMessageFromB)).toBeVisible();
    await Promise.all([
        contextA.close(),
        contextB.close(),
        browserA.close(),
        browserB.close(),
      ]);
})

const login = async (page: Page, username: string, password: string): Promise<void> => {
    await page.getByPlaceholder('Enter your username').fill(username);
    await page.getByPlaceholder('Enter your password').fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
  };