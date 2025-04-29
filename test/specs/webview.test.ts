import { expect } from '@wdio/globals';

describe('WebView Test', () => {
  it('should switch context to WebView and verify element', async () => {
    await $('~Webview').click();
    await driver.pause(2000);

    // Get all available contexts
    const contexts = await driver.getContexts();
    console.log('Available contexts:', contexts);

    // Find the WEBVIEW context
    const webviewContext = contexts.find((ctx: any) => ctx.toString().includes('WEBVIEW'));

    if (!webviewContext) {
      throw new Error('No WEBVIEW context found');
    }

    // Switch context - cast to string
    await driver.switchContext(webviewContext.toString());

    // Now inside the WebView - find a real web element
    const webElement = await $('css selector'); // Replace with actual selector inside webview

    // Validate element
    await expect(webElement).toBeDisplayed();

    // Optional: Switch back to native app
    await driver.switchContext('NATIVE_APP');
  });
});
