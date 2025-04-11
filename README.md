# 🧪 SauceDemo E2E Automation Framework

End-to-end automation for [saucedemo.com](https://www.saucedemo.com), built using **Playwright** and **TypeScript** with a clean Page Object Model (POM) structure.

---

## 🗂️ Folder Structure

```
src/
├── config/                # Test data and environment settings
│   ├── env.ts
│   └── testData.ts
│
├── fixtures/              # Custom Playwright fixtures
│   └── fixtures.ts
│
├── pages/                 # Page Object Models (POMs)
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
├── tests/
│   ├── e2e/               # End-to-end scenarios
│   │   └── e2e.spec.ts
│   ├── smoke/            # Light regression/smoke test scenarios
│   └── visual/           # Visual regression tests
│
├── utilities/            # Helper functions or shared utils
└── test-results/         # Auto-generated test reports
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

- 🎯 **UI Validation**
  - Footer and Header checks (social links, menu, etc.)

- 🧪 **Smoke Tests**
  - Critical path verification in `tests/smoke/`

<<<<<<< HEAD
- 📸 **Visual Testing**
=======
- 📸 **Visual Testing** 
>>>>>>> dcf1aa5674fd61f0878b06f1ace154e7799e0d6a
  - Setup for visual regression in `tests/visual/`

---

## 🚀 Getting Started

```bash
npm install              # Install dependencies
npx playwright test      # Run all tests
```

---

## 🧬 Tech Stack

- 🧪 [Playwright](https://playwright.dev/)
- ⌨️ TypeScript
- 🧱 Page Object Model
- 💉 Fixtures for dependency injection
- 💾 Test data via config files
- 📂 Organized test folders: `e2e`, `smoke`, `visual`

---

## 👨‍💻 Example Command Usage

| Task                     | Command                                  |
|--------------------------|------------------------------------------|
| Run All Tests            | `npx playwright test`                    |
| Run E2E Only             | `npx playwright test tests/e2e/`         |
| Run Smoke Only           | `npx playwright test tests/smoke/`       |
| Run Visual Only          | `npx playwright test tests/visual/`      |
| Headed Mode              | `npx playwright test --headed`           |
| With Debugger            | `npx playwright test --debug`            |

---

## 📁 Environment Setup

Edit or add new base URLs in `src/config/env.ts`:
```ts
export const BASE_URL = 'https://www.saucedemo.com';
```

---

## 📋 How to Contribute

Feel free to:
- Add more test cases
- Expand fixtures
- Integrate CI (GitHub Actions, GitLab)
- Add HTML or Allure reporting

---

## 🧠 Author

Made by **Azeez Alimi**  
