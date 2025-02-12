
class HeaderPage {
  constructor(page) {
    this.page = page;
  }

  async clickSignupButton() {
    await this.page.getByRole('link', { name: 'Sign up' }).click();
  }
}

export default HeaderPage;