/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        //cy.get('#contact-us').click({force: true})
        cy.get('.section_header').should('have.text', 'CONTACT US')
        cy.get('#nav-title').should('have.text', 'WebdriverUniversity.com (New Approach To Learning)');
        cy.get('[type="reset"]').should('have.value', 'RESET');
        cy.get('[type="submit"]').should('have.value', 'SUBMIT');
        cy.get('[name="first_name"]').type("Joe");
        cy.get('[name="last_name"]').type("blogs");
        cy.get('[name="email"]').type("joe_blogs123@gmail.com")
        cy.get('textarea.feedback-input').type("How can I learn Cypress?");
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!');
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('[name="first_name"]').type("Tom");
        cy.get('[name="last_name"]').type("blogs");
        cy.get('textarea.feedback-input').type("How can I learn Cypress?")
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required');
    });
})