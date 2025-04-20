import { test } from '../../fixtures/fixtures';
import { userData } from '../../config/testData';
import { expect } from '@playwright/test';

test('Smoke: Standard user login and verifies inventory page & the products visibility', async ({
  homePage,
  inventoryPage,
  cartPage,
}) => {
  const { username, password } = userData.standardUser;
  await homePage.goTo();
  await homePage.standardlogin(username, password);
  await inventoryPage.inventoryPageLoaded();
  await inventoryPage.available.validateProductDetails();
  await inventoryPage.available.addToCartByName('Sauce Labs Backpack');
  await inventoryPage.available.addToCartByName('Sauce Labs Bike Light');
  await inventoryPage.header.cart.clickOnCart();
  const product = await cartPage.productInCart();
  expect(product).toContain('Sauce Labs Backpack');
  expect(product).toContain('Sauce Labs Bike Light');
});
