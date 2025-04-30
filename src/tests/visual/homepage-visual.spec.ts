import { test } from '../../fixtures/fixtures';
import { expect } from '@playwright/test';

test.skip('Visual: Homepage should match design snapshot', async ({
  homePage,
  page,
}) => {
  await homePage.goTo();
  await expect(page).toHaveScreenshot('homepage.png', { fullPage: true });
});
