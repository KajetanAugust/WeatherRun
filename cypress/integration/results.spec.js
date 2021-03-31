describe('Results', () => {
    beforeEach(() => {
        // eslint-disable-next-line no-undef
        cy.visit('/')
    })

    it('site info is shown', () => {
        const input = 'Katowice'
        // eslint-disable-next-line no-undef
        cy.get('.search-form')
        // eslint-disable-next-line no-undef
        cy.get('.MuiOutlinedInput-inputMarginDense')
            .type(input)
        // eslint-disable-next-line no-undef
        cy.get('.search-link')
            .click()
        // eslint-disable-next-line no-undef
        cy.get('.footer')
            .find('button')
            .click()
        // eslint-disable-next-line no-undef
        cy.url().should('eq', 'http://localhost:3000/info')
    })

    it('github link/button is present', () => {
        const input = 'Katowice'
        // eslint-disable-next-line no-undef
        cy.get('.search-form')
        // eslint-disable-next-line no-undef
        cy.get('.MuiOutlinedInput-inputMarginDense')
            .type(input)
        // eslint-disable-next-line no-undef
        cy.get('.search-link')
            .click()
        // eslint-disable-next-line no-undef
        cy.get('.footer')
            .find('button')
            .click()
            // eslint-disable-next-line no-undef
            cy.get('.github-link')
                .should('have.attr', 'target', '_blank')
                .should('have.attr', 'href', 'https://github.com/KajetanAugust/WeatherRun')
    })

    it('goes back to search screen', () => {
        const input = 'Katowice'
        // eslint-disable-next-line no-undef
        cy.get('.search-form')
        // eslint-disable-next-line no-undef
        cy.get('.MuiOutlinedInput-inputMarginDense')
            .type(input)
        // eslint-disable-next-line no-undef
        cy.get('.search-link')
            .click()
        // eslint-disable-next-line no-undef
        cy.get('.back-arrow')
            .click()
        // eslint-disable-next-line no-undef
        cy.url().should('eq', 'http://localhost:3000/')
    })
})


