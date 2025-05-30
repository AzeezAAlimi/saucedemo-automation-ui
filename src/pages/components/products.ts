import { expect, type Locator, type Page } from '@playwright/test';

export class Products {
  private readonly page: Page;
  private readonly products: Locator;
  private readonly productList: Locator;
  private readonly productTitle: Locator;
  private readonly productDescription: Locator;
  private readonly productPrice: Locator;
  private readonly addToCartBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.products = page.locator('[class="inventory_item"]');
    this.productTitle = page.locator('[class="inventory_item_name "]');
    this.productDescription = page.locator('[class="inventory_item_desc"]');
    this.productPrice = page.locator('[class="inventory_item_price"]');
    this.addToCartBtn = page.getByRole('button', { name: 'Add to cart' });
  }

  async validateProductDetails() {
    const product = await this.products.count();
    console.log(`Total products found : ${product}`);
    for (let i = 0; i < product; i++) {
      const title = await this.products
        .nth(i)
        .locator(this.productTitle)
        .innerText();
      console.log(`Product ${i + 1} title : ${title}`);
      if (!title) {
        throw new Error(`Product ${i + 1} is missing a title`);
      }

      const description = await this.products
        .nth(i)
        .locator(this.productDescription)
        .innerText();
      console.log(`Product ${i + 1} Description : ${title}`);
      if (!description) {
        throw new Error(`Product ${i + 1} is missing a description`);
      }

      const price = await this.products
        .nth(i)
        .locator(this.productPrice)
        .innerText();
      console.log(`Product ${i + 1} Price : ${price}`);
      if (!price) {
        throw new Error(`Product ${i + 1} is missing a price`);
      }

      const addToCart = await this.products
        .nth(i)
        .locator(this.addToCartBtn)
        .innerText();
      console.log(`Product ${i + 1} addToCart : ${addToCart}`);
      if (!addToCart) {
        throw new Error(`Product ${i + 1} is missing a addToCart`);
      }
    }
  }

  async addProductToCartByIndex(index: number) {
    await this.products
      .nth(index)
      .getByRole('button', { name: 'Add to cart' })
      .click();
  }

  async addToCartByName(addByProductName: string) {
    const productNameCount = await this.products.count();
    //console.log(productNameCount);
    for (let i = 0; i < productNameCount; i++) {
      const product = this.products.nth(i);
      const name = await product.locator(this.productTitle).textContent();
      //console.log(name);
      if (name?.trim() === addByProductName) {
        await product.locator(this.addToCartBtn).click();
        console.log(`Product ${addByProductName} is added to the cart`);
        return;
      }
    }
    throw new Error(`Product ${addByProductName} is not found on the page`);
  }
}
