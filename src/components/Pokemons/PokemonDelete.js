import { useState } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

import { deletePokemon } from "../../services/pokemonServices";
import withFetchPokemon from "./withFetchPokemon";

const PokemonDelete = ({ pokemon }) => {
  const [isPokemonDeleted, setIsPokemonDeleted] = useState(false);

  const deletePokemonHandler = () =>
    deletePokemon(pokemon).then(() => {
      setIsPokemonDeleted(true);
    });

  if (isPokemonDeleted) {
    return <Redirect to="/pokemons" />;
  }

  return (
    <div>
      <h2>Are you sure you want to continue</h2>
      <button onClick={deletePokemonHandler}>Yes</button>
      <Link to={`/pokemons/${pokemon?.id}`}>
        <button>No, go back</button>
      </Link>
    </div>
  );
};

export default withFetchPokemon(PokemonDelete);
