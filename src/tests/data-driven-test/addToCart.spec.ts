import { test } from '../../fixtures/fixtures';
import { userData } from '../../testData/testData';
import productDataArray from '../../testData/productData.json';
import { expect } from '@playwright/test';

test.describe('Add-to-Cart tests using product data', () => {
  test.beforeEach(async ({ homePage }) => {
    const { userName, password } = userData.standardUser;
    await homePage.goTo();
    await homePage.standardlogin(userName, password);
  });

  for (const data of productDataArray) {
    test(`Should add "${data.product}" to cart successfully`, async ({
      inventoryPage,
      cartPage,
    }) => {
      await inventoryPage.inventoryPageLoaded();
      await inventoryPage.products.addToCartByName(data.product);
      await inventoryPage.header.cart.clickOnCart();
      const [names] = await cartPage.productInCart();
      expect(names).toContain(data.product);
    });
  }
});
