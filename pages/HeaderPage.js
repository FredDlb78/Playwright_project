class HeaderPage {
  constructor(page, abstractPage) {
    this.page = page;
    this.abstractPage = abstractPage;
  }

  async clickSignupMenu() {
    await this.abstractPage.step('Click Signup menu', async () => {
      await this.page.locator('#signin2').waitFor({ state: 'visible' });
      await this.page.locator('#signin2').click();
      await this.page.waitForSelector('#signInModalLabel', { state: 'visible' });
    });
  }

  async clickContactMenu() {
    await this.abstractPage.step('Click Contact menu', async () => {
      await this.page.locator('[data-target="#exampleModal"]').waitFor({ state: 'visible' });
      await this.page.locator('[data-target="#exampleModal"]').click();
      await this.page.waitForSelector('#exampleModal', { state: 'visible' });
    });
  }
}

export default HeaderPage;