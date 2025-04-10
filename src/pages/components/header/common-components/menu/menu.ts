import { expect, type Locator, type Page } from '@playwright/test';

export class Menu {
  private readonly page: Page;
  private readonly menuBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menuBtn = page.getByRole('button', { name: 'Open Menu' });
  }

  async clickOnMenu() {}
}
