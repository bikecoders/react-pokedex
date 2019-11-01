import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPokemons } from '../store/pokemons/actions';
import PropTypes from 'prop-types';

function PokemonList({ pokemons, fetchPokemons }) {
  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <>
      {pokemons.map(pokemon => (
        <p key={pokemon.name}>{pokemon.name}</p>
      ))}
    </>
  );
}

const mapStateToProps = state => ({
  pokemons: state.fromPokemons.pokemons
});

const mapDispatchToProps = dispatch => ({
  fetchPokemons: () => dispatch(fetchPokemons())
});

const types = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string
    })
  ),
  fetchPokemons: PropTypes.func.isRequired
};

PokemonList.propTypes = types;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonList);
