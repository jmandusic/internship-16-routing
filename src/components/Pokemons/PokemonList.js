import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPokemons } from "../../utils/data";
import Loading from "../Loading";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    fetchPokemons().then(setPokemons);
  }, []);

  if (!pokemons) {
    return <Loading />;
  }

  return (
    <div>
      {pokemons.map((pokemon) => (
        <Link key={pokemon.id} to={`/pokemons/${pokemon.id}`}>
          {pokemon.name}
        </Link>
      ))}

      <Link to="/pokemons/create">
        <button>Add new pokemon</button>
      </Link>

      <Link to="/">
        <button>Main menu</button>
      </Link>
    </div>
  );
};

export default PokemonList;
