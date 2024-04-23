import { chromium, BrowserContext, Page } from 'playwright';

async function testMessageDeliveryTime() {
    // Launch the browser
    const browser = await chromium.launch();

    // Create contexts for account A and account B
    const contextA = await browser.newContext();
    const contextB = await browser.newContext();

    // Create pages within each context
    const pageA = await contextA.newPage();
    const pageB = await contextB.newPage();

    // Navigate to the website for both pages
    await Promise.all([
        pageA.goto('https://example.com'),
        pageB.goto('https://example.com')
    ]);

    // Login to account A and account B in parallel
    await Promise.all([
        loginToAccount(pageA, 'accountA_username', 'accountA_password'),
        loginToAccount(pageB, 'accountB_username', 'accountB_password')
    ]);

    // Send a message from account A to account B
    await sendMessageFromAccount(pageA, 'Hello, Account B!');

    // Wait for a while to simulate message delivery time
    await pageA.waitForTimeout(5000); // Adjust this time as needed

    // Check when the message appears for account B
    const receiveTime = await getMessageReceiveTimeForAccount(pageB);

    console.log(`Message received by account B at: ${receiveTime}`);

    // Close the browser
    await browser.close();
}

async function loginToAccount(page: Page, username: string, password: string) {
    // Implement login
    await page.fill('input#username', username);
    await page.fill('input#password', password);
    await page.click('button#loginBtn');
    // Ensure logged in successfully
}

async function sendMessageFromAccount(page: Page, message: string) {
    // Implement sending a message
    await page.fill('textarea#messageInput', message);
    await page.click('button#sendMessageBtn');
    // Ensure message sent successfully
}

async function getMessageReceiveTimeForAccount(page: Page): Promise<string> {
    // Implement getting the message receive time
    const messageElement = await page.waitForSelector('div.message');
    const receiveTime = await messageElement.getAttribute('data-receive-time');
    return receiveTime;
}

// Run the test function
testMessageDeliveryTime().catch(console.error);
