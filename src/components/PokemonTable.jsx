import React from "react";
import useStore from '../store';
import PokemonRow from "./PokemonRow";

function PokemonTable() {
  const pokemon =  useStore((state) => state.pokemon);
  const filter =  useStore((state) => state.filter);
  const setSelectedPokemon =  useStore((state) => state.setSelectedPokemon)
  return (
    <table width="100%">
      <tbody>
        {pokemon
          .filter(({ name: { english } }) =>
            english.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
          )
          .slice(0, 20)
          .map((pokemon) => (
            <PokemonRow
              pokemon={pokemon}
              key={pokemon.id}
              onClick={(pokemon) => setSelectedPokemon(pokemon)}
            />
          ))}
      </tbody>
    </table>
  );
}

export default PokemonTable;