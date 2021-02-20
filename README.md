How to run the tests:

This guide assumes you have node with npm and git installed:
1. https://nodejs.org/en/download/
2. https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

Open Termimal and run the commands:
1. Clone my repository: git clone git@github.com:andge86/amazon_tests.git
2. Go to project folder: cd amazon_tests
3. Installdependencied: npm install
4. Execute the command from the list:

Basic Cypress Commands

cypress open -> will open Cypress desktop runner app
cypress run -> headless run in Electron browser
cypress run --browser chrome -> will run tests in Chrome browser
cypress-tags run -e TAGS="@CurrencyChange" -> will run only Currency Symbol Change feature scenarios (tests)
cypress-tags run -e TAGS="@GiftCards" -> will run only Gift Cards Balance feature scenarios (tests)
cypress-tags run -e TAGS="ResultsCounter" -> will run only Results Number Displaying feature scenarios (tests)

Note: you can use other commands predefined in Cypress official documentation: https://docs.cypress.io/guides/guides/command-line.html#cypress-run

Reporting

node report.js - run the command after test run, it will generate cucumber report
