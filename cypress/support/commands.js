Cypress.Commands.add('onLoad', () => {
    const baseDataURL = 'https://pokeapi.co/api/v2/pokemon';

    cy.intercept(`${ baseDataURL }?limit=151`, {
        pokeDex:[
            {
                "name": "bulbasaur",
                "url": "https://pokeapi.co/api/v2/pokemon/1/"
            },
            {
                "name": "ivysaur",
                "url": "https://pokeapi.co/api/v2/pokemon/2/"
            },
            {
                "name": "venusaur",
                "url": "https://pokeapi.co/api/v2/pokemon/3/"
            },
            {
                "name": "charmander",
                "url": "https://pokeapi.co/api/v2/pokemon/4/"
            },
            {
                "name": "charmeleon",
                "url": "https://pokeapi.co/api/v2/pokemon/5/"
            },
            {
                "name": "charizard",
                "url": "https://pokeapi.co/api/v2/pokemon/6/"
            }
        ]
    });
    // we probably will use this for test pokemon detailed page/ waiting to see how the page will be
    // cy.intercept(`${ baseDataURL }/8/`, {
    //     foundPokemon:[

    //     ]
    // })
    cy.visit('http://localhost:3000/');

})
