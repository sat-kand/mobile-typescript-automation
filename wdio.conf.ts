import { Config } from '@wdio/types'

export const config: Config = {
    runner: 'local',
    specs: ['./test/specs/**/*.ts'],
    maxInstances: 1,
    port: 4723, // ✅ Connect to existing Appium port
    hostname: '127.0.0.1', // ✅ localhost
    path: '/', // ✅ Default base path
    capabilities: [{
        platformName: 'Android',
        'appium:platformVersion': '14', // use your device's Android version
        'appium:deviceName': 'Android Emulator',
        'appium:automationName': 'UiAutomator2',
        'appium:app': '/Users/SathishKumar/Downloads/mobile-automation-ts-full-framework/app/androidwdioapp.apk',
        'appium:autoGrantPermissions': true
    }],
    logLevel: 'info',
    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', { outputDir: 'allure-results', disableWebdriverStepsReporting: true }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    // ❌ REMOVE appium service section
}