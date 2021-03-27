import { useState } from "react";
import { Redirect } from "react-router";

import { createPokemon } from "../../services/pokemonServices";
import PokemonForm from "./PokemonForm";

const PokemonCreate = () => {
  const [isCreated, setIsCreated] = useState(false);

  const addPokemonHandler = (pokemon) => {
    createPokemon(pokemon).then(() => {
      setIsCreated(true);
    });
  };

  if (isCreated) {
    return <Redirect to="/pokemons" />;
  }

  return <PokemonForm onSubmit={addPokemonHandler} />;
};

export default PokemonCreate;
