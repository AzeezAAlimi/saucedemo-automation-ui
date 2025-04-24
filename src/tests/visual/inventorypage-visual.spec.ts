import { test } from '../../fixtures/fixtures';
import { userData } from '../../data/testData';
import { expect } from '@playwright/test';

test('Visual: Inventory page renders correctly after login and product sort', async ({
  homePage,
  inventoryPage,
  page,
}) => {
  const { userName, password } = userData.standardUser;
  await homePage.goTo();
  await homePage.standardlogin(userName, password);
  await inventoryPage.productSorting.sortBy('az');
  await inventoryPage.products.addProductToCartByIndex(1);
  await expect(page).toHaveScreenshot('inventoryPage.png', { fullPage: true });
});
