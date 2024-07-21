# Demorealworld Cypress Tests

## Summary

This repository contains Cypress tests for the Demorealworld website, using Faker for random data generation. Test scenarios include end-to-end tests for sign-in, sign-up, and tag selection functionality.

## Requirements

- Node.js (version 16 or higher)
- npm (version 8 or higher)
- Cypress (version 13.13.1)
- Faker (version 8.4.1)


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

3. Install Faker:
    ```bash
    npm install @faker-js/faker --save-dev
    ```

4. Install Mochawesome:
    ```bash
    npm install mochawesome mochawesome-merge mochawesome-report-generator --save-dev
    ```

## Steps to Launch

To open the Cypress Test Runner, run:

    ```bash
    npm run cy:open
    ```

To run tests with different viewport sizes:

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

To run tests using Chrome as the default browser and creating mochawesome report, use:
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

2. Merge the test reports:
    ```bash
    npm run merge:reports
    ```

3. Generate the HTML report:
    ```bash
    npm run generate:report
    ```

4. Open the HTML report:
    ```bash
    npm run open:report
    ````


The merged report will be available in the `cypress/results` directory and open in the browser.

## Project Structure

- `cypress/`: Contains all Cypress tests and configurations.
- `cypress/pages/`: Contains Page Object Model files with locators and methods.
- `cypress/e2e/`: Contains test specification files.
- `.github/workflows/`: Contains GitHub Actions workflows for running tests.