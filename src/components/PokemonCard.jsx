import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardTitle, Media, MediaOverlay } from 'react-md';

function PokemonCard({ pokemon }) {
  return (
    <Card
      key={pokemon.name}
      className="cards__example md-cell md-cell--6 md-cell--8-tablet"
    >
      <Media>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <MediaOverlay>
          <CardTitle title={pokemon.name}></CardTitle>
        </MediaOverlay>
      </Media>
    </Card>
  );
}

const types = {
  pokemon: PropTypes.object
};

PokemonCard.propTypes = types;

export default PokemonCard;
