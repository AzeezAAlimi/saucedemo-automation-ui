import { expect, Locator, type Page } from '@playwright/test';
import { Header } from './components/header/headerSection';
import { Footer } from './components/footer/footerSection';

export class CheckoutCompletePage {
  private readonly page: Page;
  public readonly header: Header;
  public readonly footer: Footer;
  private readonly backHomeBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);
    this.footer = new Footer(page);
    this.backHomeBtn = page.getByRole('button', {
      name: 'Back Home',
    });
  }

  async checkoutCompletePageLoaded() {
    await expect(this.page).toHaveURL(
      'https://www.saucedemo.com/checkout-complete.html',
    );
    await expect(this.page.getByText('Swag Labs')).toContainText('Swag Labs');
    await expect(this.page.getByText('Checkout: Complete!')).toContainText(
      'Checkout: Complete!',
    );
    await expect(
      this.page.getByRole('heading', { name: 'Thank you for your order!' }),
    ).toContainText('Thank you for your order!');
    await expect(
      this.page.getByText(
        'Your order has been dispatched, and will arrive just as fast as the pony can get there!',
      ),
    ).toContainText(
      'Your order has been dispatched, and will arrive just as fast as the pony can get there!',
    );
    await expect(this.backHomeBtn).toBeVisible();
  }

  async clickonBackHomeBtn() {
    await this.backHomeBtn.isVisible();
    await this.backHomeBtn.click();
    await expect(this.page).toHaveURL(
      'https://www.saucedemo.com/inventory.html',
    );
  }
}
