import LoginScreen from '../pageobjects/LoginScreen';
import { expect } from 'chai';

describe('Login Test', () => {
  it('should login with valid credentials', async () => {
    await LoginScreen.login('admin@wdio.io', 'password123');
    const isVisible = await LoginScreen.successMessage.isDisplayed();
    expect(isVisible).to.equal(true);
  });
});
