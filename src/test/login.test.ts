import LoginPage from '../pageobjects/Login.page';

describe('Login Test', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.login('test@wdio.io', 'Test1234!');
        await expect(await LoginPage.isLoginSuccessful()).toBe(true);
    });
});
