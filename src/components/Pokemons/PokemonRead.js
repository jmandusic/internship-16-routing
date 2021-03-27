import { Link } from "react-router-dom";

import withFetchPokemon from "./withFetchPokemon";

const PokemonRead = ({ pokemon }) => {
  return (
    <div>
      <h4>Name: {pokemon.name}</h4>
      <h4>Description: {pokemon.description}</h4>
      <Link to={`/pokemons/update/${pokemon.id}`}>
        <button>Update</button>
      </Link>
      <Link to={`/pokemons/delete/${pokemon.id}`}>
        <button>Delete</button>
      </Link>
    </div>
  );
};

export default withFetchPokemon(PokemonRead);
