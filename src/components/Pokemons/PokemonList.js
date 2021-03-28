import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { fetchPokemons } from "../../services/pokemonServices";
import Loading from "../Loading";
import { ListContainer } from "../index.styled";
import { Button } from "../../index.styled";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    fetchPokemons().then(setPokemons);
  }, []);

  if (!pokemons) {
    return <Loading />;
  }

  return (
    <ListContainer>
      <div>
        <h3>Pokemon list:</h3>

        <Link to="/">
          <Button>Main menu</Button>
        </Link>
      </div>

      {pokemons.map((pokemon) => (
        <Link key={pokemon.id} to={`/pokemons/${pokemon.id}`}>
          <p>{pokemon.name}</p>
        </Link>
      ))}

      <Link to="/pokemons/create">
        <Button>Add new pokemon</Button>
      </Link>
    </ListContainer>
  );
};

export default PokemonList;
