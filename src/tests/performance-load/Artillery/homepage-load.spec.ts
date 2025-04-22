import { expect } from '@playwright/test';
import { test } from '../../../fixtures/fixtures';

test.describe('Load Testing', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.goTo();
  });
  test('Accessibility keyboard navigation', async ({ page }) => {
    await page.getByRole('textbox', { name: 'username' }).click();
    await page.getByRole('textbox', { name: 'password' }).click();
    await page.pause();
  });
});