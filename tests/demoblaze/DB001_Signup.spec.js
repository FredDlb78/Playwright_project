import { test, expect } from '@playwright/test';
import BasePage from '../../pages/BasePage';

test('test', async ({ page }) => {
  const basePage = new BasePage(page);
  const { headerPage, signupPopup } = basePage;

  await basePage.goToDemoBlaze();
  await headerPage.clickSignupButton();
  await signupPopup.setUsername("username4567374684474");
  await signupPopup.setPassword("password");
  await signupPopup.clickSignupThenAcceptAlert();
  await headerPage.clickSignupButton();
});