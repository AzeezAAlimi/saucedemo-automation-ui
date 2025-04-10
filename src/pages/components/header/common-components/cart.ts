import { expect, type Locator, type Page } from '@playwright/test';

export class Cart {
  private readonly page: Page;
  private readonly cartBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartBtn = page.locator('[class="shopping_cart_container"]');
  }

  async clickOnCart() {
    await this.cartBtn.click();
    await this.page.waitForURL('https://www.saucedemo.com/cart.html');
  }

  async cartAmount(amount: number) {
    if (amount === 0) {
      await expect(
        this.cartBtn.locator('[class="shopping_cart_badge"]'),
      ).not.toBeVisible();
    } else {
      await expect(this.cartBtn).toContainText(amount.toString());
    }
  }
}
