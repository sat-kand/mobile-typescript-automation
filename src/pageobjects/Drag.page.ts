import BasePage from './Base.page';

class DragPage extends BasePage {
    public get dragTab() { return $('~Drag'); }
    public get dragElement() { return $('~drag-l1'); }
    public get dropZone() { return $('~drop-l1'); }

    async performDragAndDrop() {
        await this.dragTab.click();
        await this.dragElement.touchAction([
            { action: 'longPress', x: 10, y: 10 },
            { action: 'moveTo', x: 200, y: 200 },
            'release'
        ]);
    }
}

export default new DragPage();
