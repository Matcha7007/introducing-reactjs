import React from "react";
import { observer } from "mobx-react-lite"
import store from '../store';
import PokemonRow from "./PokemonRow";

function PokemonTable() {
  return (
    <table width="100%">
      <tbody>
        {store.filteredPokemon.slice(0, 20).map((pokemon) => (
            <PokemonRow
              pokemon={pokemon}
              key={pokemon.id}
              onClick={(pokemon) => store.setSelectedPokemon(pokemon)}
            />
          ))}
      </tbody>
    </table>
  );
}

export default observer(PokemonTable);