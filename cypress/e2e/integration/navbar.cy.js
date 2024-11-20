/// <reference types="cypress" />

describe('Navbar Test', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    it('Should display online banking content', () => {
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
        cy.get('p').should('be.visible')
        cy.get('h3').should('be.visible') 
        cy.wait(1000)
    });

    it('Should display feedback content', () => {
        cy.get('#feedback').click()
        cy.url().should('include','feedback.html')
        cy.get('form').should('be.visible'); 
        cy.get('input[name="name"]').should('be.visible'); 
        cy.get('input[name="email"]').should('be.visible'); 
        cy.get('input[name="subject"]').should('be.visible'); 
        cy.wait(1000)
    });

    it('Should display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
        cy.get('input[name="searchTerm"]').should('be.visible');
        cy.get('img[alt=""]').should('be.visible');
    });

});


