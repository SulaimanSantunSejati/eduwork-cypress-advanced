/// <reference types="cypress" />

describe('Login / Logout test', () =>{
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', '/login.html')
    });

    it('Should try to Login with invalid data and display error message', () => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.get('#user_remember_me').check()
        cy.get('input[name="submit"]').click() 
        cy.get('.alert.alert-error').should('be.visible').and('contain.text', 'Login and/or password are wrong.')
    });

    it('Should login with valid data', () => {
        cy.fixture("user").then((user) => {
            cy.login(user.username, user.password) 
            cy.wait(1000);
            cy.url().should('include', '/bank');
            cy.get('h2').should('contain.text', 'Cash Accounts')
        });
    });

    it('Should logout from website', () => {
        cy.fixture("user").then((user) => {
            cy.login(user.username, user.password)
            cy.wait(1000);
            cy.get('.icon-user').click()  
            cy.get('#logout_link').click()  
            cy.url().should('include', '/index.html');
            cy.get('strong').should('contain.text', "Online Banking")
        });
    });
});
