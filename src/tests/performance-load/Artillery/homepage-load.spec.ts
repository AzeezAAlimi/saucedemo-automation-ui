import { chromium } from 'playwright';

module.exports = {
  loadHomePage: async function () {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://www.saucedemo.com');
    await browser.close()
  }
}