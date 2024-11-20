/// <reference types="cypress" />

describe('Search Functionality Test on Zero Bank', () => {

    beforeEach(() => {
     
      cy.visit('http://zero.webappsecurity.com/login.html');
      
      cy.get('#user_login').type('username'); 
      cy.get('#user_password').type('password'); 
      cy.get('input[name="submit"]').click();
  
    });
  
    it('Should search for "Zero Bank" and validate the results', () => {
  
      cy.get('#searchTerm').type('online{enter}'); 
    
      cy.wait(1000);
  
      cy.contains('h2', 'Search Results').should('be.visible');
      cy.contains('Zero - Free Access to Online Banking').should('be.visible');
      cy.contains('Zero - Online Statements').should('be.visible');
    });
  
  });