import { expect, type Locator, type Page } from '@playwright/test';

export class ProductSorting {
  private readonly page: Page;
  private readonly sortDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sortDropdown = page.locator('[class="product_sort_container"]');
  }

  async sortBy(optionValue: 'az' | 'za' | 'lohi' | 'hilo') {
    await this.sortDropdown.click();
    await this.sortDropdown.selectOption(optionValue);
  }
}
