import SwipePage from '../pageobjects/Swipe.page';

describe('Swipe Test', () => {
    it('should perform swipe and show card', async () => {
        await SwipePage.performSwipe();
        await expect(await SwipePage.isSwipeItemVisible()).toBe(true);
    });
});
