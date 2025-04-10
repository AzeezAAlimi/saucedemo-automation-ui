import { expect, type Locator, type Page } from '@playwright/test';

export class LinkedIn {
  private readonly page: Page;
  private readonly linkedInIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.linkedInIcon = page.getByRole('link', { name: 'LinkedIn' });
  }

  async clickonLinkedInIcon() {
    const [newTab] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.linkedInIcon.click(),
    ]);
    await newTab.waitForLoadState();
    await expect(newTab).toHaveURL(
      'https://www.linkedin.com/company/sauce-labs/',
    );
    await newTab.close();
  }
}
