/// <reference types="cypress" />
import loginPage from "../support/ObjectRepository/LoginPage";
before(() => {
  cy.visit("/");
});
describe("Purchase Test", () => {
  it("Purchase some Dress and T-Shirt", () => {
    loginPage.loginAction("yasmanys88@gmail.com", "d12r57dd");
  });
});
