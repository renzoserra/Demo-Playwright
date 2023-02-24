// example.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../page/Sauce-DemoPage/LoginPage');
const {InventoryPage} =require('../../page/Sauce-DemoPage/InventoryPage');
const{URLS,CREDENTIALS} =require('../../data/Constanst')
import dotenv from 'dotenv'
dotenv.config()

test.only('Login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

    await page.goto(URLS.ULRSAUCEDEMOHOME);
    
    await loginPage.inputUser(CREDENTIALS.SAUCEDEMOUSER);
    await loginPage.inputPassword(CREDENTIALS.SAUCEDEMOPASSWORD);
    await loginPage.submitBtnLogin();
    await expect(page).toHaveURL(URLS.ULRSAUCEDEMOINVENTORY);
    await expect(inventoryPage.titlePage).toHaveText('Products')

});