# Cypress Test Automation Project for DemoQA

This project is a test automation framework built with Cypress for testing the DemoQA Practice Form (https://demoqa.com/automation-practice-form).

## Key Features

- Page Object Model (POM) implementation
- TypeScript support
- Comprehensive form validation tests (both positive and negative scenarios)
- Allure reporting integration
- Automated field validation and form submission tests

## Test Coverage

The framework includes tests for:

- Field validation (required fields)
- Input validation (email format, phone number format)
- Form submission
- Error handling
- End-to-end form submission flow

## Project Architecture and Patterns

### Page Object Pattern Implementation

- `RegistrationFormPage` class implements the Page Object pattern
- Each page object contains locators and methods for interacting with page elements
- Reusable methods for common actions (field validation, form filling)

### Test Structure

```typescript
describe('Form Submission', () => {
  // Positive scenarios - validating correct behavior
  describe('Positive field validation', () => {
    // Individual test cases for each field
  })

  // End-to-end scenarios
  describe('e2e test', () => {
    // Complete form submission flow
  })

  // Negative scenarios - validating error handling
  describe('Negative field validation', () => {
    // Error validation test cases
  })
})
```

### Data Management

- Test data is stored in `cypress/fixtures/demoqa/users.json`
- Separate data sets for different environments (staging/release/production)
- Valid and invalid test data scenarios

## Test Cases Overview

### Positive Scenarios

- TC_001: Name and last name fields validation
- TC_003: Email field validation
- TC_005: Mobile field validation (10 digits)
- TC_010: Address field validation
- TC_012: Complete form submission with valid data

### Negative Scenarios

- TC_013: Email validation without "@" symbol
- TC_015: Email validation without domain
- TC_016: Phone number validation with invalid characters

## Best Practices Used

1. Separation of concerns (page objects, test data, configurations)
2. Clear test case naming and organization
3. Reusable methods and functions
4. Comprehensive error validation
5. Multi-environment support
6. Reporting integration (Allure)

## Prerequisites

- Node.js (LTS version recommended)
- npm (comes with Node.js)
- Git

## Installation and Running

### Local Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run tests:

   ```bash
   npm run demoqa-staging
   ```

4. Open Cypress Test Runner (interactive mode):

   ```bash
   npm run demoqa-staging.open
   ```

## Available Scripts

### Running Tests

#### DemoQA Environment Tests

- Run tests in headless mode:

  ```bash
  npm run demoqa-staging       # Run tests in staging environment
  npm run demoqa-release       # Run tests in release environment
  npm run demoqa-production    # Run tests in production environment
  ```

- Open Cypress Test Runner (interactive mode):

  ```bash
  npm run demoqa-staging.open  # Open tests in staging environment
  npm run demoqa-release.open  # Open tests in release environment
  npm run demoqa-production.open # Open tests in production environment
  ```

### Reporting

#### Allure Reports

```bash
npm run allure.clear    # Clear previous reports
npm run allure.report   # Generate new report
npm run allure.start    # Start Allure server to view reports
```

### Utility Scripts

- `npm run assets.clear` - Clear screenshots, videos, and downloads
- `npm run prettify` - Format code using Prettier
- `npm run add-project` - Add a new project using Hygen templates

## Project Structure

```
├── cypress/            # Test files and support
├── allure-results/     # Allure test results
├── cypress.config.ts   # Cypress configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies and scripts
```

## Configuration

- Environment configurations are handled through Cypress environment variables
- TypeScript is configured in `tsconfig.json`
- Cypress configuration is in `cypress.config.ts`
- ESLint rules are defined in `.eslintrc.json`
- Prettier formatting rules are in `.prettierrc`

## Reports

- Allure reports are generated in `allure-report/`
- Mocha reports are generated in `cypress/reports/`

## Troubleshooting

1. Make sure all dependencies are installed correctly
2. Clear Cypress cache: `npx cypress cache clear`
3. Delete `node_modules` and run `npm install` again
4. Check if you're using the correct Node.js version

## Original Project

This project was created using the cypress-boilerplate repository as a template for a test assignment.

Special thanks to the creators of the Cypress Boilerplate for providing a solid foundation for automated testing! 🚀

## License

This project uses code from [cypress-boilerplate](https://github.com/optimumqa/cypress-boilerplate) under the MIT license.
