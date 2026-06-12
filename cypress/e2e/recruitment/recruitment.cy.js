import LoginPage from "../../support/loginPage";
import RecruitmentPage from "../../support/recruitmentPage";
import RecruitmentData from "../../fixtures/recruitmentData";
import LoginData from "../../fixtures/loginData";

const loginPage = new LoginPage();
const recruitmentPage = new RecruitmentPage();

describe("OrangeHRM - Recruitment Feature", () => {
  beforeEach(() => {
    loginPage.visit();

    loginPage.inputUsername(LoginData.validUsername);
    loginPage.inputPassword(LoginData.validPassword);
    loginPage.clickLogin();

    cy.url().should("include", "/dashboard");

    
  });

  it('TC-RECRUITMENT-001 -  Search Recruitment Using valid job title', () => {

                 cy.intercept(
          'GET',
          '**/v2/recruitment/candidates*'
      ).as('recruitmentAPI')

      recruitmentPage.openRecruitment()
     recruitmentPage.selectVacancy()
      recruitmentPage.searchButton().click()
      recruitmentPage.assertionSearchAPI()

      recruitmentPage.assertionCandidateFound()

     
  })


  it('TC-RECRUITMENT-002 -  Verification Open Menu Recruitment', () => {

                 cy.intercept(
          'GET',
          '**/api/v2/recruitment/candidates*'
      ).as('recruitmentAPI')

      recruitmentPage.openRecruitment()
        recruitmentPage.assertionOpenRecruitment()

  })

    it('TC-RECRUITMENT-003 -  Search Recruitment Using valid hiring manager', () => {

                 cy.intercept(
          'GET',
          '**/v2/recruitment/candidates*'
      ).as('recruitmentAPI')

      recruitmentPage.openRecruitment()
     recruitmentPage.selectHiringManager()
      recruitmentPage.searchButton().click()
      recruitmentPage.assertionSearchAPI()

      recruitmentPage.assertionCandidateFound()

     
  })

  it('TC-RECRUITMENT-004 - Search candidates with status', () => {

    cy.intercept(
        'GET',
        '**/api/v2/recruitment/candidates*'
    ).as('recruitmentAPI')

    recruitmentPage.openRecruitment()

    recruitmentPage.selectStatus('Shortlisted')

    recruitmentPage.searchButton().click()

    recruitmentPage.assertionSearchAPI()

    recruitmentPage.assertionCandidateFound()

    

})

  it('TC-RECRUITMENT-005 - Search candidates with candidate name', () => {

    cy.intercept(
        'GET',
        '**/api/v2/recruitment/candidates*'
    ).as('recruitmentAPI')

    recruitmentPage.openRecruitment()

    recruitmentPage.searchCandidateName("John")

    recruitmentPage.searchButton().click()

    recruitmentPage.assertionSearchAPI()

    recruitmentPage.assertionCandidateFound()

    

})


  it('TC-RECRUITMENT-006 - Search candidates dengan tanggal', () => {

    cy.intercept(
        'GET',
        '**/api/v2/recruitment/candidates*'
    ).as('recruitmentAPI')

    recruitmentPage.openRecruitment()

    recruitmentPage.inputFromDate('2026-01-06')

    recruitmentPage.inputToDate('2026-06-17')

    cy.get('.oxd-calendar-wrapper')
      .click()

    cy.get('body')
      .type('{esc}')

    recruitmentPage.searchButton().click()

    recruitmentPage.assertionSearchAPI()
    recruitmentPage.assertionCandidateFound()

    
})

it('TC-RECRUITMENT-007 - Search candidates dengan Method of Application', () => {

    cy.intercept(
        'GET',
        '**/api/v2/recruitment/candidates*'
    ).as('recruitmentAPI')

    recruitmentPage.openRecruitment()

    recruitmentPage.selectMethodOfApplication('Manual')

    recruitmentPage.searchButton().click()

    recruitmentPage.assertionSearchAPI()

    recruitmentPage.assertionCandidateFound()

})


  it("TC-DIRECTORY-008 -  verifikasi expand filter button", () => {
         cy.intercept(
          'GET',
          '**/api/v2/recruitment/candidates*'
      ).as('recruitmentAPI')

    recruitmentPage.openRecruitment();
    recruitmentPage.assertionSearchAPI();

    recruitmentPage.expandFilterButton().click();
    recruitmentPage.assertionFilterCollapsed();
  });

    it('TC-DIRECTORY-009 -  verifikasi reset button', () => {

                 cy.intercept(
        'GET',
        '**/api/v2/recruitment/candidates*'
    ).as('recruitmentAPI')

    recruitmentPage.openRecruitment()

    recruitmentPage.selectVacancy()

    recruitmentPage.resetButton().click()

   recruitmentPage.assertionSearchAPI()
   recruitmentPage.assertionReset()

  })

  it('TC-RECRUITMENT-010 - Tombol Plus Add Candidate', () => {

    cy.intercept(
        'GET',
        '**/web/index.php/api/v2/recruitment/**'
    ).as('recruitmentAPI')

    recruitmentPage.openRecruitment()

    recruitmentPage.addCandidateButton()
      .click()

    recruitmentPage.assertionAddCandidatePage()

})


   
});
