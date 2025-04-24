# Test info

- Name: Add-to-Cart and Checkout Step One setup using product data >> Should fill checkout info for "Gabriel Martinelli 44444" successfully
- Location: /Users/azeezalimi/Desktop/Automation/saucedemo/src/tests/data-driven-test/checkoutInfo.spec.ts:16:9

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
   3 | import CustomerDataArray from '../../testData/customerData.json';
   4 |
   5 | test.describe('Add-to-Cart and Checkout Step One setup using product data', () => {
   6 |   test.beforeEach(async ({ homePage, inventoryPage, cartPage }) => {
   7 |     const { userName, password } = userData.standardUser;
   8 |     await homePage.goTo();
   9 |     await homePage.standardlogin(userName, password);
  10 |     await inventoryPage.products.addProductToCartByIndex(1);
  11 |     await inventoryPage.header.cart.clickOnCart();
  12 |     await cartPage.clickonCheckoutBtn();
  13 |   });
  14 |
  15 |   for (const data of CustomerDataArray) {
> 16 |     test(`Should fill checkout info for "${data.firstName} ${data.lastName}  ${data.zipPostalCode}" successfully`, async ({
     |         ^ Error: browserType.launch: Executable doesn't exist at /Users/azeezalimi/Library/Caches/ms-playwright/chromium_headless_shell-1169/chrome-mac/headless_shell
  17 |       checkoutStepOnePage,
  18 |     }) => {
  19 |       await checkoutStepOnePage.fillYourInfo(
  20 |         data.firstName,
  21 |         data.lastName,
  22 |         data.zipPostalCode,
  23 |       );
  24 |     });
  25 |   }
  26 | });
  27 |
```
