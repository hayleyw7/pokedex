// to start the test run npx cypress open into your terminal
describe('Pokemon Details page user flow', () => {
  beforeEach(() => {
    cy.onLoad()
  });

  it('Should contain a Header (the Navigation bar) with a How To link and an Image ', () => {
    cy.get('.header')
      .should('be.visible')
      .get('.ash')
      .should('be.visible')
      .get('.how-to')
      .contains('How To')
  });

  it('Should have a search field', () => {
    cy.get('form')
      .should('be.visible')
  });

  it('Should show an error message if the user adds the wrong name', () => {
    cy.get('input[type="search"]')
      .type('dogachu')
      .should('have.value',  'dogachu')
      .get('button')
      .click()
      .get('h2')
      .should('be.visible')
      .contains('Everybody makes a wrong turn once in a while!')
      .get('p')
      .should('be.visible')
      .contains('Try again. Enter a real Generation 1 Pokemon name or ID (1 to 151).')
  });
//👇 having trouble with image src
  it('Should be able to search Pokemon by Name', () => {
    cy.get('input[type="search"]')
      .type('mAnKey')
      .should('have.value', 'mAnKey')
      .get('button')
      .click()
      .get('.pokemon-details-page')
      .contains('56')
      .get('.pokemon-details-header')
      .contains('mankey')
    cy.wait(3000)
      .get('img[alt="mankey image"]')
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
      .contains('Everybody makes a wrong turn once in a while!')
      .get('p')
      .should('be.visible')
      .contains('Try again. Enter a real Generation 1 Pokemon name or ID (1 to 151).')

  });

//👇 having trouble with image src
  it('Should be able to search Pokemon by Id Number', () => {
    cy.get('input[type="search"]')
      .type('98')
      .should('have.value',  '98')
      .get('button')
      .click()
      .get('.pokemon-details-header')
      .contains('krabby')
      .get('img[alt="krabby image"]')
      .should('be.visible')
  });

  it('Should have a type', () => {
    cy.get('input[type="search"]')
      .type('98')
      .get('button')
      .click()
      .get('.types-header')
      .contains('Type')
      .get('.features')
      .contains('water')
  });

  it('Should have Abilities', () => {
    cy.get('input[type="search"]')
      .type('98')
      .get('button')
      .click()
      .get('.abilities-header')
      .contains('Abilities')
      .get('.features')
      .contains('shell armor')
      .should('be.visible')
  });

  it('Should have moves', () => {
    cy.get('input[type="search"]')
      .type('98')
      .get('button')
      .click()
      .get('.features')
      .contains('mimic')
      .should('be.visible')
      .get('.moves-header')
      .should('be.visible')
      .contains('Moves')
  });

})
