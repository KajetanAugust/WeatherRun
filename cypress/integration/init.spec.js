describe('Cypress', () => {
    it('is working', () => {
        // eslint-disable-next-line jest/valid-expect
        expect(true).to.equal(true)
    })
})

describe('General tests', () => {

    it('visits the app', () => {
        // eslint-disable-next-line no-undef
        cy.visit('https://blissful-almeida-fb7353.netlify.app')
    })

    it('app changes theme', () => {
        // eslint-disable-next-line no-undef
        cy.get('.PrivateSwitchBase-input-4')
            .click()
    })
})

describe('Search form tests', () => {
    beforeEach(() => {
        // eslint-disable-next-line no-undef
        cy.visit('https://blissful-almeida-fb7353.netlify.app')
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
        cy.url().should('eq', 'https://blissful-almeida-fb7353.netlify.app')
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
        cy.url().should('eq', 'https://blissful-almeida-fb7353.netlify.app/results?search=katowice')
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
        cy.url().should('eq', 'https://blissful-almeida-fb7353.netlify.app/results?search=katowice')
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
        cy.url().should('eq', 'https://blissful-almeida-fb7353.netlify.app/results?search=katowice')
    })

    it('locates user', () => {
        // eslint-disable-next-line no-undef
        cy.get('.location-button')
            .click()
    })
})


describe('Results', () => {
    beforeEach(() => {
        // eslint-disable-next-line no-undef
        cy.visit('https://blissful-almeida-fb7353.netlify.app')
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
        cy.url().should('eq', 'https://blissful-almeida-fb7353.netlify.app/info')
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
        cy.url().should('eq', 'https://blissful-almeida-fb7353.netlify.app')
    })
})


