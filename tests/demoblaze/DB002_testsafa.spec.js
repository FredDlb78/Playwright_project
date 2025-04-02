import { test, expect } from "@playwright/test";
import AbstractPage from "../../pages/AbstractPage";
import { faker } from "@faker-js/faker";

test.describe("Contact Tests", () => {
  let abstractPage;
  let headerPage;
  let contactPopup;
  let emailContact = faker.internet.email();
  let nameContact = faker.internet.username();
  let messageContact = "HELLO";

  test.beforeEach(async ({ page }) => {
    abstractPage = new AbstractPage(page);
    ({ headerPage, contactPopup } = abstractPage);
    console.log("ContactPopup:", contactPopup);
    await abstractPage.goToDemoBlaze();
    await headerPage.clickContactMenu();
  });

  test("Contact page", async () => {
    await contactPopup.setContactEmail(emailContact);
    await contactPopup.setContactName(nameContact);
    await contactPopup.setContactMessage(messageContact);
    await contactPopup.clickSendMessageThenAcceptAlert();
    await headerPage.clickSignupMenu();
  });
});
