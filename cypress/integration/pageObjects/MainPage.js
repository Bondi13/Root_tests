class MainPage{

    getPremiumRoomsTextField(){
        return cy.contains('p', 'Premium Rooms:').next('input[type="number"]')
    }

    getEconomyRoomsTextField(){
        return cy.contains('p', 'Economy Rooms:').next('input[type="number"]')
    }

    getCalculateButton(){
        return cy.get('button')
    }

    getPremiumRoomsRevenue(){
        return cy.contains('p', 'Usage Premium:')
    }

    getEconomyRoomsRevenue(){
        return cy.contains('p', 'Usage Economy:')
    }
}

export default MainPage