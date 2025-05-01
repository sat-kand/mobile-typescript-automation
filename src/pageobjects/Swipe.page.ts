import BasePage from './Base.page';
import { swipeUp } from '../utils/gestures';

class SwipePage extends BasePage {
    public get swipeTab() { return $('~Swipe'); }
    public get swipeItem() { return $('~card'); }

    async performSwipe() {
        await this.swipeTab.click();
        await swipeUp();
    }

    async isSwipeItemVisible(): Promise<boolean> {
        return this.swipeItem.isDisplayed();
    }
}

export default new SwipePage();
