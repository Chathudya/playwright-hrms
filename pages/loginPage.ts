import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput = 'input[name="username"]';
  readonly passwordInput = 'input[name="password"]';
  readonly loginBtn = 'button[type="submit"]';
  readonly errorMessage = '.oxd-alert-content-text';

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/', { waitUntil: 'domcontentloaded' });
    await this.page.waitForSelector(this.usernameInput);
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginBtn);
  }

  async getErrorMessage() {
    return this.page.textContent(this.errorMessage);
  }
}
