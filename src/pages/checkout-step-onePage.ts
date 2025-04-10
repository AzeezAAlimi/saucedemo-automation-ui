import { expect, Locator, type Page } from '@playwright/test';
import { Header } from './components/header/headerSection';
import { Footer } from './components/footer/footerSection';

export class CheckoutStepOnePage {
  private readonly page: Page;
  public readonly header: Header;
  public readonly footer: Footer;
  private readonly firstNameInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly zipPostalCodeInput: Locator;
  private readonly cancelBtn: Locator;
  private readonly continueBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);
    this.footer = new Footer(page);
    this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
    this.zipPostalCodeInput = page.getByRole('textbox', {
      name: 'Zip/Postal Code',
    });
    this.cancelBtn = page.getByRole('button', {
      name: 'Go back Cancel',
    });
    this.continueBtn = page.getByRole('button', { name: 'Continue' });
  }

  async checkoutStepOnePageLoaded() {
    await expect(this.page).toHaveURL(
      'https://www.saucedemo.com/checkout-step-one.html',
    );
    await expect(this.page.getByText('Swag Labs')).toContainText('Swag Labs');
    await expect(
      this.page.getByText('Checkout: Your Information'),
    ).toContainText('Checkout: Your Information');
    await expect(this.firstNameInput).toBeVisible();
    await expect(this.lastNameInput).toBeVisible();
    await expect(this.zipPostalCodeInput).toBeVisible();
    await expect(this.cancelBtn).toBeVisible();
    await expect(this.continueBtn).toBeVisible();
  }

  async fillYourInfo(firstName: string, lastName: string, zipCode: string) {
    await this.firstNameInput.fill(firstName);
    await expect(this.firstNameInput).toBeVisible();
    await this.lastNameInput.fill(lastName);
    await expect(this.lastNameInput).toBeVisible();
    await this.zipPostalCodeInput.fill(zipCode);
    await expect(this.zipPostalCodeInput).toBeVisible();
  }

  async clickonCancelBtn() {
    await this.cancelBtn.isVisible();
    await this.cancelBtn.click();
    await expect(this.page).toHaveURL('https://www.saucedemo.com/cart.html');
  }

  async clickonContinueBtn() {
    await this.continueBtn.isVisible();
    await this.continueBtn.click();
    await expect(this.page).toHaveURL(
      'https://www.saucedemo.com/checkout-step-two.html',
    );
  }
}
