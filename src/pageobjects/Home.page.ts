import BasePage from './Base.page';

class HomePage extends BasePage {
    public get homeTitle() { return $('~Home'); }

    async isHomeScreenDisplayed(): Promise<boolean> {
        return this.homeTitle.isDisplayed();
    }
}

export default new HomePage();
