// playwright-dev-page.js
const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.user = page.locator('[data-test="username"]')
    this.pass = page.locator('[data-test="password"]')
    this.lbtn = page.locator('[data-test="login-button"]')
    
  }

    async inputUser(user){
    await this.user.fill(user);
  }

  async inputPassword(password){
    await this.pass.fill(password);
  }

  async submitBtnLogin(){
    await this.lbtn.click();
  }


}