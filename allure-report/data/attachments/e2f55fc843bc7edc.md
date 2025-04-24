# Test info

- Name: Smoke: Standard user login and basic cart functionality
- Location: /Users/azeezalimi/Desktop/Automation/saucedemo/src/tests/smoke/cart.spec.ts:4:5

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
   3 |
>  4 | test('Smoke: Standard user login and basic cart functionality', async ({
     |     ^ Error: browserType.launch: Executable doesn't exist at /Users/azeezalimi/Library/Caches/ms-playwright/chromium_headless_shell-1169/chrome-mac/headless_shell
   5 |   homePage,
   6 |   inventoryPage,
   7 |   cartPage,
   8 | }) => {
   9 |   const { userName, password } = userData.standardUser;
  10 |   const { onesie } = productsData;
  11 |   await homePage.goTo();
  12 |   await homePage.standardlogin(userName, password);
  13 |   await inventoryPage.header.cart.cartAmount(0);
  14 |   await inventoryPage.products.addToCartByName(onesie);
  15 |   await inventoryPage.header.cart.cartAmount(1);
  16 |   await inventoryPage.header.cart.clickOnCart();
  17 |   await cartPage.productInCart();
  18 |   await cartPage.clickonContinueShoppingBtn();
  19 | });
  20 |
```
