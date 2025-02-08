import { Page } from 'playwright';

class SignupPopup {
  constructor(page) {
    this.page = page;
  }

  async setUsername(username) {
    await this.page.getByRole('textbox', { name: 'Username:' }).click();
    await this.page.getByRole('textbox', { name: 'Username:' }).fill(username);
  }

  async setPassword(password) {
    await this.page.getByRole('textbox', { name: 'Password:' }).click();
    await this.page.getByRole('textbox', { name: 'Password:' }).fill(password);
  }

  async clickSignupThenAcceptAlert() {
    this.page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.accept().catch(() => {});
    });
    await this.page.getByRole('button', { name: 'Sign up' }).click();
  }
}

export default SignupPopup;