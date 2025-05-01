// import FormsPage from '../pageobjects/Forms.page';

// describe('Forms Test', () => {
//     it('should fill and submit form', async () => {
//         await FormsPage.fillForm('Hello World');
//         await expect(await FormsPage.isFormSubmitted()).toBe(true);
//     });
// });

import { expect } from '@wdio/globals';

describe('Forms Test', () => {
  it('should fill and submit form', async () => {
    await $('~Forms').click();

    // Wait for the fields to load
    const textField = await $('~text-input');
    await textField.waitForDisplayed({ timeout: 5000 });

    await textField.setValue('John Do');
    
    // Click the active button to trigger popup
    await $('~button-Active').click();

    // Optional pause (good for debugging if needed)
    await driver.pause(3000);
    console.log(await driver.getPageSource());

    // --- Popup assertion starts here ---
    const popupMessage = await $('id=android:id/message');
    await popupMessage.waitForDisplayed({ timeout: 5000 });
    await expect(popupMessage).toBeDisplayed();
    await expect(popupMessage).toHaveText('This button is active');

    // Optionally click OK to close popup
    const okButton = await $('id=android:id/button1');
    await okButton.click();
    // --- Popup assertion ends here ---

  });
});