import { test } from '../../fixtures/fixtures';
import { userData } from '../../config/testData';

test.describe('Smoke: Login flow', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.goTo();
  });

  test('The standard_user should be able to log in', async ({ homePage }) => {
    const { username, password } = userData.standardUser;
    await homePage.standardlogin(username, password);
  });

  test('The locked_out_user should not be able to log in', async ({
    homePage,
  }) => {
    const { username, password } = userData.lockedUser;
    await homePage.lockedOutUserlogin(username, password);
  });
});
