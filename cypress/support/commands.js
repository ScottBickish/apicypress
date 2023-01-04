Cypress.Commands.add('Login', (email, password) => {
    cy.get('#Email').clear().type(email);
    cy.get('#Password').clear().type(password);
    cy.get("button[type = 'submit']").click();
})
