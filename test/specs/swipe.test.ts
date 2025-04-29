describe('Swipe Test', () => {
  it('should swipe left', async () => {
    await $('~Swipe').click();
    const screen = await $('~swipe-screen');
    const { x, y } = await screen.getLocation();
    await driver.touchPerform([
      { action: 'press', options: { x: x + 300, y: y + 100 } },
      { action: 'wait', options: { ms: 500 } },
      { action: 'moveTo', options: { x: x, y: y + 100 } },
      { action: 'release' }
    ]);
  });
});
