import { expect, Locator, type Page } from '@playwright/test';
import { Header } from './components/header/headerSection';
import { Footer } from './components/footer/footerSection';

export class CheckoutSteptwoPage {
  private readonly page: Page;
  public readonly header: Header;
  public readonly footer: Footer;
  private readonly cancelBtn: Locator;
  private readonly finishBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);
    this.footer = new Footer(page);
    this.cancelBtn = page.getByRole('button', {
      name: 'Go back Cancel',
    });
    this.finishBtn = page.getByRole('button', { name: 'Finish' });
  }

  async checkoutStepTwoPageLoaded() {
    await expect(this.page).toHaveURL(
      'https://www.saucedemo.com/checkout-step-two.html',
    );
    await expect(this.page.getByText('Swag Labs')).toContainText('Swag Labs');
    await expect(this.page.getByText('Checkout: Overview')).toContainText(
      'Checkout: Overview',
    );
    await expect(this.page.getByText('Payment Information:')).toContainText(
      'Payment Information:',
    );
    await expect(this.page.getByText('SauceCard #31337')).toContainText(
      'SauceCard #31337',
    );
    await expect(this.page.getByText('Shipping Information:')).toContainText(
      'Shipping Information:',
    );
    await expect(
      this.page.getByText('Free Pony Express Delivery!'),
    ).toContainText('Free Pony Express Delivery!');
    await expect(this.cancelBtn).toBeVisible();
    await expect(this.finishBtn).toBeVisible();
  }

  async clickonCancelBtn() {
    await this.cancelBtn.isVisible();
    await this.cancelBtn.click();
    await expect(this.page).toHaveURL(
      'https://www.saucedemo.com/inventory.html',
    );
  }

  async getProductNamesInCheckout(): Promise<string[]> {
    return await this.page
      .locator('[class="inventory_item_name"]')
      .allInnerTexts();
  }

  async verifyProductNamesMatch(cartNames: string[]) {
    const checkoutNames = await this.getProductNamesInCheckout();
    expect(checkoutNames.sort()).toEqual(cartNames.sort());
  }

  async PriceTotal() {
    await expect(this.page.getByText('Price Total')).toContainText(
      'Price Total',
    );
    await expect(
      this.page.getByText('Item total: $59.980000000000004'),
    ).toContainText('Item total: $59.980000000000004');
    await expect(this.page.getByText('Tax: $4.80')).toContainText('Tax: $4.80');
    await expect(this.page.getByText('Total: $64.78')).toContainText(
      'Total: $64.78',
    );
  }

  async clickonFinishBtn() {
    await this.finishBtn.isVisible();
    await this.finishBtn.click();
    await expect(this.page).toHaveURL(
      'https://www.saucedemo.com/checkout-complete.html',
    );
  }
}
