import { test } from '../../fixtures/fixtures';
import { userData } from '../../testData/testData';
import CustomerDataArray from '../../testData/customerData.json';

test.describe('Add-to-Cart and Checkout Step One setup using product data', () => {
  test.beforeEach(async ({ homePage, inventoryPage, cartPage }) => {
    const { userName, password } = userData.standardUser;
    await homePage.goTo();
    await homePage.standardlogin(userName, password);
    await inventoryPage.products.addProductToCartByIndex(1);
    await inventoryPage.header.cart.clickOnCart();
    await cartPage.clickonCheckoutBtn();
  });

  for (const data of CustomerDataArray) {
    test(`Should fill checkout info for "${data.firstName} ${data.lastName}  ${data.zipPostalCode}" successfully`, async ({
      checkoutStepOnePage,
    }) => {
      await checkoutStepOnePage.fillYourInfo(
        data.firstName,
        data.lastName,
        data.zipPostalCode,
      );
    });
  }
});
