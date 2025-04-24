# Test info

- Name: Smoke: Standard user login and verifies inventory page & the products visibility
- Location: /Users/azeezalimi/Desktop/Automation/saucedemo/src/tests/smoke/inventory.spec.ts:5:5

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
   2 | import { userData, productsData } from '../../testData/testData';
   3 | import { expect } from '@playwright/test';
   4 |
>  5 | test('Smoke: Standard user login and verifies inventory page & the products visibility', async ({
     |     ^ Error: browserType.launch: Executable doesn't exist at /Users/azeezalimi/Library/Caches/ms-playwright/chromium_headless_shell-1169/chrome-mac/headless_shell
   6 |   homePage,
   7 |   inventoryPage,
   8 |   cartPage,
   9 | }) => {
  10 |   const { userName, password } = userData.standardUser;
  11 |   const { backPack, bikeLight } = productsData;
  12 |   await homePage.goTo();
  13 |   await homePage.standardlogin(userName, password);
  14 |   await inventoryPage.inventoryPageLoaded();
  15 |   await inventoryPage.products.validateProductDetails();
  16 |   await inventoryPage.products.addToCartByName(backPack);
  17 |   await inventoryPage.products.addToCartByName(bikeLight);
  18 |   await inventoryPage.header.cart.clickOnCart();
  19 |   const [names] = await cartPage.productInCart();
  20 |   expect(names).toContain(backPack);
  21 |   expect(names).toContain(bikeLight);
  22 | });
  23 |
```