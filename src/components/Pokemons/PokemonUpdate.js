import { useState } from "react";
import { Redirect, useParams } from "react-router";

import { updatePokemon } from "../../services/pokemonServices";
import PokemonForm from "./PokemonForm";
import withFetchPokemon from "./withFetchPokemon";

const PokemonUpdate = ({ pokemon }) => {
  const params = useParams();
  const [isPokemonUpdated, setIsPokemonUpdated] = useState(false);

  const updatePokemonHandler = (pokemon) => {
    updatePokemon(pokemon, params.id).then(() => setIsPokemonUpdated(true));
  };

  if (isPokemonUpdated) {
    return <Redirect to={`/pokemons/${params.id}`} />;
  }

  return <PokemonForm onSubmit={updatePokemonHandler} pokemon={pokemon} />;
};

export default withFetchPokemon(PokemonUpdate);
