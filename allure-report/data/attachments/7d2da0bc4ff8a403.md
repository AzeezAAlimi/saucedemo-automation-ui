# Test info

- Name: Visual: Homepage should match design snapshot
- Location: /Users/azeezalimi/Desktop/Automation/saucedemo/src/tests/visual/homepage-visual.spec.ts:4:5

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
   2 | import { expect } from '@playwright/test';
   3 |
>  4 | test('Visual: Homepage should match design snapshot', async ({
     |     ^ Error: browserType.launch: Executable doesn't exist at /Users/azeezalimi/Library/Caches/ms-playwright/chromium_headless_shell-1169/chrome-mac/headless_shell
   5 |   homePage,
   6 |   page,
   7 | }) => {
   8 |   await homePage.goTo();
   9 |   await expect(page).toHaveScreenshot('homepage.png', { fullPage: true });
  10 | });
  11 |
```