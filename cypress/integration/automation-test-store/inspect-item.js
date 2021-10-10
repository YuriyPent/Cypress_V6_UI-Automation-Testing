/// <reference types="cypress" />

describe("Inspect Automation Test Store items using chain of commands", () => {
    it.only("Click on the first item using item text", () => {

        cy.visit("/");
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
            .then(function (itemHeaderText) {
                cy.log('Selected the following item: ' + itemHeaderText.text())
            });
    });

    it("Click on the first item using item index", () => {

        cy.visit("/");
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
    });
})