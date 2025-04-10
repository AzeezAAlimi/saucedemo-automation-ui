import { expect, type Locator, type Page } from '@playwright/test';

export class TwitterX {
  private readonly page: Page;
  private readonly twitterXIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.twitterXIcon = page.getByRole('link', { name: 'Twitter' });
  }

  async clickonTwitterXIcon() {
    const [newTab] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.twitterXIcon.click(),
    ]);
    await newTab.waitForLoadState();
    await expect(newTab).toHaveURL('https://x.com/saucelabs');
    await newTab.close();
  }
}
