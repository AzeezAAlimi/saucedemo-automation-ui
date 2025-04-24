# Test info

- Name: Should login successfully with username: "visual_user"
- Location: /Users/azeezalimi/Desktop/Automation/saucedemo/src/tests/data-driven-test/login.spec.ts:5:7

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
   2 | import loginDataArray from '../../testData/loginData.json';
   3 |
   4 | loginDataArray.forEach((data) => {
>  5 |   test(`Should login successfully with username: "${data.userName}"`, async ({
     |       ^ Error: browserType.launch: Executable doesn't exist at /Users/azeezalimi/Library/Caches/ms-playwright/chromium_headless_shell-1169/chrome-mac/headless_shell
   6 |     homePage,
   7 |   }) => {
   8 |     await homePage.goTo();
   9 |     await homePage.standardlogin(data.userName, data.password);
  10 |   });
  11 | });
  12 |
```
