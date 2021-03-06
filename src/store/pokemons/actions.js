import fetch from 'cross-fetch';

export const REQUEST_POKEMONS = 'REQUEST_POKEMONS';

export function requestPokemons() {
  return {
    type: REQUEST_POKEMONS
  };
}

export const REQUEST_POKEMONS_SUCCESS = 'REQUEST_POKEMONS_SUCCESS';

export function requestPokemonsSuccess(pokemons) {
  return { type: REQUEST_POKEMONS_SUCCESS, pokemons };
}

export function fetchPokemons() {
  return function(dispatch) {
    dispatch(requestPokemons());

    return (
      fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(resp => resp.json(), error => console.log(error))
        .then(pokemonsInfo => pokemonsInfo.results)
        // Get all pokemons details
        .then(pokemons => {
          const allPoksReq = pokemons.map(p =>
            fetch(p.url).then(res => res.json())
          );

          return Promise.all(allPoksReq);
        })
        .then(pokemonsInfo => dispatch(requestPokemonsSuccess(pokemonsInfo)))
    );
  };
}
