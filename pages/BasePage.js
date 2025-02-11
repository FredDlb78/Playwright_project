import HeaderPage from './HeaderPage';
import SignupPopup from './SignupPopup';

class BasePage {
  constructor(page) {
    this.page = page;
    this.headerPage = new HeaderPage(page);
    this.signupPopup = new SignupPopup(page);
  }

  async goToDemoBlaze() {
    await this.page.goto('https://www.demoblaze.com');
  }
}

export default BasePage;
