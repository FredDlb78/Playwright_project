import { test, expect } from '@playwright/test';
import AbstractPage from '../../pages/AbstractPage';
import { faker } from '@faker-js/faker';

test('test', async ({ page }) => {
  const abstractPage = new AbstractPage(page);
  const { headerPage, signupPopup } = abstractPage;
  const username = faker.internet.username();
  const password = faker.internet.password();

  await abstractPage.goToDemoBlaze();
  await headerPage.clickSignupButton();
  await signupPopup.setUsername(username);
  await signupPopup.setPassword(password);
  await signupPopup.clickSignupThenAcceptAlert();
  await headerPage.clickSignupButton();
});