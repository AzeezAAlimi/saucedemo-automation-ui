# Test info

- Name: E2E: The standard user can log in and complete a product purchase successfully
- Location: /Users/azeezalimi/Desktop/Automation/saucedemo/src/tests/e2e/e2e.spec.ts:4:5

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
>  4 | test('E2E: The standard user can log in and complete a product purchase successfully', async ({
     |     ^ Error: browserType.launch: Executable doesn't exist at /Users/azeezalimi/Library/Caches/ms-playwright/chromium_headless_shell-1169/chrome-mac/headless_shell
   5 |   homePage,
   6 |   inventoryPage,
   7 |   cartPage,
   8 |   checkoutStepOnePage,
   9 |   checkoutSteptwoPage,
  10 |   checkoutCompletePage,
  11 | }) => {
  12 |   const { userName, password, firstName, lastName, zipCode } =
  13 |     userData.standardUser;
  14 |   await homePage.goTo();
  15 |   await homePage.standardlogin(userName, password);
  16 |   await inventoryPage.inventoryPageLoaded();
  17 |   await inventoryPage.productSorting.sortBy('lohi');
  18 |   await inventoryPage.products.addProductToCartByIndex(5);
  19 |   await inventoryPage.productSorting.sortBy('az');
  20 |   await inventoryPage.products.addProductToCartByIndex(1);
  21 |   await inventoryPage.header.cart.clickOnCart();
  22 |   await cartPage.cartPageLoaded();
  23 |   const [names, prices] = await cartPage.productInCart();
  24 |   await cartPage.clickonCheckoutBtn();
  25 |   await checkoutStepOnePage.checkoutStepOnePageLoaded();
  26 |   await checkoutStepOnePage.fillYourInfo(firstName, lastName, zipCode);
  27 |   await checkoutStepOnePage.clickonContinueBtn();
  28 |   await checkoutSteptwoPage.checkoutStepTwoPageLoaded();
  29 |   await checkoutSteptwoPage.verifyProductNamesMatch(names);
  30 |   await checkoutSteptwoPage.verifyProductCostMatch(prices);
  31 |   await checkoutSteptwoPage.clickonFinishBtn();
  32 |   await checkoutCompletePage.checkoutCompletePageLoaded();
  33 |   await checkoutCompletePage.clickonBackHomeBtn();
  34 | });
  35 |
```