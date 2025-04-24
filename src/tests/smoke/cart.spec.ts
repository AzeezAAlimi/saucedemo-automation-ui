import { test } from '../../fixtures/fixtures';
import { userData, productsData } from '../../data/testData';

test('Smoke: Standard user login and basic cart functionality', async ({
  homePage,
  inventoryPage,
  cartPage,
}) => {
  const { userName, password } = userData.standardUser;
  const { onesie } = productsData;
  await homePage.goTo();
  await homePage.standardlogin(userName, password);
  await inventoryPage.header.cart.cartAmount(0);
  await inventoryPage.products.addToCartByName(onesie);
  await inventoryPage.header.cart.cartAmount(1);
  await inventoryPage.header.cart.clickOnCart();
  await cartPage.productInCart();
  await cartPage.clickonContinueShoppingBtn();
});
