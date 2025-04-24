# Test info

- Name: Smoke: Login flow >> The locked_out_user should not be able to log in
- Location: /Users/azeezalimi/Desktop/Automation/saucedemo/src/tests/smoke/login.spec.ts:14:7

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
   4 | test.describe('Smoke: Login flow', () => {
   5 |   test.beforeEach(async ({ homePage }) => {
   6 |     await homePage.goTo();
   7 |   });
   8 |
   9 |   test('The standard_user should be able to log in', async ({ homePage }) => {
  10 |     const { userName, password } = userData.standardUser;
  11 |     await homePage.standardlogin(userName, password);
  12 |   });
  13 |
> 14 |   test('The locked_out_user should not be able to log in', async ({
     |       ^ Error: browserType.launch: Executable doesn't exist at /Users/azeezalimi/Library/Caches/ms-playwright/chromium_headless_shell-1169/chrome-mac/headless_shell
  15 |     homePage,
  16 |   }) => {
  17 |     const { userName, password } = userData.lockedUser;
  18 |     await homePage.lockedOutUserlogin(userName, password);
  19 |   });
  20 | });
  21 |
```
