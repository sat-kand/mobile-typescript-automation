import BasePage from './Base.page';

class LoginPage extends BasePage {
    public get loginTab() { return $('~Login'); }
    public get usernameInput() { return $('~input-email'); }
    public get passwordInput() { return $('~input-password'); }
    public get loginButton() { return $('~button-LOGIN'); }
    public get successMessage() { return $('android=new UiSelector().textContains("You are logged in!")'); }

    async login(username: string, password: string) {
        await this.loginTab.click();
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async isLoginSuccessful(): Promise<boolean> {
        return this.successMessage.isDisplayed();
    }
}

export default new LoginPage();
