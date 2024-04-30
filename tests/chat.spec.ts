import { chromium, firefox } from "@playwright/test";
import { test } from "../fixtures/page.fixture";
import { randomMessage } from "../ultils/generate";
import { ChatAppEndpoints } from "../constants/endpoints";
import { createPageWithLoginAndHome } from "../fixtures/page.fixture";

test(
  "chat between 2 accounts, one with Chrome and one with Firefox",
  { tag: ["@chat", "@positive"] },
  async () => {
    test.setTimeout(60000);
    // Launch Chromium and Firefox browsers
    const browserA = await chromium.launch();
    const contextA = await browserA.newContext();
    const browserB = await firefox.launch();
    const contextB = await browserB.newContext();

    // Create pages with login and home injected
    const {
      page: pageA,
      loginPage: loginPageA,
      homePage: homePageA,
    } = await createPageWithLoginAndHome(contextA);
    const {
      page: pageB,
      loginPage: loginPageB,
      homePage: homePageB,
    } = await createPageWithLoginAndHome(contextB);

    // Navigate to the website for both pages
    await Promise.all([
      pageA.goto(ChatAppEndpoints.HOME),
      pageB.goto(ChatAppEndpoints.HOME),
    ]);
    const accountA_name = "hongducdev";
    const accountB_name = "khavyhana";

    // Login
    await loginPageA.login(accountA_name, "123456");
    await loginPageB.login(accountB_name, "123456");
    // Open dialogs
    await homePageA.search(accountB_name);
    //currently the web search by name, not username
    // await homePageB.search(accountB_name);
    await homePageB.search("Nguyen Hong Duc");

    // Send messages
    const randomMessageFromA = randomMessage();
    const randomMessageFromB = randomMessage();
    await homePageA.sendMessage(randomMessageFromA, "send-button");
    await homePageB.sendMessage(randomMessageFromB, "ENTER");

    //Take screenshot here
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    // console.log(`hongduc: ${randomMessageFromA}`);
    // console.log(`khavy: ${randomMessageFromB}`);
    // await pageA.screenshot({ path: "playwright-report/screenshots/screenshotA.png" });
    // await pageB.screenshot({ path: "playwright-report/screenshots/screenshotB.png" });

    // Check if account B receives the message sent by account A
    await homePageB.assertMessageVisible(randomMessageFromA);
    await homePageA.assertMessageVisible(randomMessageFromB);

    //Close all resources
    await Promise.all([
      contextA.close(),
      contextB.close(),
      browserA.close(),
      browserB.close(),
    ]);
  }
);
