# qa-orangehrm-automation
Automation testing project for OrangeHRM Demo using Cypress with Page Object Model (POM) and API Intercept.

## Features Tested

### Login
- Valid Login
- Invalid Login
- Empty Username
- Empty Password
- Empty Credentials
- Verify Logo
- Verify Login Button
- Verify Login URL

### Directory
- Open Directory Page
- Search Employee
- Reset Search
- Verify Search Button
- Verify Reset Button
- Verify Employee Name Field
- Verify Directory Title
- Verify Records Displayed

### Recruitment
- Open Recruitment Page
- Verify Candidates Tab
- Verify Vacancies Tab
- Verify Search Button
- Verify Reset Button
- Search Candidate
- Verify Add Button
- Verify Recruitment Table

## Tech Stack

- Cypress
- JavaScript
- Page Object Model (POM)
- API Intercept

## Installation

```bash
npm install
```

## Run Test

Open Cypress:

```bash
npx cypress open
```

Run all tests:

```bash
npx cypress run
```

## Project Structure

```bash
cypress/
├── e2e/
│   ├── login/
│   ├── directory/
│   └── recruitment/
├── fixtures/
├── support/
│   └── pages/
└── commands.js
```

## Author

Dikara Derandia
