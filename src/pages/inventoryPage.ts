import { expect, Locator, type Page } from '@playwright/test';
import { Header } from './components/header/headerSection';
import { Footer } from './components/footer/footerSection';
import { ProductSorting } from './components/productSorting';
import { Products } from './components/products';

export class InventoryPage {
  private readonly page: Page;
  public readonly header: Header;
  public readonly footer: Footer;
  public readonly productSorting: ProductSorting;
  public readonly products: Products;

  constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);
    this.footer = new Footer(page);
    this.productSorting = new ProductSorting(page);
    this.products = new Products(page);
  }

  async inventoryPageLoaded() {
    await expect(this.page).toHaveURL(
      'https://www.saucedemo.com/inventory.html',
    );
    await expect(this.page.getByText('Swag Labs')).toContainText('Swag Labs');
    await expect(this.page.locator('[class="inventory_item"]')).toHaveCount(6);
  }
}
