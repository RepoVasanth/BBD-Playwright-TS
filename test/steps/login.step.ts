import { Given, Then } from '@cucumber/cucumber';
import { LoginPage } from '../../src/pageObject/loginPage';
import dotenv from 'dotenv';

dotenv.config();

Given('Navigate to the homepage', async function () {
    const page = this.page;
    const loginPage = new LoginPage(page);
    await loginPage.openApplication(process.env.BASE_URL!);
});

Then('Perform Login steps', async function () {
    const page = this.page ;
    const loginPage = new LoginPage(page);
    await loginPage.enterLoginDetails('PWDemo','PWDemo');
    await loginPage.clickLoginButton();
});