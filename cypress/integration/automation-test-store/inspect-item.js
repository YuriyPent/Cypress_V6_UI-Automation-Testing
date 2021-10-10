/// <reference types="cypress" />

describe("Inspect Automation Test Store items using chain of commands", () => {
    it("Click on the first item using item text", () => {

        cy.visit("/");
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click();
       
    })
})