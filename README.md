# Demorealworld Cypress Tests

## Summary

This repository contains Cypress tests for the Demorealworld website, using Faker for random data generation. Test scenarios include end-to-end tests for sign-in, sign-up, and tag selection functionality.

## Requirements

- Node.js (version 16 or higher)
- npm (version 8 or higher)
- Cypress (version 13.13.1)
- Faker (version 8.4.1)
- Mochawesome (version 7.1.3)

## Steps to Install

1. Clone the repository:
    ```bash
    git clone https://github.com/ArtemPerehonchuk/demorealworld-cypress-tests.git
    cd demorealworld-cypress-tests
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Steps to Launch

1. Open the Cypress Test Runner, run:
    ```bash
    npm run cy:open
    ```

2. To run tests with different viewport sizes:

- **Large viewport size:**
    ```bash
    npm run cy:run:large
    ```

- **Medium viewport size:**
    ```bash
    npm run cy:run:medium
    ```

- **Small viewport size:**
    ```bash
    npm run cy:run:small
    ```

3. Run tests using Chrome as the default browser and create a Mochawesome report:
    ```bash
    npm run cy:run:chrome
    ```

## Steps to Create the Report

To generate a merged Mochawesome report:

1. Clean existing reports:
    ```bash
    rm -rf cypress/results/* || true
    ```

2. Run the tests:
    ```bash
    npm run cy:run:chrome
    ```

3. Merge the test reports:
    ```bash
    npm run merge:reports
    ```

4. Generate the HTML report:
    ```bash
    npm run generate:report
    ```

5. Open the HTML report:
    ```bash
    npm run open:report
    ```

The merged report will be available in the `cypress/results` directory and can be opened in the browser.

## Project Structure

- `cypress/`: Contains all Cypress tests and configurations.
- `cypress/pages/`: Contains Page Object Model files with locators and methods.
- `cypress/e2e/`: Contains test specification files.
- `.github/workflows/`: Contains GitHub Actions workflows for running tests.