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
Cypress.Commands.add('decodeRoomsUsageAndRevenue', (text) => {
    text = text.split(":")[1]
    const numberOfRooms = text.split("(")[0].trim()
    text = text.split("EUR")[1]
    const revenue = text.split(")")[0].trim() 
    return {
        "numberOfRooms": parseInt(numberOfRooms, 10),
        "revenue": parseInt(revenue, 10)
    }
})
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