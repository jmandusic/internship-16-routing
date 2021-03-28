import { Link } from "react-router-dom";

import withFetchPokemon from "./withFetchPokemon";
import { DetailsContainer, Detail } from "../index.styled";
import { Button } from "../../index.styled";

const PokemonRead = ({ pokemon }) => {
  return (
    <DetailsContainer>
      <Detail>
        <h4>Name:</h4>
        <p>{pokemon.name}</p>
      </Detail>

      <Detail>
        <h4>Description:</h4>
        <p>{pokemon.description}</p>
      </Detail>

      <div>
        <Link to={`/pokemons/update/${pokemon.id}`}>
          <Button>Update</Button>
        </Link>
        <Link to={`/pokemons/delete/${pokemon.id}`}>
          <Button>Delete</Button>
        </Link>
      </div>
    </DetailsContainer>
  );
};

export default withFetchPokemon(PokemonRead);
