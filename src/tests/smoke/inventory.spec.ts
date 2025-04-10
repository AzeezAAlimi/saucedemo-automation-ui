import { test } from '../../fixtures/fixtures';
import { userData } from '../../config/testData';

test('Smoke: Standard user login and verifies inventory page & menu visibility', async ({
  homePage,
  inventoryPage,
}) => {
  const { username, password } = userData.standardUser;
  await homePage.goTo();
  await homePage.standardlogin(username, password);
  await inventoryPage.inventoryPageLoaded();
  await inventoryPage.header.menu.clickOnMenu();
});
