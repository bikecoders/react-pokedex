import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button } from 'react-md';

import PokemonDetailComp from '../../components/PokemonDetail.jsx';

import './PokemonDetail.scss';

function PokemonDetail({ pokemon }) {
  return (
    <>
      <div className="detail_header">
        <Link className="md-cell--right" to="/">
          <Button icon>keyboard_arrow_left</Button>
        </Link>
        <h1>Pokemon Detail</h1>
      </div>

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
