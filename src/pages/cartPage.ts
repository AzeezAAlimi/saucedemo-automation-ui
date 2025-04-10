import { expect, Locator, type Page } from '@playwright/test';
import { Header } from './components/header/headerSection';
import { Footer } from './components/footer/footerSection';

export class CartPage {
  private readonly page: Page;
  public readonly header: Header;
  public readonly footer: Footer;
  private readonly continueShoppingBtn: Locator;
  private readonly checkoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);
    this.footer = new Footer(page);
    this.continueShoppingBtn = page.getByRole('button', {
      name: 'Go back Continue Shopping',
    });
    this.checkoutBtn = page.getByRole('button', { name: 'Checkout' });
  }

  async cartPageLoaded() {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/cart.html');
    await expect(this.page.getByText('Swag Labs')).toContainText('Swag Labs');
    await expect(this.page.getByText('Your Cart')).toContainText('Your Cart');
    await expect(this.page.getByText('QTY')).toContainText('QTY');
    await this.continueShoppingBtn.isVisible();
    await this.checkoutBtn.isVisible();
  }

  async productInCart(): Promise<string[]> {
    const items = this.page.locator('[class="inventory_item_name"]');
    const count = await items.count();
    if (count === 0) {
      return [];
    }
    const productNames = await items.allInnerTexts();
    return productNames;
  }

  async clickonContinueShoppingBtn() {
    await this.continueShoppingBtn.isVisible();
    await this.continueShoppingBtn.click();
    await expect(this.page).toHaveURL(
      'https://www.saucedemo.com/inventory.html',
    );
  }

  async clickonCheckoutBtn() {
    await this.checkoutBtn.isVisible();
    await this.checkoutBtn.click();
    await expect(this.page).toHaveURL(
      'https://www.saucedemo.com/checkout-step-one.html',
    );
  }
}
