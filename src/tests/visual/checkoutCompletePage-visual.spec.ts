import { test } from '../../fixtures/fixtures';
import { userData } from '../../testData/testData';
import { expect } from '@playwright/test';

test('Visual: Checkout completion screen renders correctly', async ({
  homePage,
  inventoryPage,
  cartPage,
  checkoutStepOnePage,
  checkoutSteptwoPage,
  checkoutCompletePage,
  page,
}) => {
  const { userName, password, firstName, lastName, zipCode } =
    userData.standardUser;
  await homePage.goTo();
  await homePage.standardlogin(userName, password);
  await inventoryPage.productSorting.sortBy('az');
  await inventoryPage.products.addProductToCartByIndex(1);
  await inventoryPage.header.cart.clickOnCart();
  const [names] = await cartPage.productInCart();
  await cartPage.clickonCheckoutBtn();
  await checkoutStepOnePage.fillYourInfo(firstName, lastName, zipCode);
  await checkoutStepOnePage.clickonContinueBtn();
  await checkoutSteptwoPage.verifyProductNamesMatch(names);
  await checkoutSteptwoPage.clickonFinishBtn();
  await expect(page).toHaveScreenshot('checkoutCompletePage.png', {
    fullPage: true,
  });
});
