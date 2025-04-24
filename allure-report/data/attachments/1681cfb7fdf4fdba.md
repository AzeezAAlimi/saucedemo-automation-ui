# Test info

- Name: Visual: Checkout completion screen renders correctly
- Location: /Users/azeezalimi/Desktop/Automation/saucedemo/src/tests/visual/checkoutCompletePage-visual.spec.ts:5:5

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
   3 | import { expect } from '@playwright/test';
   4 |
>  5 | test('Visual: Checkout completion screen renders correctly', async ({
     |     ^ Error: browserType.launch: Executable doesn't exist at /Users/azeezalimi/Library/Caches/ms-playwright/chromium_headless_shell-1169/chrome-mac/headless_shell
   6 |   homePage,
   7 |   inventoryPage,
   8 |   cartPage,
   9 |   checkoutStepOnePage,
  10 |   checkoutSteptwoPage,
  11 |   checkoutCompletePage,
  12 |   page,
  13 | }) => {
  14 |   const { userName, password, firstName, lastName, zipCode } =
  15 |     userData.standardUser;
  16 |   await homePage.goTo();
  17 |   await homePage.standardlogin(userName, password);
  18 |   await inventoryPage.productSorting.sortBy('az');
  19 |   await inventoryPage.products.addProductToCartByIndex(1);
  20 |   await inventoryPage.header.cart.clickOnCart();
  21 |   const [names] = await cartPage.productInCart();
  22 |   await cartPage.clickonCheckoutBtn();
  23 |   await checkoutStepOnePage.fillYourInfo(firstName, lastName, zipCode);
  24 |   await checkoutStepOnePage.clickonContinueBtn();
  25 |   await checkoutSteptwoPage.verifyProductNamesMatch(names);
  26 |   await checkoutSteptwoPage.clickonFinishBtn();
  27 |   await expect(page).toHaveScreenshot('checkoutCompletePage.png', {
  28 |     fullPage: true,
  29 |   });
  30 | });
  31 |
```
