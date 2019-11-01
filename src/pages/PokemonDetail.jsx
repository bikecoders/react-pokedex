import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PokemonDetailComp from '../components/PokemonDetail.jsx';

function PokemonDetail({ pokemon }) {
  return (
    <>
      <h1>Pokemon Detail</h1>
      <PokemonDetailComp pokemon={pokemon}></PokemonDetailComp>
    </>
  );
}

PokemonDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }).isRequired,
  pokemon: PropTypes.object
};

const mapStateToProps = (state, ownProps) => ({
  pokemon: state.fromPokemons.pokemons[Number(ownProps.match.params.id) - 1]
});

export default connect(mapStateToProps)(PokemonDetail);
