/// <reference types="cypress" />
import loginPage from "../support/ObjectRepository/LoginPage";
before(() => {
  cy.visit("/");
});
describe("Purchase Test", () => {
  it("Purchase some Dress and T-Shirt", () => {
    cy.fixture("loginLocator").then((login) => {
      cy.get(login.loginLink).click();
      cy.get(login.mailInput).type("yasmanys88@gmail.com");
      cy.get(login.passInput).type("d12r57dd");
      cy.get(login.sigInBtn).click();
    });

    cy.fixture("homePage").then((home) => {
      cy.get(home.homeTitle).should("contain", "My account");
    });

    cy.fixture("blockTop").then((searchbox) => {
      cy.get(searchbox.searchInput).type("dress");
      cy.get(searchbox.searchBtn).click();
    });

    cy.fixture("search").then((search) => {
      cy.get(search.pageTitle).should("contain", "dress");
      cy.get(search.firtsResult).should("contain", "In stock");
      cy.get(search.addToCard).click();
    });
    cy.wait(10000);
    cy.fixture("layerCart").then((layercart) => {
      cy.get(layercart.titleCartProduct).should(
        "contain",
        "Product successfully added to your shopping cart"
      );
      cy.get(layercart.continueBtn).click();
    });

    cy.fixture("blockTop").then((blocktop) => {
      cy.get(blocktop.cart_quantity).should("contain", "1");
    });

    cy.fixture("categories").then((categories) => {
      cy.get(categories.tshirtlink).click();
    });

    cy.fixture("tshirts").then((tshirt) => {
      cy.get(tshirt.title).should("contain", "T-shirts");
      cy.get(tshirt.available).should("contain", "In stock");
      cy.get(tshirt.moreBtn).click();
    });

    cy.fixture("product").then((products) => {
      cy.get(products.plusBtn).click();
      //cy.get(products.plusBtn).type('2') /* Another way  */
      cy.get(products.addtocartBtn).click();
    });
    cy.wait(10000);
    cy.fixture("layerCart").then((layercart) => {
      cy.get(layercart.titleCartProduct).should(
        "contain",
        "Product successfully added to your shopping cart"
      );
      cy.get(layercart.checkoutBtn).click();
    });

    cy.fixture("shoppinCar").then((sc) => {
      cy.get(sc.checkoutBtn).click();
      cy.get(sc.checkoutBtn).click();
      cy.get(sc.checkboxShiping).check();
      cy.get(sc.checkoutBtn).click();
      cy.get(sc.paybyCheck).click();
      cy.get(sc.checkoutBtn).click();
      cy.get(sc.alerta).should(
        "contain",
        "Your order on My Store is complete."
      );
      cy.get(sc.backtoordersBtn).click();
    });

    cy.fixture("loginLocator").then((login) => {
      cy.get(login.logoutLink).click();
      cy.get(login.pageLogin).should("contain", "Authentication");
    });
  });
});
