# 🧪 HRMS Automation Suite with Playwright

This repository contains a modular, scalable automation framework developed using [**Playwright**](https://playwright.dev/) and [**TypeScript**](https://www.typescriptlang.org/) to validate the core functionality of an HRMS (Human Resource Management System). The project adopts enterprise-level best practices including **Page Object Model**, **data-driven testing**, and **CI integration** with GitHub Actions.

---

## 🔍 Objectives

- Automate essential smoke test scenarios for OrangeHRM
- Apply professional QA patterns for maintainability
- Enable continuous test execution via GitHub CI workflows
- Lay the foundation for full regression and API+UI hybrid testing

---

## ⚙️ Tech Stack

| Tool | Purpose |
|------|---------|
| [Playwright](https://playwright.dev/) | End-to-end browser automation |
| TypeScript | Strongly-typed scripting |
| GitHub Actions | Continuous Integration (CI) |
| JSON | Externalized test data |
| HTML Reports | Visual test result dashboards |

---

## 📁 Folder Structure

```
.
├── pages/              # Page Object Model classes
├── tests/              
│   ├── smoke/          # Smoke test cases
│   └── regression/     # (Coming soon)
├── data/               # Test data files (JSON)
├── .github/workflows/  # CI pipeline config
```

---

## ✅ Current Test Coverage (Smoke Suite)

| Module | Scenario |
|--------|----------|
| Login  | Valid credentials → Dashboard access |
| Login  | Invalid credentials → Error message |

🛠 **Next**: Leave Application, My Leave View, Admin → User Management

---

## 🚀 How to Run Locally

1. Clone the repo  
2. Install dependencies  
3. Install browsers  
4. Execute tests

```bash
git clone https://github.com/chathudya/playwright-hrms.git
cd playwright-hrms
npm install
npx playwright install
npx playwright test
npx playwright show-report
```

---

## 🤖 CI/CD with GitHub Actions

- Triggers on push and pull request to `main`
- Runs tests in headless Chromium
- Publishes HTML report as downloadable artifact

📍 View workflow under the **Actions** tab.

---

## 📊 Test Reports

Playwright generates a detailed **HTML report** after execution:

```bash
npx playwright show-report
```

In CI, this is available as an **artifact** in the workflow summary.

---

## 🧐 Author

**Chathudya Jayawardana**  
*QA Engineer | Automation Enthusiast | Builder of Smart Test Suites*

📢 Connect: [LinkedIn](https://www.linkedin.com/in/your-profile)

---

⭐️ **Star this repo** to support. Contributions, issues, and feedback welcome.

