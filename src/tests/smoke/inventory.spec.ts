import { test } from '../../fixtures/fixtures';
import { userData, productsData } from '../../data/testData';
import { expect } from '@playwright/test';

test('Smoke: Standard user login and verifies inventory page & the products visibility', async ({
  homePage,
  inventoryPage,
  cartPage,
}) => {
  const { userName, password } = userData.standardUser;
  const { backPack, bikeLight } = productsData;
  await homePage.goTo();
  await homePage.standardlogin(userName, password);
  await inventoryPage.inventoryPageLoaded();
  await inventoryPage.products.validateProductDetails();
  await inventoryPage.products.addToCartByName(backPack);
  await inventoryPage.products.addToCartByName(bikeLight);
  await inventoryPage.header.cart.clickOnCart();
  const [names] = await cartPage.productInCart();
  expect(names).toContain(backPack);
  expect(names).toContain(bikeLight);
});
