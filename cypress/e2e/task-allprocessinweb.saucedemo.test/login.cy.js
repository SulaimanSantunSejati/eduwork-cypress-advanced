/// <reference types="cypress" />

describe('Test for SauceDemo login.', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    });

    it('Should login with valid credentials ', () => {
        cy.fixture('users').then(users => {
            const username = users.validUser.username
            const password = users.validUser.password
    
            cy.get('[data-test="username"]').type(username)
            cy.get('[data-test="password"]').type(password)
            cy.get('#login-button').click()
            
            cy.url().should('include', '/inventory.html')
            cy.get('[data-test="title"]').should('be.visible')
            cy.get("#shopping_cart_container").should('be.visible')

        });
    });
        it('Should login with invalid credentials', () => {
            cy.fixture('users').then(users => {
                cy.get('[data-test="username"]').type(users.invalidUser.username);
                cy.get('[data-test="password"]').type(users.invalidUser.password);
                cy.get('#login-button').click()
                cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
            });
    });
    
});