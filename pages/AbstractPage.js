import ContactPopup from "./ContactPopup";
import HeaderPage from "./HeaderPage";
import SignupPopup from "./SignupPopup";

class AbstractPage {
  constructor(page) {
    this.page = page;
    this.headerPage = new HeaderPage(page);
    this.signupPopup = new SignupPopup(page);
    this.contactPopup = new ContactPopup(page);
  }

  async goToDemoBlaze() {
    await this.page.goto("https://www.demoblaze.com");
    console.log("Navigated to DemoBlaze");
  }
  async assertEquals(expectedMessage, actualMessage, errorMessage) {
    if (expectedMessage !== actualMessage) {
      throw new Error(errorMessage);
      console.error(errorMessage);
    } else {
      console.log("assertEquals passed");
    }
  }
}

export default AbstractPage;
