/// <reference types="Cypress" />

beforeEach("https://kavautoverhuur.nl/",() => {
    cy.visit("https://kavautoverhuur.nl/")        
})

describe("Homepage of KAV Auto Verhuur", () => {
    it("Catch empty a tags", () => {
        cy.get("a[href]")
            .each($el => {
                cy.wrap($el).should('have.attr', 'href').should('not.be.empty')
            })
    })
})
