import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import MainScreen from "./components/MainScreen";
import Pokemons from "./components/Pokemons";
import Digimons from "./components/Digimons/DigimonList";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen />
        </Route>

        <Route path="/pokemons">
          <Pokemons />
        </Route>

        <Route exact path="/digimons">
          <Digimons />
        </Route>

        <Route exact path="/404">
          <NotFound />
        </Route>

        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
