import { useState, useEffect } from "react";

import { fetchPokemons } from "../../utils/data";

const PokemonForm = ({ onSubmit, pokemon }) => {
  const [pokemonNames, setPokemonNames] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [pokemonName, setPokemonName] = useState(pokemon?.name || "");
  const [pokemonDescription, setPokemonDescription] = useState(
    pokemon?.description || ""
  );

  useEffect(() => {
    fetchPokemons().then((pokemons) => {
      setPokemonNames(pokemons.map((pokemon) => pokemon.name));
    });
  }, []);

  const changeHandler = (setter) => (e) => {
    setter(e.target.value);
  };

  const pokemonSubmitHandler = (e) => {
    e.preventDefault();

    if (!pokemonName?.trim()) {
      setErrorMessage("Pokemon name is not defined");
      return;
    }

    if (!pokemonDescription?.trim()) {
      setErrorMessage("Pokemon description is not defined");
      return;
    }

    if (pokemonNames.includes(pokemonName) && pokemonName !== pokemon?.name) {
      setErrorMessage(`"${pokemonName}" is already in the pokemons`);
      return;
    }

    setErrorMessage("");

    const pokemonUpdated = {
      name: pokemonName,
      description: pokemonDescription,
    };

    onSubmit(pokemonUpdated);
  };

  return (
    <form onSubmit={pokemonSubmitHandler}>
      <label>Pokemon name:</label>
      <input value={pokemonName} onChange={changeHandler(setPokemonName)} />

      <label>Pokemon description:</label>
      <input
        value={pokemonDescription}
        onChange={changeHandler(setPokemonDescription)}
      />

      <button>Submit</button>
      <p>{errorMessage}</p>
    </form>
  );
};

export default PokemonForm;
