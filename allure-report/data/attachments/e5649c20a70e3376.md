# Test info

- Name: Add-to-Cart tests using product data >> Should add "Sauce Labs Bike Light" to cart successfully
- Location: /Users/azeezalimi/Desktop/Automation/saucedemo/src/tests/data-driven-test/addToCart.spec.ts:14:9

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
   3 | import productDataArray from '../../testData/productData.json';
   4 | import { expect } from '@playwright/test';
   5 |
   6 | test.describe('Add-to-Cart tests using product data', () => {
   7 |   test.beforeEach(async ({ homePage }) => {
   8 |     const { userName, password } = userData.standardUser;
   9 |     await homePage.goTo();
  10 |     await homePage.standardlogin(userName, password);
  11 |   });
  12 |
  13 |   for (const data of productDataArray) {
> 14 |     test(`Should add "${data.product}" to cart successfully`, async ({
     |         ^ Error: browserType.launch: Executable doesn't exist at /Users/azeezalimi/Library/Caches/ms-playwright/chromium_headless_shell-1169/chrome-mac/headless_shell
  15 |       inventoryPage,
  16 |       cartPage,
  17 |     }) => {
  18 |       await inventoryPage.inventoryPageLoaded();
  19 |       await inventoryPage.products.addToCartByName(data.product);
  20 |       await inventoryPage.header.cart.clickOnCart();
  21 |       const [names] = await cartPage.productInCart();
  22 |       expect(names).toContain(data.product);
  23 |     });
  24 |   }
  25 | });
  26 |
```