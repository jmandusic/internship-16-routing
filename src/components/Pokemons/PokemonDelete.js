import { useState } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

import { deletePokemon } from "../../services/pokemonServices";
import withFetchPokemon from "./withFetchPokemon";
import { ConfirmationModalContainer } from "../index.styled";
import { Button } from "../../index.styled";

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
    <ConfirmationModalContainer>
      <h1>Are you sure you want to continue?</h1>

      <div>
        <Button onClick={deletePokemonHandler}>Yes</Button>
        <Link to={`/pokemons/${pokemon?.id}`}>
          <Button>No, go back</Button>
        </Link>
      </div>
    </ConfirmationModalContainer>
  );
};

export default withFetchPokemon(PokemonDelete);
