// to start the test run npx cypress open into your terminal
describe('Home page user flow', () => {
    beforeEach(() => {
        cy.onLoad()
    });
// 
    it('Should contain a Header with a How to and the Images ', () => {
        cy.get('.header')
          .should('be.visible')
          .get('.ash')
          .should('be.visible')
          .get('.pokeball')
          .should('be.visible')
          .get('.how-to')
          .contains('How To')

    });

    it('Should be able to click on How to and go to the How To page', () => {
        cy.get('a')
          .click()
          .get('.howto-page')
          .should('be.visible')
    });

    it('Should have a search field', () => {
        cy.get('form')
          .should('be.visible')     
    });

    it('Should show an error message if the user adds the wrong name', () => {
          cy.get('input[type="search"]')
            .type('poop')
            .should('have.value',  'poop')
            .get('button')
            .click()
            .get('h2')
            .should('be.visible')
            .contains('Everybody makes a wrong turn once in a while!')
    });

    it('Should be able to search Pokemon by Name', () => {
        cy.get('input[type="search"]')
          .type('Pikachu')
          .should('have.value', 'Pikachu')
          .get('button')
          .click()
          .get('.pokemon-details-page')
          .contains('25')
          .get('.pokemon-details-header')
          .contains('pikachu')
          .get('img[src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"]')
          .should('be.visible')
    });

    it('Should play a sound if you search for Pikachu', () => {
        cy.get('input[type="search"]')
          .type('Pikachu')
          .should('have.value', 'Pikachu')
          .get('button')
          .click()
          .get('.pokemon-audio')
          .should('exist')
         
    });

    it('Should show an error message if the user adds the wrong id number', () => {
        cy.get('input[type="search"]')
          .type('200')
          .should('have.value',  '200')
          .get('button')
          .click()
          .get('h2')
          .should('be.visible')
          .contains('Everybody makes a wrong turn once in a while!')           
            
    });

    it('Should be able to search Pokemon by Id Number', () => {
        cy.get('input[type="search"]')
          .type('6')
          .should('have.value',  '6')
          .get('button')
          .click()
          .get('.pokemon-details-page')
          .contains('charizard')
          .get('img[src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"]')
          .should('be.visible')
    });
})