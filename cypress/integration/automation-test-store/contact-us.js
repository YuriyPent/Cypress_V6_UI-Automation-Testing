/// <reference types="cypress" />

describe("Test Contact Us form via Automation Test Store", () => {

    before(function () {
        cy.viewport(550, 750);
        cy.fixture("userDetails").as("user")
    })

    it("Should be able to submit a successful submission via contact us form", () => {

        cy.intercept('GET', '**/product/product/addToCart', {
            statusCode: 200
            , body: '{"cart_details":"\t<div class=\"empty_cart text-center\">\n\t\t<i class=\"fa fa-shopping-cart\"><\/i>\n\t<\/div>\n","item_count":1,"total":"$1.00"}'
        }).as('addToCart');

        cy.intercept('POST', '**/visit_url/', {
            statusCode: 200
            , body: '{"msg": "success", "is_error": false, "code": 200}'
        }).as('visit_url');

        cy.intercept('GET', '**/banner_manager*', {
            statusCode: 200,
            body: '{ "success": "OK" }'
        }).as('banner_manager');

        cy.intercept('POST', '**/send_user_data/', {
            statusCode: 200,
            body: '{"msg": "success", "is_error": false, "code": 200}'
        }).as('send_user_data');

        // cy.intercept('GET', '/users/get_id*', {
        //     statusCode: 200
        //     , body: '{"code": 200, "is_error": false, "data": "OK"}'
        // }).as('get_id');

        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href$='contact']").click().then(function (linkText) {
            cy.log('Clicked on link using text: ' + linkText.text())
        });
        cy.xpath('//h2[starts-with(text(), "Con")]/following-sibling::ul/li[1]').contains("+123 456 7890");
        cy.xpath('//h2[starts-with(text(), "Con")]/following-sibling::ul/li[2]').contains("admin@automationteststore.com");
        cy.get('#ContactUsFrm_first_name').type("Joe");
        cy.get('#ContactUsFrm_email').type("joe_blog01@gmail.com");
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.get('#ContactUsFrm_enquiry').type("Do you provide additional on bulk orders?");
        cy.get("button[title='Submit']").click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
        cy.log('Test has completed!');
    });

    it.only("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href$='contact']").click().then(function (linkText) {
            cy.log("Clicked on link using text: " + linkText.text())
        })
        cy.get("@user").then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.first_name);
            cy.get('#ContactUsFrm_email').type(user.email);
        })
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk orders?");
        cy.get("button[title='Submit']").click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
        cy.log("Test has completed!");
    });
});
