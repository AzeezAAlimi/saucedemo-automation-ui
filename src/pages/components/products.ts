import { expect, type Locator, type Page } from '@playwright/test';

export class Products {
  private readonly page: Page;
  private readonly products: Locator;

  constructor(page: Page) {
    this.page = page;
    this.products = page.locator('[class="inventory_item"]');
  }

  async addProductToCartByIndex(index: number) {
    await this.products
      .nth(index)
      .getByRole('button', { name: 'Add to cart' })
      .click();
  }

  async getProductNames(): Promise<string[]> {
    return await this.page
      .locator('[class="inventory_item_name"]')
      .allInnerTexts();
  }
}
