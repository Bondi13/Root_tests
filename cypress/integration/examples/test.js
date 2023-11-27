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
        it('when changing premium rooms number after calculating', () => {
            mainPage.getPremiumRoomsTextField().clear().type('3')
            mainPage.getEconomyRoomsTextField().clear().type('3')
            mainPage.getCalculateButton().click()
            let initialValue
            mainPage.getPremiumRoomsRevenue().invoke('text').then((text) => {
                initialValue = text
            })
            mainPage.getPremiumRoomsTextField().clear().type('10')
            mainPage.getPremiumRoomsRevenue().invoke('text').then((text) => {
                expect(text).to.eq(initialValue)
            })
        })

        it('when changing premium rooms number after calculating', () => {
            mainPage.getPremiumRoomsTextField().clear().type('3')
            mainPage.getEconomyRoomsTextField().clear().type('3')
            mainPage.getCalculateButton().click()
            let initialValue
            mainPage.getEconomyRoomsRevenue().invoke('text').then((text) => {
                initialValue = text
            })
            mainPage.getEconomyRoomsTextField().clear().type('10')
            mainPage.getEconomyRoomsRevenue().invoke('text').then((text) => {
                expect(text).to.eq(initialValue)
            })
        })

        it('when using spinner to get negative number of premium rooms', () => {
            //...
        })

        it('more tests here...', () => {
            assert(true)
        })
    })
})