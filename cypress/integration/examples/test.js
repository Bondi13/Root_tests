/// <reference types="Cypress" />

import MainPage from "../pageObjects/mainPage"
import data from "../../fixtures/data.json"

const mainPage = new MainPage()

describe('Tests of ROOT', () => {

    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit(Cypress.env('url'))
    })

    describe('checks if rooms and revenue are counted correctly', () => {
        data.tests.forEach((testValues) => {
            it(`for ${testValues.premiumRooms} premium and ${testValues.economyRooms} economy`, () => {
                mainPage.getPremiumRoomsTextField().clear().type(testValues.premiumRooms)
                mainPage.getEconomyRoomsTextField().clear().type(testValues.economyRooms)
                mainPage.getCalculateButton().click()
                mainPage.getPremiumRoomsRevenue().invoke('text').then((text) => {
                    cy.decodeRoomsUsageAndRevenue(text).then((result) => {
                        expect(result.numberOfRooms).to.eq(testValues.usagePremium)
                        expect(result.revenue).to.eq(testValues.revenuePremium)
                    })
                })
                mainPage.getEconomyRoomsRevenue().invoke('text').then((text) => {
                    cy.decodeRoomsUsageAndRevenue(text).then((result) => {
                        expect(result.numberOfRooms).to.eq(testValues.usageEconomy)
                        expect(result.revenue).to.eq(testValues.revenueEconomy)
                    })
                })
            })
        })
    })

    describe('checks if front is updated correctly', () => {
        it()
    })
})