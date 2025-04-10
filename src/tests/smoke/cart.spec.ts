import { test } from '../../fixtures/fixtures';
import { userData } from '../../config/testData';

test('Smoke: Standard user login and basic cart functionality', async ({
  homePage,
  inventoryPage,
}) => {
  const { username, password } = userData.standardUser;
  await homePage.goTo();
  await homePage.standardlogin(username, password);
  await inventoryPage.header.cart.cartAmount(0);
  await inventoryPage.products.addProductToCartByIndex(1);
  await await inventoryPage.header.cart.cartAmount(1);
  await inventoryPage.header.cart.clickOnCart();
});
