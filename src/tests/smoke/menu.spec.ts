import { test } from '../../fixtures/fixtures';
import { userData } from '../../testData/testData';

test.describe('Smoke: Menu item tests', () => {
  test.beforeEach(async ({ homePage, inventoryPage }) => {
    const { userName, password } = userData.standardUser;
    await homePage.goTo();
    await homePage.standardlogin(userName, password);
    await inventoryPage.header.menu.clickOnMenuBtn();
  });

  test('Smoke: Verifies that the "All items" option in the menu is functional', async ({
    inventoryPage,
  }) => {
    await inventoryPage.header.menu.clickOnAllItems();
  });

  test('Smoke: Verifies that the "Logout" option in the menu is functional', async ({
    inventoryPage,
  }) => {
    await inventoryPage.header.menu.clickOnLogout();
  });
});
