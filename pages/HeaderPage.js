
class HeaderPage {
  constructor(page) {
    this.page = page;
  }

  async clickSignupMenu() {
    await this.page.getByRole('link', { name: 'Sign up' }).click();
    console.log('Clicked Signup Menu');
  }
}

export default HeaderPage;