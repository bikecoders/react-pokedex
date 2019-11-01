import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPokemons } from '../store/pokemons/actions';

import PokemonCard from './PokemonCard.jsx';

function PokemonList({ pokemons, fetchPokemons }) {
  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="md-grid">
      {pokemons.map(pok => (
        <PokemonCard key={pok.id} pokemon={pok} />
      ))}
    </div>
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
