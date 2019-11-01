import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card, CardTitle, Media, MediaOverlay } from 'react-md';

import { fetchPokemons } from '../store/pokemons/actions';

function PokemonList({ pokemons, fetchPokemons }) {
  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="md-grid">
      {pokemons.map(pok => (
        <Card
          key={pok.name}
          className="cards__example md-cell md-cell--6 md-cell--8-tablet"
        >
          <Media>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
              alt={pok.name}
            />
            <MediaOverlay>
              <CardTitle title={pok.name}></CardTitle>
            </MediaOverlay>
          </Media>
        </Card>
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
