import React from 'react';
import PropTypes from 'prop-types';

function PokemonDetail({ pokemon }) {
  return (
    <>
      <h2>
        Here you have <b>{pokemon.name}</b>
      </h2>

      <img src={pokemon.sprites.front_default} alt={pokemon.name} />

      <h3>Types</h3>
      <ul>
        {pokemon.types.map(({ type }) => (
          <li key={type.name}> {type.name}</li>
        ))}
      </ul>
    </>
  );
}

PokemonDetail.propTypes = {
  pokemon: PropTypes.object
};

export default PokemonDetail;
