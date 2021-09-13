export const getPokedexData = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res => res.ok ? res.json() : this.displayErrorInfo(res))
}

export const getPokemonData = (suffix) => {
  console.log(suffix)

  return fetch(`https://pokeapi.co/api/v2/pokemon/${suffix}`)
    .then(res => res.ok ? res.json() : this.displayErrorInfo(res))
}