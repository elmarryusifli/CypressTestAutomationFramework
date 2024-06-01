# Overview

This project is a Cypress-based testing framework designed to facilitate automated end-to-end testing for web applications. The framework integrates Mochawesome for generating detailed test execution reports.

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (v6 or higher recommended)

### Installation

1. Clone the repository:

   ```sh
   git clone <repository_url>
   cd cypress_framework
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Configuration

The framework uses `cypress.config.js` for configuration. This file includes settings for the Mochawesome reporter and environment variables.

## Running Tests

To execute the tests, run the following command:

```sh
npx cypress run
```

## Viewing Reports
After the tests have run, you can view the detailed report generated by Mochawesome by opening cypress/reports/mochawesome-report.html in your web browser.

## Writing Tests
Tests should be written in the cypress/e2e/ directory.

## Dependencies
### Dev Dependencies
@cypress/xpath: XPath plugin for Cypress.
cypress: Cypress framework for end-to-end testing.
faker: Library for generating fake data.
mochawesome: Reporter for generating detailed test reports.
mochawesome-merge: Utility for merging multiple Mochawesome JSON reports.
mochawesome-report-generator: Tool for generating HTML reports from Mochawesome JSON files.
## Dependencies
cors: Middleware for handling Cross-Origin Resource Sharing (CORS).
## License
This project is licensed under the ISC License.

## Author
Elmar Yusifli

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
```
