import { Redirect, Route, Switch } from "react-router";

import PokemonList from "./PokemonList";
import PokemonCreate from "./PokemonCreate";
import PokemonRead from "./PokemonRead";
import PokemonUpdate from "./PokemonUpdate";
import PokemonDelete from "./PokemonDelete";

const Pokemons = () => {
  return (
    <Switch>
      <Route exact path="/pokemons">
        <PokemonList />
      </Route>

      <Route exact path="/pokemons/create">
        <PokemonCreate />
      </Route>

      <Route exact path="/pokemons/:id">
        <PokemonRead />
      </Route>

      <Route exact path="/pokemons/update/:id">
        <PokemonUpdate />
      </Route>

      <Route exact path="/pokemons/delete/:id">
        <PokemonDelete />
      </Route>

      <Redirect to="/404" />
    </Switch>
  );
};

export default Pokemons;
