import { REQUEST_POKEMONS, REQUEST_POKEMONS_SUCCESS } from './actions';

const initialState = {
  pokemons: [],
  loading: false,
  loaded: false
};

const pokemons = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POKEMONS:
      return {
        ...state,
        loading: true
      };
    case REQUEST_POKEMONS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        pokemons: action.pokemons
      };
    default:
      return state;
  }
};

export default pokemons;
