import { useState } from "react";
import { Redirect } from "react-router";

import { createPokemon } from "../../utils/data";
import PokemonForm from "./PokemonForm";

const PokemonAdd = () => {
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

export default PokemonAdd;
