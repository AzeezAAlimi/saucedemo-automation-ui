import { expect } from '@playwright/test';
import { test } from '../../../fixtures/fixtures';
import { AxeBuilder } from '@axe-core/playwright';

test.describe('Accessibility', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.goTo();
  });
  test('Accessibility keyboard navigation', async ({ page }) => {
    await page.getByRole('textbox', { name: 'username' }).click();
    await page.keyboard.type('s');
    await page.keyboard.type('t');
    await page.keyboard.type('a');
    await page.keyboard.type('n');
    await page.keyboard.type('d');
    await page.keyboard.type('a');
    await page.keyboard.type('r');
    await page.keyboard.type('d');
    await page.keyboard.type('_');
    await page.keyboard.type('u');
    await page.keyboard.type('s');
    await page.keyboard.type('e');
    await page.keyboard.type('r');
    await page.getByRole('textbox', { name: 'password' }).click();
    await page.keyboard.type('s');
    await page.keyboard.type('e');
    await page.keyboard.type('c');
    await page.keyboard.type('r');
    await page.keyboard.type('e');
    await page.keyboard.type('t');
    await page.keyboard.type('_');
    await page.keyboard.type('s');
    await page.keyboard.type('a');
    await page.keyboard.type('u');
    await page.keyboard.type('c');
    await page.keyboard.type('e');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await page.pause();
  });

  test('Axe - Analysis and reporting with tags', async ({ page }) => {
    const report = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();
    expect(report.violations).toHaveLength(0);
  });

  test('Axe - Analysis and reporting without tags', async ({ page }) => {
    const report = await new AxeBuilder({ page }).analyze();
    expect(report.violations).toHaveLength(0);
    expect(report.violations).toEqual([]);
  });

  test('Accessibility assertions - a11y matches', async ({ page }) => {
    await expect(page.locator('[class="submit-button btn_action"]')).toHaveRole(
      'button',
    );
    await expect(
      page.locator('[class="submit-button btn_action"]'),
    ).toHaveAccessibleName('Login');
  });
});
