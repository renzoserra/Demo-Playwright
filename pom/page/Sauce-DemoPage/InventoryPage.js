// playwright-dev-page.js
const { expect } = require('@playwright/test');

exports.InventoryPage = class InventoryPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.titlePage = page.locator('.title')
  }
}