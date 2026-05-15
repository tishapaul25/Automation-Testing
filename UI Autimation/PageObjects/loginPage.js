import { BasePage } from "./basePage";

export class LoginPage extends BasePage {

    constructor(page) {
        super(page);

        this.usernameInput = '#user-name';
        this.passwordInput = '#password';

        this.errorMessage = '[data-test="error"]';
    }

    async gotoLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async enterUsername(username) {
        await this.page.fill(this.usernameInput, username);
    }

    async enterPassword(password) {
        await this.page.fill(this.passwordInput, password);
    }

    async login(username, password) {

        await this.enterUsername(username);

        await this.enterPassword(password);

        await this.clickButton('Login');
    }

    async getErrorMessage() {
        return await this.page.locator(this.errorMessage).textContent();
    }
}