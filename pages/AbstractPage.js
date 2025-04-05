import ContactPopup from "./ContactPopup";
import HeaderPage from "./HeaderPage";
import SignupPopup from "./SignupPopup";

class AbstractPage {
  constructor(page) {
    this.page = page;
    this.headerPage = new HeaderPage(page, this);
    this.signupPopup = new SignupPopup(page, this);
    this.contactPopup = new ContactPopup(page, this);
  }

  async goToDemoBlaze() {
    await this.step("Navigate to DemoBlaze", async () => {
      await this.page.goto("https://www.demoblaze.com");
    });
  }

  async assertEquals(expected, actual, message) {
    await this.step(`Assert: ${message}`, async () => {
      if (expected !== actual) {
        throw new Error(`${message} | Expected: "${expected}" | Actual: "${actual}"`);
      }
    });
  }

  async step(description, callback) {
    try {
      console.log(`➡️ ${description}`);
      const result = await callback();
      console.log(`✅ ${description}`);
      return result;
    } catch (error) {
      console.error(`❌ ${description} failed: ${error}`);
      throw error;
    }
  }
}

export default AbstractPage;