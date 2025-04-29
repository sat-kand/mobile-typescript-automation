describe('Drag Test', () => {
  it('should drag and drop', async () => {
    await $('~Drag').click();
  const dragEl = await $('~dragMe') as WebdriverIO.Element & { getRect: () => Promise<{ x: number, y: number, width: number, height: number }> };
const dropEl = await $('~dropZone') as WebdriverIO.Element & { getRect: () => Promise<{ x: number, y: number, width: number, height: number }> };

const dragRect = await dragEl.getRect();
const dropRect = await dropEl.getRect();
    await driver.performActions([{
      type: 'pointer',
      id: 'finger1',
      parameters: { pointerType: 'touch' },
      actions: [
        { type: 'pointerMove', duration: 0, x: dragRect.x + 10, y: dragRect.y + 10 },
        { type: 'pointerDown', button: 0 },
        { type: 'pause', duration: 500 },
        { type: 'pointerMove', duration: 1000, x: dropRect.x + 10, y: dropRect.y + 10 },
        { type: 'pointerUp', button: 0 }
      ]
    }]);
  });
});
