import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;
  private loginLink: string;
  private userText: string;
  private passText: string;
  private logInButton: string;

  constructor(page: Page) {
    this.page = page;
    this.loginLink = '#login2';
    this.userText = '#loginusername';
    this.passText = '#loginpassword';
    this.logInButton = "//button[contains(text(),'Log in')]";
  }

  async openApplication(appURL: string): Promise<void> {
    await this.page.goto(appURL);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async enterLoginDetails(strUser: string, strPass: string): Promise<void> {
    await this.page.click(this.loginLink);
    await this.page.waitForTimeout(1000);
    await this.page.fill(this.userText, strUser);
    await this.page.fill(this.passText, strPass);
  }

  async clickLoginButton(): Promise<void> {
    await this.page.waitForTimeout(1000);
    await this.page.click(this.logInButton);
  }
}
