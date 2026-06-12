import LoginPage from "../../support/loginPage";
import DirectoryPage from "../../support/directoryPage";
import LoginData from "../../fixtures/loginData";

const loginPage = new LoginPage();
const directoryPage = new DirectoryPage();

describe("OrangeHRM - Directory Feature", () => {
  beforeEach(() => {
    loginPage.visit();

    loginPage.inputUsername(LoginData.validUsername);
    loginPage.inputPassword(LoginData.validPassword);
    loginPage.clickLogin();

    cy.url().should("include", "/dashboard");

    directoryPage.openDirectory();
  });

  // it('TC-DIRECTORY-001 -  Search Directory Using valid employee name', () => {

  //     cy.intercept(
  //         'GET',
  //         '**/api/v2/directory/employees*'
  //     ).as('directoryAPI')

  //     directoryPage.openDirectory()

  //     directoryPage.searchEmployee("Peter")
  //      directoryPage.clickSearch()
  //     directoryPage.assertionSearchAPI()
  //     directoryPage.assertionEmployeeFound()
  // })
  // it('TC-DIRECTORY-002 -  Search Directory Using valid job title', () => {

  //                cy.intercept(
  //         'GET',
  //         '**/api/v2/directory/employees*'
  //     ).as('directoryAPI')

  //     directoryPage.openDirectory()
  //    directoryPage.selectJobTitle("Chief Executive Officer")
  //     directoryPage.clickSearch()

  //       directoryPage.assertionSearchAPI()
  //       directoryPage.assertionEmployeeFound()
  // })

  // it('TC-DIRECTORY-003 -  Search Directory Using valid location', () => {

  //                cy.intercept(
  //         'GET',
  //         '**/api/v2/directory/employees*'
  //     ).as('directoryAPI')

  //     directoryPage.openDirectory()
  //     directoryPage.selectLocation("New York Sales Office")
  //     directoryPage.clickSearch()

  //       directoryPage.assertionSearchAPI()
  //       directoryPage.assertionEmployeeFound()
  // })

  // it('TC-DIRECTORY-004 -  Search Directory Using combination filter with valid data', () => {

  //                cy.intercept(
  //         'GET',
  //         '**/api/v2/directory/employees*'
  //     ).as('directoryAPI')

  //     directoryPage.openDirectory()
  //      directoryPage.searchEmployee("Peter")
  //       directoryPage.selectJobTitle("Chief Financial Officer")
  //     directoryPage.selectLocation("New York Sales Office")

  //     directoryPage.clickSearch()

  //       directoryPage.assertionSearchAPI()

  //       directoryPage.assertionEmployeeFound()

  //        directoryPage.resetButton().click()

  // })

  // it('TC-DIRECTORY-005 -  Verification Open Menu Directory', () => {

  //                cy.intercept(
  //         'GET',
  //         '**/api/v2/directory/employees*'
  //     ).as('directoryAPI')

  //     directoryPage.openDirectory()

  //       directoryPage.assertionOpenDirectory()

  // })

  // it('TC-DIRECTORY-006 -  verifikasi reset button', () => {

  //                cy.intercept(
  //         'GET',
  //         '**/api/v2/directory/employees*'
  //     ).as('directoryAPI')

  //     directoryPage.openDirectory()
  //       directoryPage.assertionSearchAPI()
  //      directoryPage.searchEmployee("Peter")
  //       directoryPage.selectJobTitle("Chief Financial Officer")
  //     directoryPage.selectLocation("New York Sales Office")

  //        directoryPage.resetButton().click()
  //        directoryPage.assertionResetButton()

  // })

  it("TC-DIRECTORY-007 -  verifikasi expand filter button", () => {
    cy.intercept("GET", "**/api/v2/directory/employees*").as("directoryAPI");

    directoryPage.openDirectory();
    directoryPage.assertionSearchAPI();

    directoryPage.expandFilterButton().click();
    directoryPage.ass;
  });


    it('TC-DIRECTORY-008 -  Search Directory Using invalid employee name', () => {

      cy.intercept(
          'GET',
          '**/api/v2/directory/employees*'
      ).as('directoryAPI')

      directoryPage.openDirectory()

      directoryPage.searchEmployeeNotVisible("P123dsadter")
      directoryPage.assertionSearchAPI()
      directoryPage.assertionEmployeeNotFound()
  })
});
