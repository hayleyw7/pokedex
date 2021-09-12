export const getPokedexData = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res => res.ok ? res.json() : this.displayErrorInfo(res))
}

export const getPokemonData = (num) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
    .then(res => res.ok ? res.json() : this.displayErrorInfo(res))
}