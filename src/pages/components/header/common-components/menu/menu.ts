import { expect, type Locator, type Page } from '@playwright/test';

export class Menu {
  private readonly page: Page;
  private readonly menuBtn: Locator;
  private readonly allItemsBtn: Locator;
  private readonly logoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menuBtn = page.getByRole('button', { name: 'Open Menu' });
    this.allItemsBtn = page.getByRole('link', { name: 'All Items' });
    this.logoutBtn = page.getByRole('link', { name: 'Logout' });
  }

  async clickOnMenuBtn() {
    await this.menuBtn.click();
    await expect(
      this.page.locator('[class="bm-item-list"]').getByText('All Items'),
    ).toContainText('All Items');
    await expect(
      this.page.locator('[class="bm-item-list"]').getByText('About'),
    ).toContainText('About');
    await expect(
      this.page.locator('[class="bm-item-list"]').getByText('Logout'),
    ).toContainText('Logout');
    await expect(
      this.page.locator('[class="bm-item-list"]').getByText('Reset App State'),
    ).toContainText('Reset App State');
    //await this.page.getByRole('button', { name: 'Close Menu'}).click();
  }

  async clickOnAllItems() {
    await this.allItemsBtn.click();
    await expect(this.page).toHaveURL(
      'https://www.saucedemo.com/inventory.html',
    );
  }

  async clickOnLogout() {
    await this.logoutBtn.click();
    await expect(this.page).toHaveURL('https://www.saucedemo.com/');
  }
}
