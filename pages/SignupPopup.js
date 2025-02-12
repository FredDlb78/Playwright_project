
class SignupPopup {
  constructor(page) {
    this.page = page;
  }

  async setUsername(username) {
    await this.page.getByRole('textbox', { name: 'Username:' }).click();
    await this.page.getByRole('textbox', { name: 'Username:' }).fill(username);
    console.log(`Username set to: ${username}`);
  }

  async setPassword(password) {
    await this.page.getByRole('textbox', { name: 'Password:' }).click();
    await this.page.getByRole('textbox', { name: 'Password:' }).fill(password);
    console.log(`Password set to: ${password}`);
  }

    async clickSignupThenAcceptAlert() {
    this.page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.accept().catch(() => {});
    });
    await this.page.getByRole('button', { name: 'Sign up' }).click();
    console.log('Clicked Signup Button then accepted alert');
  }
  async clickSignupThenDismissAlert() {
    this.page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.accept().catch(() => {});
    });
    await this.page.getByRole('button', { name: 'Sign up' }).click();
    console.log('Clicked Signup Button then dismissed alert');
  }
  async retrieveTitle(titleRef) {
    titleRef.value = (await this.page.locator('#signInModalLabel').textContent())?.trim() || "";
  }

}

export default SignupPopup;