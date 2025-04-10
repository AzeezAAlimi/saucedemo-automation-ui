import { expect, Locator, type Page } from '@playwright/test';
import { Menu } from './common-components/menu/menu';
import { Cart } from './common-components/cart';

export class Header {
  private readonly page: Page;
  public readonly menu: Menu;
  public readonly cart: Cart;

  constructor(page: Page) {
    this.page = page;
    this.menu = new Menu(page);
    this.cart = new Cart(page);
  }
}
