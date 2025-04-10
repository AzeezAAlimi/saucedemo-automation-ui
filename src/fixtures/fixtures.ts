import { test as base } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { InventoryPage } from '../pages/inventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutStepOnePage } from '../pages/checkout-step-onePage';
import { CheckoutSteptwoPage } from '../pages/checkout-step-twoPage';
import { CheckoutCompletePage } from '../pages/checkout-completePage';

type Pages = {
  homePage: HomePage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutStepOnePage: CheckoutStepOnePage;
  checkoutSteptwoPage: CheckoutSteptwoPage;
  checkoutCompletePage: CheckoutCompletePage;
};

export const test = base.extend<Pages>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutStepOnePage: async ({ page }, use) => {
    await use(new CheckoutStepOnePage(page));
  },
  checkoutSteptwoPage: async ({ page }, use) => {
    await use(new CheckoutSteptwoPage(page));
  },
  checkoutCompletePage: async ({ page }, use) => {
    await use(new CheckoutCompletePage(page));
  },
});
