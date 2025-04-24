# Test info

- Name: Smoke: Standard user can log in and verify footer UI elements
- Location: /Users/azeezalimi/Desktop/Automation/saucedemo/src/tests/smoke/footer.spec.ts:4:5

# Error details

```
Error: browserType.launch: Executable doesn't exist at /Users/azeezalimi/Library/Caches/ms-playwright/chromium_headless_shell-1169/chrome-mac/headless_shell
╔═════════════════════════════════════════════════════════════════════════╗
║ Looks like Playwright Test or Playwright was just installed or updated. ║
║ Please run the following command to download new browsers:              ║
║                                                                         ║
║     npx playwright install                                              ║
║                                                                         ║
║ <3 Playwright Team                                                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```

# Test source

```ts
   1 | import { test } from '../../fixtures/fixtures';
   2 | import { userData } from '../../testData/testData';
   3 |
>  4 | test('Smoke: Standard user can log in and verify footer UI elements', async ({
     |     ^ Error: browserType.launch: Executable doesn't exist at /Users/azeezalimi/Library/Caches/ms-playwright/chromium_headless_shell-1169/chrome-mac/headless_shell
   5 |   homePage,
   6 |   inventoryPage,
   7 | }) => {
   8 |   const { userName, password } = userData.standardUser;
   9 |   await homePage.goTo();
  10 |   await homePage.standardlogin(userName, password);
  11 |   await inventoryPage.footer.footerText();
  12 |   await inventoryPage.footer.facebookIcon.clickonFacebookIcon();
  13 |   await inventoryPage.footer.twitterXIcon.clickonTwitterXIcon();
  14 |   await inventoryPage.footer.linkedInIcon.clickonLinkedInIcon();
  15 | });
  16 |
```
