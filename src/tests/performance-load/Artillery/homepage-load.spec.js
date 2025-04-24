"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const playwright_1 = require("playwright");
module.exports = {
    loadHomePage: async function () {
        const browser = await playwright_1.chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://www.saucedemo.com');
        await browser.close();
    }
};
