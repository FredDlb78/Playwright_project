class ContactPopup {
  constructor(page, abstractPage) {
    this.page = page;
    this.abstractPage = abstractPage;
  }

  async setContactEmail(email) {
    await this.abstractPage.step(`Set contact email to "${email}"`, async () => {
      const field = this.page.locator('#recipient-email');
      await field.waitFor({ state: 'visible' });
      await field.fill(email);
    });
  }

  async setContactName(name) {
    await this.abstractPage.step(`Set contact name to "${name}"`, async () => {
      const field = this.page.locator('#recipient-name');
      await field.waitFor({ state: 'visible' });
      await field.fill(name);
    });
  }

  async setContactMessage(message) {
    await this.abstractPage.step(`Set contact message`, async () => {
      const field = this.page.locator('#message-text');
      await field.waitFor({ state: 'visible' });
      await field.fill(message);
    });
  }

  async clickSendMessageThenAcceptAlert() {
    await this.abstractPage.step('Send message and accept alert', async () => {
      this.page.once('dialog', dialog => dialog.accept());
      await this.page.locator('button[onclick="send()"]').click();
    });
  }

  async retrieveTitle() {
    return await this.abstractPage.step('Get contact modal title', async () => {
      const titleLocator = this.page.locator('#exampleModalLabel');
      await titleLocator.waitFor({ state: 'visible' });
      return (await titleLocator.textContent()).trim();
    });
  }
}

export default ContactPopup;