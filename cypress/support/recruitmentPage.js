class Recruitment {
  visit() {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates",
    );
  }

  addCandidateButton() {
    return cy.contains('button', 'Add')
}

  fromDateField() {
    return cy.get('input').eq(1)
}

toDateField() {
    return cy.get('input').eq(2)
}

  resetButton() {
    return cy.get('button[type="reset"]');
  }

  searchButton() {
    return cy.get('button[type="submit"]');
  }

    searchCandidateName(name) {
    cy.get('input[placeholder="Type for hints..."]').first().clear().type(name);
    cy.wait(1000);

    cy.contains(".oxd-autocomplete-option", name).should("be.visible").click();

    cy.get('input[placeholder="Type for hints..."]')
      .first()
      .should("have.value", "John  Doe");
  }

  expandFilterButton() {
    return cy.get('div[class="--toggle"] button[type="button"]');
  }

  openRecruitment() {
    cy.contains("Recruitment").click();
  }

  vacancyDropdown (){

    return  cy.get(".oxd-select-text").eq(1)

  }

  selectMethodOfApplication(method) {

    cy.contains('label', 'Method of Application')
      .parents('.oxd-input-group')
      .find('.oxd-select-text')
      .click()

    cy.contains('.oxd-select-option', method)
      .should('be.visible')
      .click()
}

  selectVacancy() {
    cy.get(".oxd-select-text").eq(1).click();
     cy.get('.oxd-select-option')
      .should('have.length.greaterThan', 2)

     cy.get('.oxd-select-option')
      .eq(2)
      .click()
  }

  selectStatus(status) {

    cy.get('.oxd-select-text')
      .eq(3) 
      .click()

    cy.contains('.oxd-select-option', status)
      .should('be.visible')
      .click()
}

selectHiringManager() {

    cy.get('.oxd-select-text')
      .eq(2)
      .click()

    cy.get('.oxd-select-option')
      .first()
      .click()

}

inputFromDate(date) {

  cy.get("input[placeholder='From']")
  .clear()
  .type(date)

}

inputToDate(date) {

   cy.get("input[placeholder='To']")
  .clear()
  .type(date)

  

}

  assertionCandidateFound() {
    cy.get(".oxd-table-row").should("exist");
  }

  assertionSearchAPI() {
    cy.wait("@recruitmentAPI").its("response.statusCode").should("eq", 200);
  }

  assertionOpenRecruitment() {
    cy.url().should("include", "recruitment");
  }

  assertionFilterCollapsed() {
    cy.get('input[placeholder="Type for hints..."]')
      .first()
      .should("not.be.visible");
  }
  assertionReset(){
    this.vacancyDropdown().should('contain', '-- Select --')
  }

  assertionAddCandidatePage() {
    cy.url()
      .should('include', '/recruitment/addCandidate')

    cy.contains('Add Candidate')
      .should('be.visible')
}

assertionSearchAPI() {

    cy.wait('@recruitmentAPI')
      .its('response.statusCode')
      .should('eq', 200)
}
}
export default Recruitment;
