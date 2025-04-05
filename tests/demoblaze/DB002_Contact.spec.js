import { test, expect } from "@playwright/test";
import AbstractPage from "../../pages/AbstractPage";
import { faker } from "@faker-js/faker";

test.describe("Contact Tests", () => {
  let abstractPage;
  let headerPage;
  let contactPopup;
  let actualTitle;
  let emailContact = faker.internet.email();
  let nameContact = faker.internet.username();
  let messageContact = "HELLO";

test.beforeEach(async ({ page }) => {
  abstractPage = new AbstractPage(page);
  ({ headerPage, contactPopup } = abstractPage);
  await abstractPage.goToDemoBlaze();
  await headerPage.clickContactMenu();
  actualTitle = await contactPopup.retrieveTitle();
  await abstractPage.assertEquals("New message", actualTitle, "Contact popup title is not displayed");
});

  test("Contact - Passing case", async () => {
    await contactPopup.setContactEmail(emailContact);
    await contactPopup.setContactName(nameContact);
    await contactPopup.setContactMessage(messageContact);
    await contactPopup.clickSendMessageThenAcceptAlert();
    await headerPage.clickSignupMenu();
  });
});