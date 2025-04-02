class ContactPopup {
  constructor(page) {
    this.page = page;
  }

  async setContactEmail(contactEmail) {
    await this.page.locator("#recipient-email").click();
    await this.page.locator("#recipient-email").fill(contactEmail);
    console.log(`ContactEmail set to: ${contactEmail}`);
  }
  async setContactName(contactName) {
    await this.page.locator("#recipient-name").click();
    await this.page.locator("#recipient-name").fill(contactName);
    console.log(`ContactName set to: ${contactName}`);
  }
  async setContactMessage(contactMessage) {
    await this.page.locator("#message-text").click();
    await this.page.locator("#message-text").fill(contactMessage);
    console.log(`ContactMessage set to: ${contactMessage}`);
  }

  async clickSendMessageThenAcceptAlert() {
    this.page.once("dialog", (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.accept().catch(() => {});
    });
    await this.page.getByRole("button", { name: "Send message" }).click();
    console.log("Clicked Signup Button then accepted alert");
  }

  async retrieveTitle(titleRef) {
    titleRef.value =
      (await this.page.locator("#exampleModalLabel").textContent())?.trim() ||
      "";
  }
}

export default ContactPopup;
