
# Mobile Automation Framework

This project is a mobile automation framework built using WebDriverIO v8, Appium, and TypeScript for automating tests on Android apps.

## 🚀 Features

- ✅ WebdriverIO v8 with TypeScript support
- ✅ Appium for Android mobile automation
- ✅ Page Object Model (POM) design
- ✅ Mocha BDD testing
- ✅ Allure reporting integrated
- ✅ Works on emulators and real Android devices

## Project Structure

- `src/pageobjects/` - Contains Page Object Model (POM) files.
- `src/test/` - Contains the test cases for various functionalities.
- `src/test/` - Contains utility functions like swipe, drag, touch.
- `wdio.conf.ts` - WebDriverIO configuration file.
- `tsconfig.json` - TypeScript configuration file.
- `package.json` - Project dependencies and scripts.

## Prerequisites

- **Node.js** (v14 or above)
- **Appium** installed globally (`npm install -g appium`)
- **Android Emulator** set up for testing

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd mobile-automation-framework
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Appium:**
   - Ensure that Appium is installed globally (`npm install -g appium`).
   - Run Appium server:
     ```bash
     appium
     ```

4. **Set up Android Emulator:**
   - Set up an Android Emulator in Android Studio or connect a physical device.


## Running Tests

To run the tests, execute the following command:

```bash
npx wdio run wdio.conf.ts
```

This will run all the tests in the `src/test/` directory.

## Reporting

Test results will be displayed in the terminal with pass/fail status for each test case.
```bash
npm run allure:generate
npm run allure:open
```
 All test results will be available in the allure-results/ folder and the HTML report in allure-report/.