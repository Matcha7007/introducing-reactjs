import React from 'react';
import styled from '@emotion/styled';
import CssBaseline from '@mui/material/CssBaseline';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';


import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";

import "./App.css";

const pokemonReducer = (
  state = {
    filter: '',
    pokemon: [],
    selectedPokemon: null
  }, 
  action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    case 'SET_POKEMON':
      return {
        ...state,
        pokemon: action.payload,
      };
    case 'SET_SELECTED_POKEMON':
      return {
        ...state,
        selectedPokemon: action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(pokemonReducer);

const Title = styled.h1`
  text-align: center;
`;
const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1em;
`;
const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-column-gap: 1rem;
`;

function App() {
  const dispatch = useDispatch();
  const pokemon = useSelector(state => state.pokemon);

  React.useEffect(() => {
    const fetchPokemon = async () => {
      const resp = await fetch("http://localhost:3000/pokemon.json");
      const data = await resp.json();
      return dispatch({
        type: 'SET_POKEMON',
        payload: data
      });
    }
    fetchPokemon();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!pokemon) {
    return <div>Loading data</div>;
  }

  return (
    <PageContainer>
      <CssBaseline />
      <Title>Pokemon Search</Title>
      <TwoColumnLayout>
        <div>
          <PokemonFilter />
          <PokemonTable />
        </div>
        <PokemonInfo />
      </TwoColumnLayout>
    </PageContainer>
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
