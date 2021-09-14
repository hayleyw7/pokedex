describe('Home page user flow', () => {
    beforeEach(() => {
        cy.onLoad()
    });

    it.skip('Should contain the Naviagtion bar with all elements ', () => {
        cy.get()
          .should('be.visible')
          .get()
          .contains()
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
          .type('CharmAnder')
          .should('have.value',  'CharmAnder')
          .get('button')
          .click()
          .get('.pokemon-card')
          .contains('charmander')
          .get('img[src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"]')
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
      .get('.pokemon-card')
      .contains('charizard')
      .get('img[src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"]')
      .should('be.visible')
});




    // need to fix the search with a clear search method so i can test for id as well 



})