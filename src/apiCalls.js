export const getPokedexData = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res => res.ok ? res.json() : this.displayErrorInfo(res))
}
