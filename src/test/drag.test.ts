import DragPage from '../pageobjects/Drag.page';

describe('Drag Test', () => {
    it('should drag and drop element', async () => {
        await DragPage.performDragAndDrop();
    });
});