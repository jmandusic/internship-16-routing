export const fetchPokemons = () =>
  fetch("http://localhost:5000/pokemons").then((response) => {
    return response.json();
  });

export const fetchPokemon = (id) =>
  fetch(`http://localhost:5000/pokemons/${id}`).then((response) => {
    return response.json();
  });

export const createPokemon = (pokemon) =>
  fetch("http://localhost:5000/pokemons", {
    method: "POST",
    body: JSON.stringify(pokemon),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => response.json());

export const updatePokemon = (pokemon, id) =>
  fetch(`http://localhost:5000/pokemons/${id}`, {
    method: "PUT",
    body: JSON.stringify(pokemon),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => response.json());

export const deletePokemon = (pokemon) =>
  fetch(`http://localhost:5000/pokemons/${pokemon.id}`, {
    method: "DELETE",
    body: JSON.stringify(pokemon),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => response.json());
