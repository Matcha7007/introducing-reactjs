import React from 'react';
import Button from '@mui/material/Button';

import PokemonType from '../pokemonType';

const PokemonRow = ({ pokemon, onClick }) => (
  <>
    <tr key={pokemon.id}>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onClick(pokemon)}
        >
          More Information
        </Button>
      </td>
    </tr>
  </>
);

PokemonRow.propTypes = {
  pokemon: PokemonType,
};

export default PokemonRow;