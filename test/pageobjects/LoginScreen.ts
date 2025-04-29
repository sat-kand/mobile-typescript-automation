class LoginScreen {
  get usernameInput() { return $('~input-email'); }
  get passwordInput() { return $('~input-password'); }
  get loginButton() { return $('~btn-login'); }
  get successMessage() { return $('~login-success'); }

  async login(username: string, password: string) {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
  }
}
export default new LoginScreen();
