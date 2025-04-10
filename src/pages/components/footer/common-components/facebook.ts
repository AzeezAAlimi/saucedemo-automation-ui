import { expect, type Locator, type Page } from '@playwright/test';

export class Facebook {
  private readonly page: Page;
  private readonly facebookIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.facebookIcon = page.getByRole('link', { name: 'Facebook' });
  }

  async clickonFacebookIcon() {
    const [newTab] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.facebookIcon.click(),
    ]);
    await newTab.waitForLoadState();
    await expect(newTab).toHaveURL('https://www.facebook.com/saucelabs');
    await newTab.close();
  }
}
