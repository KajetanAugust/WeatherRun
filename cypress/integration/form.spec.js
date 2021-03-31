describe('Search form tests', () => {
    beforeEach(() => {
        // eslint-disable-next-line no-undef
        cy.visit('/')
    })

    it('focuses the input', () => {
        // eslint-disable-next-line no-undef
        cy.focused().should('have.class', 'MuiOutlinedInput-inputMarginDense')
    })

    it('accepts input', () => {
        const input = "Katowice"
        // eslint-disable-next-line no-undef
        cy.get('.MuiOutlinedInput-inputMarginDense')
            .type(input)
            .should('have.value', input)
    })

    it('submits input', () => {
        const input = "Katowice"
        // eslint-disable-next-line no-undef
        cy.get('.search-form')
            .find('.MuiOutlinedInput-inputMarginDense')
            .type(input)
        // eslint-disable-next-line no-undef
            cy.get('.search-link')
            .click()
        // eslint-disable-next-line no-undef
        cy.url().should('eq', 'http://localhost:3000/results?search=katowice')
    })

    it('clicks last search', () => {
        const input = "Katowice"
        // eslint-disable-next-line no-undef
        cy.get('.search-form')
            .find('.MuiOutlinedInput-inputMarginDense')
            .type(input)
        // eslint-disable-next-line no-undef
        cy.get('.search-link')
            .click()
        // eslint-disable-next-line no-undef
        cy.get('.back-arrow')
            .click()
        // eslint-disable-next-line no-undef
        cy.get('.last-searches-div')
            .find('button')
            .click()
        // eslint-disable-next-line no-undef
        cy.url().should('eq', 'http://localhost:3000/results?search=katowice')
    })

    it('locates user', () => {
        // eslint-disable-next-line no-undef
        cy.get('.location-button')
            .click()
    })
})
