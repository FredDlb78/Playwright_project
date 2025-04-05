import { test, expect } from '@playwright/test';
import AbstractPage from '../../pages/AbstractPage';
import { faker } from '@faker-js/faker';

test.describe('Signup Tests', () => {
  let abstractPage;
  let headerPage;
  let signupPopup;
  let actualTitle = { value: "" };
  let username = faker.internet.username();
  let password = faker.internet.password();

  test.beforeEach(async ({ page }) => {
    abstractPage = new AbstractPage(page);
    ({ headerPage, signupPopup } = abstractPage);
    await abstractPage.goToDemoBlaze();
    await headerPage.clickSignupMenu();
    actualTitle = await signupPopup.retrieveTitle();
    await abstractPage.assertEquals("Sign up", actualTitle, "Signup popup title is not displayed");
  });

  test('Signup with valid credentials', async () => {

    await signupPopup.setUsername(username);
    await signupPopup.setPassword(password);
    await signupPopup.clickSignupThenAcceptAlert();
    await headerPage.clickSignupMenu();
  });

  test('Signup with invalid credentials: Username already exists', async () => {

    await signupPopup.setUsername(username);
    await signupPopup.setPassword(password);
    await signupPopup.clickSignupThenDismissAlert();
    actualTitle = await signupPopup.retrieveTitle();
    await abstractPage.assertEquals("Sign up", actualTitle, "Signup popup title is not displayed");
  });

  test('Signup with invalid credentials: Empty username', async () => {

    await signupPopup.setUsername("");
    await signupPopup.setPassword(password);
    await signupPopup.clickSignupThenDismissAlert();
    actualTitle = await signupPopup.retrieveTitle();
    await abstractPage.assertEquals("Sign up", actualTitle, "Signup popup title is not displayed");
  });

  test('Signup with invalid credentials: Empty password', async () => {

    await signupPopup.setUsername(username);
    await signupPopup.setPassword("");
    await signupPopup.clickSignupThenDismissAlert();
    actualTitle = await signupPopup.retrieveTitle();
    await abstractPage.assertEquals("Sign up", actualTitle, "Signup popup title is not displayed");
  });
});