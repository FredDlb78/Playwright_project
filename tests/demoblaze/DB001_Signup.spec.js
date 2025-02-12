import { test, expect } from '@playwright/test';
import AbstractPage from '../../pages/AbstractPage';
import { faker } from '@faker-js/faker';

test('Signup with valid credentials', async ({ page }) => {
  const abstractPage = new AbstractPage(page);
  const { headerPage, signupPopup } = abstractPage;
  const username = faker.internet.username();
  const password = faker.internet.password();

  await abstractPage.goToDemoBlaze();
  await headerPage.clickSignupMenu();
  await signupPopup.setUsername(username);
  await signupPopup.setPassword(password);
  await signupPopup.clickSignupThenAcceptAlert();
  await headerPage.clickSignupMenu();
});

test('Signup with invalid credentials: Username already exists', async ({ page }) => {
  const abstractPage = new AbstractPage(page);
  const { headerPage, signupPopup } = abstractPage;
  const username = "testuser";
  const password = faker.internet.password();

  await abstractPage.goToDemoBlaze();
  await headerPage.clickSignupMenu();
  await signupPopup.setUsername(username);
  await signupPopup.setPassword(password);
  await signupPopup.clickSignupThenDismissAlert();
  await abstractPage.assertEquals("Sign up", await signupPopup.getTitle(), "Title is not Sign up");
});

test('Signup with invalid credentials: Empty username', async ({ page }) => {
  const abstractPage = new AbstractPage(page);
  const { headerPage, signupPopup } = abstractPage;
  const password = faker.internet.password();

  await abstractPage.goToDemoBlaze();
  await headerPage.clickSignupMenu();
  await signupPopup.setUsername("");
  await signupPopup.setPassword(password);
  await signupPopup.clickSignupThenDismissAlert();
  await abstractPage.assertEquals("Sign up", await signupPopup.getTitle(), "Title is not Sign up");
});

test('Signup with invalid credentials: Empty password', async ({ page }) => {
  const abstractPage = new AbstractPage(page);
  const { headerPage, signupPopup } = abstractPage;
  const username = faker.internet.username();

  await abstractPage.goToDemoBlaze();
  await headerPage.clickSignupMenu();
  await signupPopup.setUsername(username);
  await signupPopup.setPassword("");
  await signupPopup.clickSignupThenDismissAlert();
  await abstractPage.assertEquals("Sign up", await signupPopup.getTitle(), "Title is not Sign up");
});

