import { expect, Locator, type Page } from '@playwright/test';
import { BASE_URL } from '../utilities/env';

export class HomePage {
  private readonly page: Page;
  private readonly userNameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginBtn: Locator;
  private readonly loginErrorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNameInput = page.getByRole('textbox', { name: 'username' });
    this.passwordInput = page.getByRole('textbox', { name: 'password' });
    this.loginBtn = page.getByRole('button', { name: 'Login' });
    this.loginErrorMessage = page.getByRole('heading', {
      name: 'Epic sadface: Sorry, this user has been locked out.',
    });
  }

  async goTo() {
    await this.page.goto(BASE_URL);
    await expect(this.page.getByText('Swag Labs')).toContainText('Swag Labs');
  }

  async standardlogin(email: string, password: string) {
    await this.userNameInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }

  async lockedOutUserlogin(email: string, password: string) {
    await this.userNameInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
    await expect(this.loginErrorMessage).toContainText(
      'Epic sadface: Sorry, this user has been locked out.',
    );
  }
}
