export async function swipeUp() {
    const { height, width } = await driver.getWindowSize();
    const startX = Math.floor(width / 2);
    const startY = Math.floor(height * 0.8);
    const endY = Math.floor(height * 0.2);

    await driver.touchPerform([
        { action: 'press', options: { x: startX, y: startY }},
        { action: 'wait', options: { ms: 500 }},
        { action: 'moveTo', options: { x: startX, y: endY }},
        { action: 'release' }
    ]);
}
