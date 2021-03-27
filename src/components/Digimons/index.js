import { Redirect, Route, Switch } from "react-router";

import DigimonList from "./DigimonList";
import DigimonCreate from "./DigimonCreate";
import DigimonRead from "./DigimonRead";
import DigimonUpdate from "./DigimonUpdate";
import DigimonDelete from "./DigimonDelete";

const Digimons = () => {
  return (
    <Switch>
      <Route exact path="/digimons">
        <DigimonList />
      </Route>

      <Route exact path="/digimons/create">
        <DigimonCreate />
      </Route>

      <Route exact path="/digimons/:id">
        <DigimonRead />
      </Route>

      <Route exact path="/digimons/update/:id">
        <DigimonUpdate />
      </Route>

      <Route exact path="/digimons/delete/:id">
        <DigimonDelete />
      </Route>

      <Redirect to="/404" />
    </Switch>
  );
};

export default Digimons;
