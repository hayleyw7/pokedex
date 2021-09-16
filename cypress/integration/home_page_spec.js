describe('Home page user flow', () => {
    beforeEach(() => {
        cy.onLoad()
    });
// 
    it('Should contain a Header (the Navigation bar) with a How to and a Image ', () => {
        cy.get('.header')
          .should('be.visible')
          .get('.header-image')
          .should('be.visible')
          .get('.how-to')
          .contains('How To')

        //   we need to add test for the animations
    });

    it('Should be able to click on How to and go to the How To page', () => {
        cy.get('a')
          .click()
          .get('.all-pokemon')
          .should('not.exist')
          .get('.help-page')
          .should('be.visible')
    });

    it('Should be able to click on the x button and get back to the home page', () => {
        cy.get('a')
          .click()
          .get('.x-icon')
          .click()
          .get('.help-page')
          .should('not.exist')
          .get('.all-pokemon')
          .should('be.visible')
    });

    it('Should load all the pokemons first generation when the page starts', () => {
        cy.get('.all-pokemon')
          .should('be.visible')
          .get('.pokemon-card')
          .contains('bulbasaur')
          .get('img[src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"]')
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
            .contains('try again')
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
          .get('img[src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"]')
          .should('be.visible')
    });

    it('Should show an error message if the user adds the wrong id number', () => {
        cy.get('input[type="search"]')
          .type('200')
          .should('have.value',  '200')
          .get('button')
          .click()
          .get('h2')
          .should('be.visible')
          .contains('try again')           
            
    });

    it('Should be able to search Pokemon by Id Number', () => {
        cy.get('input[type="search"]')
          .type('6')
          .should('have.value',  '6')
          .get('button')
          .click()
          .get('.pokemon-details-page')
          .contains('charizard')
          .get('img[src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"]')
          .should('be.visible')
    });

})

// I still want to add a test to show that we can move foward with the browser arrow 
// would Love to hear from Kayla her input about anything else we should test