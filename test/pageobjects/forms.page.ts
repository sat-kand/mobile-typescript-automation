// pageobjects/forms.page.ts
import { expect } from '@wdio/globals';

class FormsPage {
    get formsScreen() { return $('~Forms'); }
    get textField() { return $('~text-input'); }
    get activeButton() { return $('~button-Active'); }
    get popupMessage() { return $('id=android:id/message'); }
    get okButton() { return $('id=android:id/button1'); }

    async openFormsScreen() {
        await this.formsScreen.click();
    }

    async fillTextField(name: string) {
        await this.textField.waitForDisplayed({ timeout: 5000 });
        await this.textField.setValue(name);
    }

    async clickActiveButton() {
        await this.activeButton.click();
    }

    async assertPopupIsDisplayed() {
        await this.popupMessage.waitForDisplayed({ timeout: 5000 });
        await expect(this.popupMessage).toBeDisplayed();
        await expect(this.popupMessage).toHaveText('This button is active');
    }

    async closePopup() {
        await this.okButton.click();
    }
}

export default new FormsPage();