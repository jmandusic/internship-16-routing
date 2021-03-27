import { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router";

import { fetchPokemon } from "../../services/pokemonServices";
import Loading from "../Loading";

const withFetchPokemon = (Component) => () => {
  const params = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [isPokemonFetched, setIsPokemonFetched] = useState(false);

  useEffect(() => {
    fetchPokemon(params.id).then((pokemon) => {
      setPokemon(pokemon);
      setIsPokemonFetched(true);
    });
  }, []);

  if (!pokemon?.id && isPokemonFetched) {
    return <Redirect to="/404" />;
  }

  if (!pokemon) {
    return <Loading />;
  }

  return <Component pokemon={pokemon} />;
};

export default withFetchPokemon;
