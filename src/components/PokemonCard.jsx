import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button, Card, CardTitle, Media, MediaOverlay } from 'react-md';

function PokemonCard({ pokemon }) {
  return (
    <Card
      key={pokemon.name}
      className="cards__example md-cell md-cell--6 md-cell--8-tablet"
    >
      <Media>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <MediaOverlay>
          <CardTitle title={pokemon.name}>
            <Link className="md-cell--right" to={`pokemon/${pokemon.id}`}>
              <Button icon>info</Button>
            </Link>
          </CardTitle>
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
