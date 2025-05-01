import BasePage from './Base.page';

class FormsPage extends BasePage {
    public get formsTab() { return $('~Forms'); }
    public get inputField() { return $('~text-input'); }
    public get switchToggle() { return $('~switch'); }
    public get dropdown() { return $('~Dropdown'); }
    public get activeBtn() { return $('~button-Active'); }
    public get alertTitle() { return $('~android:id/alertTitle'); }

    async fillForm(text: string) {
        await this.formsTab.click();
        await this.inputField.setValue(text);
        await this.switchToggle.click();
        await this.dropdown.click();
        const option = await $('android=new UiSelector().text("Appium is awesome")');
        await option.click();
        await this.activeBtn.click();
    }

    async isFormSubmitted(): Promise<boolean> {
        return this.alertTitle.isDisplayed();
    }
}

export default new FormsPage();
