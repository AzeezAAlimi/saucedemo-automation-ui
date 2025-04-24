# sauceDemo E2E Automation Framework

End-to-end automation for [saucedemo.com](https://www.saucedemo.com), built using **Playwright** and **TypeScript** with a clean Page Object Model (POM) structure.

---

## 📂️ Folder Structure

```
src/
├── config/                     # Test config and environment settings
│   └── testData.ts
│
├── fixtures/                   # Custom Playwright fixtures
│   └── fixtures.ts
│
├── pages/                      # Page Object Models (POMs)
│   ├── homePage.ts
│   ├── inventoryPage.ts
│   ├── cartPage.ts
│   ├── checkout-step-onePage.ts
│   ├── checkout-step-twoPage.ts
│   ├── checkout-completePage.ts
│   └── components/
│       ├── header/
│       │   ├── headerSection.ts
│       │   └── common-components/
│       │       └── menu/cart.ts
│       └── footer/
│           └── footerSection.ts
│       └── productSorting.ts
│       └── products.ts
│
├── testData/                   # JSON-based test data for DDT
│   ├── customerData.json
│   ├── loginData.json
│   └── productData.json
│
├── tests/
│   ├── accessibility/axe/      # Accessibility tests using Axe
│   ├── api/                    # API validation & structure tests
│   ├── components/             # Component-level UI validation
│   ├── contract/               # Schema validation for API responses
│   ├── data-driven-test/       # Login and checkout data-driven flows
│   ├── e2e/                    # End-to-end scenarios
│   │   └── e2e.spec.ts
│   ├── mobile/                 # Mobile emulation tests
│   ├── mocks/                  # Mocked state testing
│   ├── performance-load/
│   │   ├── artillery/          # Artillery-based performance tests
│   │   └── k6/                 # k6 performance test scripts
│   ├── smoke/                  # Light regression/smoke tests
│   └── visual/                 # Visual regression testing
│
├── utilities/                  # Shared test helpers and utilities
└── test-results/               # Auto-generated test reports
```

---

## ✅ Features

- 🔐 **Login Flow**

  - `standard_user` can login
  - `locked_out_user` cannot login

- 🛒 **Purchase Flow**

  - Sort by price & name
  - Add specific products to cart
  - Checkout with validation of cart contents

- 📱 **Mobile Testing**

  - iPhone emulation with `devices['iPhone 12']`
  - Test UI responsiveness and layout shift

- ♿️ **Accessibility**

  - Axe-core checks for labels, color contrast, and keyboard navigation

- 🔄 **Data-Driven Testing**

  - Login and checkout flows tested with JSON data

- 📊 **Performance Testing**

  - Artillery and k6 tests simulate load and track response times

- 🤪 **Smoke Tests**

  - Critical path verification in `tests/smoke/`

- 📸 **Visual Testing**
  - Visual regression using Playwright screenshots or Percy

---

## 🚀 Getting Started

```bash
npm install              # Install dependencies
npx playwright test      # Run all tests
```

---

## 🧬 Tech Stack

- 🧺aslaywright](https://playwright.dev/)
- ⌨️ TypeScript
- 🧱 Page Object Model
- 📈 Fixtures for dependency injection
- 📀 JSON for data-driven testing
- 📂 Organized tests: `e2e`, `smoke`, `mobile`, `visual`

---

## 👨‍💻 Example Command Usage

| Task            | Command                             |
| --------------- | ----------------------------------- |
| Run All Tests   | `npx playwright test`               |
| Run E2E Only    | `npx playwright test tests/e2e/`    |
| Run Smoke Only  | `npx playwright test tests/smoke/`  |
| Run Visual Only | `npx playwright test tests/visual/` |
| Run Mobile Only | `npx playwright test tests/mobile/` |
| Run in Headed   | `npx playwright test --headed`      |
| Run with Debug  | `npx playwright test --debug`       |
| Show Report     | `npx playwright show-report`        |

---

## 📁 Environment Setup

Update your base URL and any global config in `src/config/env.ts`:

```ts
export const BASE_URL = 'https://www.saucedemo.com';
```

---

## 📋 How to Contribute

Feel free to:

- Add new test cases or user flows
- Expand fixture logic or test data sets
- Integrate CI (GitHub Actions, GitLab CI, etc.)
- Add Allure or Playwright HTML reporting for CI

---

## 🧠 Author

Made with ❤️ by **Azeez Alimi**
