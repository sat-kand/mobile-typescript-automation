import WebViewPage from '../pageobjects/WebView.page';

describe('WebView Test', () => {
    it('should switch to WebView and verify title', async () => {
        await WebViewPage.openWebView();

        await WebViewPage.switchToWebContext();

        const title = await WebViewPage.getWebPageTitle();
        expect(title).toContain('Appium');
    });
});