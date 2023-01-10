/* eslint-disable no-undef */
describe('template spec', () => {
  it('Should login', () => {
    cy.visit('/');
    cy.get(".sc-pVTFL").click();
    cy.get("input[name='email']").type("test@test.com");
    cy.get("input[name='password']").type("test1234");
    cy.get("button[type='submit']").click();
    cy.url().should('eq', Cypress.config().baseUrl +  "/WatchTime_React/profile");
  })
})