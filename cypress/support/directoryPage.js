class DirectoryPage {
  visit() {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory",
    );
  }

  resetButton() {
    return cy.get('button[type="reset"]');
  }

  expandFilterButton() {
    return cy.get('div[class="--toggle"] button[type="button"]');
  }

  clickSearch() {
    cy.contains("button", "Search").click();
  }

  openDirectory() {
    cy.contains("Directory").click();
  }

  searchEmployee(name) {
    cy.get('input[placeholder="Type for hints..."]').first().clear().type(name);
    cy.wait(1000);

    cy.contains(".oxd-autocomplete-option", name).should("be.visible").click();

    cy.get('input[placeholder="Type for hints..."]')
      .first()
      .should("have.value", "Peter Mac Anderson");
  }

    searchEmployeeNotVisible(name) {
    cy.get('input[placeholder="Type for hints..."]').first().clear().type(name);
    cy.wait(1000);
    cy.contains(".oxd-autocomplete-option", 'No Records Found').should("be.visible").click();

  }

  selectJobTitle(jobTitle) {
    cy.get(".oxd-select-text").eq(0).click();

    cy.contains(".oxd-select-option", jobTitle).click();
  }

  selectLocation(location) {
    cy.get(".oxd-select-text").eq(1).click();

    cy.contains(".oxd-select-option", location).click();
  }

  assertionEmployeeFound() {
    cy.get(".orangehrm-directory-card").should("exist");
  }

   assertionEmployeeNotFound() {
   
     cy.contains('Invalid').should('be.visible')
  }

  assertionSearchAPI() {
    cy.wait("@directoryAPI").its("response.statusCode").should("eq", 200);
  }

  assertionOpenDirectory() {
    cy.url().should("include", "directory");
  }

  assertionResetButton() {
    cy.get('input[placeholder="Type for hints..."]')
      .first()
      .should("have.value", "");

    cy.get(".oxd-select-text").eq(0).should("contain", "-- Select --");

    cy.get(".oxd-select-text").eq(1).should("contain", "-- Select --");
  }
  assertionFilterCollapsed() {
    cy.get('input[placeholder="Type for hints..."]')
      .first()
      .should("not.be.visible");
  }
}

export default DirectoryPage;
