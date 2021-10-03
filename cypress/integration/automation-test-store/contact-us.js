/// <reference types="cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
    it("Should be able to submit a successful submission via contact us form", () => {

        cy.intercept('GET', '**/product/product/addToCart', {
            statusCode: 200
            , body: '{"cart_details":"\t<div class=\"empty_cart text-center\">\n\t\t<i class=\"fa fa-shopping-cart\"><\/i>\n\t<\/div>\n","item_count":1,"total":"$1.00"}'
        }).as('addToCart');

        cy.intercept('GET', '**/banner_manager*', {
            statusCode: 200,
            body: '{ "success": "OK" }'
        }).as('banner_manager');

        cy.intercept('GET', '/users/get_id*', {
            statusCode: 200
            , body: '{"code": 200, "is_error": false, "data": "OK"}'
        }).as('get_id');

        cy.visit("https://www.automationteststore.com/");
        cy.get('.info_links_footer > :nth-child(5) > a').click();
        cy.get('#ContactUsFrm_first_name').type("Joe");
        cy.get('#ContactUsFrm_email').type("joe_blog01@gmail.com");
        cy.get('#ContactUsFrm_enquiry').type("Do you provide additional on bulk orders?");
        cy.get('.col-md-6 > .btn').click();
    })
})