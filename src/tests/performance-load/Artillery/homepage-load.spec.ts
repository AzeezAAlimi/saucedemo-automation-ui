import { chromium, Page } from 'playwright';

async function goToURL(page: Page) {
  await page.goto('https://www.saucedemo.com');
}

async function login(page: Page) {
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
}

async function validateProduct(page: Page) {
  await page.waitForSelector('[class="inventory_list"]');
}

async function addProductToCart(page: Page) {
  await page
    .locator('[class="inventory_item"]')
    .getByRole('button', { name: 'Add to cart' })
    .nth(0)
    .click();
  await page.locator('[class="shopping_cart_link"]').click();
}

async function continueToCheckout(page: Page) {
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByPlaceholder('First Name').fill('Mark');
  await page.getByPlaceholder('Last Name').fill('James');
  await page.getByPlaceholder('Zip/Postal Code').fill('123456');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Finish' }).click();
  await page.getByRole('button', { name: 'Back Home' }).click();
}

async function logout(page: Page) {
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
}

module.exports = {
  fullUserJourney: async function () {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await goToURL(page);
    await login(page);
    await validateProduct(page);
    await addProductToCart(page);
    await continueToCheckout(page);
    await logout(page);
    await browser.close();
  },
};
