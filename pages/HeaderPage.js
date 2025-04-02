class HeaderPage {
  constructor(page) {
    this.page = page;
  }

  async clickSignupMenu() {
    await this.page.getByRole("link", { name: "Sign up" }).click();
    console.log("Clicked Signup Menu");
  }
  async clickContactMenu() {
    await page.getByRole("link", { name: "Contact" }).click();
    console.log("Click Contact Menu");
  }
}

export default HeaderPage;
