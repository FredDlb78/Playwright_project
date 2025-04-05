class SignupPopup {
  constructor(page, abstractPage) {
    this.page = page;
    this.abstractPage = abstractPage;
  }

  async setUsername(username) {
    await this.abstractPage.step(`Set username to "${username}"`, async () => {
      const field = this.page.locator('#sign-username');
      await field.waitFor({ state: 'visible' });
      await field.fill(username);
    });
  }

  async setPassword(password) {
    await this.abstractPage.step(`Set password to "${password}"`, async () => {
      const field = this.page.locator('#sign-password');
      await field.waitFor({ state: 'visible' });
      await field.fill(password);
    });
  }

  async clickSignupThenAcceptAlert() {
    await this.abstractPage.step('Submit signup and accept alert', async () => {
      this.page.once('dialog', dialog => dialog.accept());
      await this.page.locator('button[onclick="register()"]').click();
    });
  }

  async clickSignupThenDismissAlert() {
    await this.abstractPage.step('Submit signup and dismiss alert', async () => {
      this.page.once('dialog', dialog => dialog.dismiss());
      await this.page.locator('button[onclick="register()"]').click();
    });
  }

  async retrieveTitle() {
    return await this.abstractPage.step('Get signup modal title', async () => {
      const titleLocator = this.page.locator('#signInModalLabel');
      await titleLocator.waitFor({ state: 'visible' });
      return (await titleLocator.textContent()).trim();
    });
  }
}

export default SignupPopup;