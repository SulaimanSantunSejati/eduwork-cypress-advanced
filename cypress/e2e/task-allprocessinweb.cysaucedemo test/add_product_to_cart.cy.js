/// <reference types="cypress" />

describe('Add to Cart Test', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    });

    it('Should login with valid credentials ', () => {
       
         cy.fixture('users').then(users => {
         cy.logins(users.validUser.username, users.validUser.password)

         cy.url().should('include', '/inventory.html')
         cy.get('[data-test="title"]').should('be.visible')
         cy.get("#shopping_cart_container").should('be.visible')

        })
    })
    
        it('Should add an item to the cart and remove it', () => {
            cy.fixture('users').then(users => {
                cy.logins(users.validUser.username, users.validUser.password)
            
            // cy.get('.inventory_item').first().find('button').click()
            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
            // cy.get("add-to-cart-sauce-labs-backpack")
            cy.get('.shopping_cart_badge').should('contain.text', '1')



            cy.get('.shopping_cart_link').click()
            cy.get('.cart_item').first().find('.cart_button').click()
            cy.get('.cart_item').should('have.length', 0)
        })
    });
    
});