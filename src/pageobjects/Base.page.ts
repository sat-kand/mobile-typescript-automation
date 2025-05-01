export default class BasePage {
    async openApp(): Promise<void> {
        await driver.launchApp();
    }

    async closeApp(): Promise<void> {
        await driver.closeApp();
    }
}
