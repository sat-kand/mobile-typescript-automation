const config = {
    runner: 'local',
    // specs: ['./src/test/*.ts'],
       specs: [
        './src/test/forms.test.ts',
        './src/test/swipe.test.ts',
        './src/test/login.test.ts',
      ],
    maxInstances: 1,
    port: 4723,
    hostname: '127.0.0.1',
    path: '/',
    capabilities: [{
      platformName: 'Android',
      'appium:platformVersion': '14',
      'appium:deviceName': 'Android Emulator',
      'appium:automationName': 'UiAutomator2',
      'appium:app': '/Users/SathishKumar/Downloads/mobile-automation-ts-full-framework/app/androidwdioapp.apk',
      'appium:autoGrantPermissions': true
    }],
    logLevel: 'info',
    framework: 'mocha',
    reporters: [
      'spec',
      ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true
      }]
    ],
    mochaOpts: {
      ui: 'bdd',
      timeout: 60000
    },
  };
  
  exports.config = config;
  