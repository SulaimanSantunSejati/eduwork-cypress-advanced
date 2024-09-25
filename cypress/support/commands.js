// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (username,password) => {
    cy.clearCookies()
    cy.clearLocalStorage()

    cy.get('#user_login').clear()
    cy.get ('#user_login').type(username)
    cy.get('#user_login').should('have.value', username)

    cy.get('input[name="user_password"]').clear()
    cy.get('input[name="user_password"]').type(password)
    cy.get('input[name="user_password"]').should('have.value', password)

    cy.get('input[name="submit"]').click()
      // it('Should check the checkbox', () => {
      //        cy.get('#user_remember_me').check()
      //        cy.get('#user_remember_me').uncheck()
      //        });
})

Cypress.Commands.add('logins', (username, password) => {
  cy.clearCookies()
  cy.clearLocalStorage()

  // input username
  cy.get('[data-test="username"]').clear().type(username)
  cy.get('[data-test="username"]').should('have.value', username)

  // input password
  cy.get('[data-test="password"]').clear().type(password)
  cy.get('[data-test="password"]').should('have.value', password)

  // Klik tombol login
  cy.get('#login-button').click()
})



