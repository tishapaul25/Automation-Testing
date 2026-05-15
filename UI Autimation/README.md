# SauceDemo UI Automation Project

## Project Overview

This project contains UI automation testing for the SauceDemo website using:

- Playwright
- JavaScript
- Node.js
- Page Object Model (POM)
- HTML Report
- Allure Report

Website:
https://www.saucedemo.com/

---

# Test Scenarios

## Q1
- Login with locked_out_user
- Verify error message

## Q2
- Login with standard_user
- Reset App State
- Add 3 products to cart
- Verify product names
- Verify total price
- Complete checkout process
- Verify successful order message
- Logout

## Q3
- Login with performance_glitch_user
- Reset App State
- Sort products Z to A
- Add first product to cart
- Verify product name
- Verify total price
- Complete checkout process
- Verify successful order message
- Logout

---

# Project Structure

```txt
SauceDemo_UI_Automation
│
├── pageObjects
│   ├── basePage.js
│   ├── loginPage.js
│   ├── inventoryPage.js
│   ├── cartPage.js
│   └── checkoutPage.js
│
├── tests
│   ├── q1.spec.js
│   ├── q2.spec.js
│   └── q3.spec.js
│
├── playwright.config.js
├── package.json
└── README.md
```

---

# Setup Instructions

## Clone Repository

```bash
git clone <repository_url>
```

## Install Dependencies

```bash
npm install
```

## Install Playwright Browsers

```bash
npx playwright install
```

---

# Run Tests

## Run All Tests

```bash
npx playwright test
```

## Run Specific Test

### Q1

```bash
npx playwright test tests/q1.spec.js
```

### Q2

```bash
npx playwright test tests/q2.spec.js
```

### Q3

```bash
npx playwright test tests/q3.spec.js
```

---

# Run Tests in Headed Mode

```bash
npx playwright test --headed
```

---

# HTML Report

## Open HTML Report

```bash
npx playwright show-report
```

---

# Allure Report

## Generate Allure Report

```bash
allure generate ./allure-results --clean
```

## Open Allure Report

```bash
allure open
```

---

# Features

- Page Object Model (POM)
- Reusable methods
- Reusable locators
- Cross-browser support
- HTML reporting
- Allure reporting
- Screenshot on failure
- Video recording on failure

---

# Tools & Technologies

- Playwright
- JavaScript
- Node.js
- Allure Report
- VS Code