import { test } from '../fixtures/fixtures';
import { userData } from '../config/testData';
import { expect } from '@playwright/test';

test('Should validate all products in the list', async ({
  homePage,
  inventoryPage,
  page,
  cartPage,
  checkoutStepOnePage,
  checkoutSteptwoPage,
  checkoutCompletePage,
}) => {
  const { username, password } = userData.standardUser;
  await homePage.goTo();
  await homePage.standardlogin(username, password);
  await inventoryPage.inventoryPageLoaded();
  await inventoryPage.products.validateProductDetails();
  await inventoryPage.products.addToCartByName('Sauce Labs Backpack');
  await inventoryPage.products.addToCartByName('Sauce Labs Bike Light');
  await inventoryPage.header.cart.cartAmount(2);
  await inventoryPage.header.cart.clickOnCart();
  const [names, prices] = await cartPage.productInCart1();
  await cartPage.clickonCheckoutBtn();
  await checkoutStepOnePage.fillYourInfo('azeez', 'alimi', '12343');
  await checkoutStepOnePage.clickonContinueBtn();
  await checkoutSteptwoPage.verifyProductNamesMatch(names);
  await checkoutSteptwoPage.verifyProductCostMatch(prices);
  await page.pause();
});