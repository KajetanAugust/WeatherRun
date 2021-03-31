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
        const input = 'Katowice'
        // eslint-disable-next-line no-undef
        cy.get('.MuiOutlinedInput-inputMarginDense')
            .type(input)
            .should('have.value', input)
    })

    it('submit locked for input under three letters', () => {
        const input = 'te'
        // eslint-disable-next-line no-undef
        cy.get('.MuiOutlinedInput-inputMarginDense')
            .type(input)
            // eslint-disable-next-line no-undef
            cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.Mui-disabled.Mui-disabled')
            .click()
        // eslint-disable-next-line no-undef
        cy.url().should('eq', 'http://localhost:3000/')
    })

    it('submits input', () => {
        const input = 'katowice'
        // eslint-disable-next-line no-undef
        cy.get('.search-form')
            // eslint-disable-next-line no-undef
            cy.get('.MuiOutlinedInput-inputMarginDense')
            .type(input)
            // eslint-disable-next-line no-undef
            cy.get('.search-link')
            .click()
        // eslint-disable-next-line no-undef
        cy.url().should('eq', 'http://localhost:3000/results?search=katowice')
    })

    it('submits input on enter click', () => {
        const input = 'katowice'
        // eslint-disable-next-line no-undef
        cy.get('.search-form')
        // eslint-disable-next-line no-undef
        cy.get('.MuiOutlinedInput-inputMarginDense')
            .type(input)
            .type('{enter}')
        // eslint-disable-next-line no-undef
        cy.url().should('eq', 'http://localhost:3000/results?search=katowice')
    })


    it('clicks last search', () => {
        const input = "Katowice"
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
