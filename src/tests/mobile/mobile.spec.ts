import { test } from '../../fixtures/fixtures';
import { devices } from '@playwright/test';
import { userData } from '../../testData/testData';

const iphone15ProMax = devices['iPhone 15 Pro Max'];

test.use({ ...iphone15ProMax });

test.describe('Smoke: Login flow', () => {
  test.beforeEach(async ({ homePage, page }) => {
    await homePage.goTo();
    await page.screenshot({
      path: 'src/tests/mobile/screenshot/iphone15ProMax.png',
      fullPage: true,
    });
  });

  test('The standard_user should be able to log in', async ({ homePage }) => {
    const { userName, password } = userData.standardUser;
    await homePage.standardlogin(userName, password);
  });

  test('The locked_out_user should not be able to log in', async ({
    homePage,
  }) => {
    const { userName, password } = userData.lockedUser;
    await homePage.lockedOutUserlogin(userName, password);
  });
});
