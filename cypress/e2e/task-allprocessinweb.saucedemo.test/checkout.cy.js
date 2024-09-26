/// <reference types="cypress" />

describe('Test for checkout.', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com');
        cy.fixture('users').then(users => {
        cy.logins(users.validUser.username, users.validUser.password)
        cy.wait(2000)
        cy.get('.inventory_item').first().find('button').click();
        cy.get('.shopping_cart_link').click();
      });
  });  
      it('should proceed to checkout', () => {
        cy.get('.btn_action').click();
        cy.get('[data-test="firstName"]').type('Sulaiman');
        cy.get('[data-test="lastName"]').type('Santun');
        cy.get('[data-test="postalCode"]').type('99999');
        cy.get('.btn_primary').click();
        cy.get('.btn_action').click();
        cy.get('.complete-header').should('contain.text', 'Thank you for your order!');
      });
 });