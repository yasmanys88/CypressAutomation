/// <reference types="cypress" />
import loginPage from "../support/ObjectRepository/LoginPage";
before(() => {
  cy.visit("/");
});
describe("Purchase Test", () => {
  it("Purchase some Dress and T-Shirt", () => {
    loginPage.loginAction("yasmanys88@gmail.com", "d12r57dd")
    cy.fixture('homePage').then((home)=>{
      cy.get(home.homeTitle).should('contain','My account')
    })

    cy.fixture('blockTop').then((searchbox)=>{
        cy.get(searchbox.searchInput).type('dress')
        cy.get(searchbox.searchBtn).click()
    })

    cy.fixture('search').then((search)=>{
        cy.get(search.pageTitle).should('contain','dress')
        cy.get(search.firtsResult).should('contain','In stock')
        cy.get(search.addToCard).click()
    })
    cy.fixture('layerCart').then((layercart)=>{
        cy.get(layercart.titleCartProduct).should('contain','Product successfully added to your shopping cart')
        cy.get(layercart.continueBtn).click()
    })
    cy.fixture('blockTop').then((blocktop)=>{
        cy.get(blocktop.cart_quantity).should('contain','1')
    })
    cy.fixture('categories').then((categories)=>{
      cy.get(categories.tshirtlink).click()
  })


  });
});
