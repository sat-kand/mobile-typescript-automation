import BasePage from './Base.page';

class WebViewPage extends BasePage {
    public get webviewTab() { return $('~Webview'); }

    async openWebView(): Promise<void> {
        await this.webviewTab.click();
    }

    async switchToWebContext(): Promise<void> {
        const contexts = await driver.getContexts(); // (string | DetailedContext)[]
        
        const webviewContext = contexts.find((ctx): ctx is string => {
            return typeof ctx === 'string' && ctx.includes('WEBVIEW');
        });

        if (!webviewContext) {
            throw new Error('WEBVIEW context not found');
        }

        await driver.switchContext(webviewContext); // ✅ now webviewContext is string
    }

    async getWebPageTitle(): Promise<string> {
        return browser.getTitle();
    }
}

export default new WebViewPage();