import { test } from '../../fixtures/fixtures';
import { userData } from '../../config/testData';

test('Smoke: Standard user can log in and verify footer UI elements', async ({
  homePage,
  inventoryPage,
}) => {
  const { username, password } = userData.standardUser;
  await homePage.goTo();
  await homePage.standardlogin(username, password);
  await inventoryPage.footer.footerText();
  await inventoryPage.footer.facebookIcon.clickonFacebookIcon();
  await inventoryPage.footer.twitterXIcon.clickonTwitterXIcon();
  await inventoryPage.footer.linkedInIcon.clickonLinkedInIcon();
});
