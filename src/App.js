import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom/cjs/react-router-dom";

import MainNavigatin from "./shared/components/Navigation/MainNavigatin";
import User from "./user/pages/User";
import NewPlace from "./places/pages/NewPlace";

function App() {
  return (
    <Router>
      <MainNavigatin />

      <main>
        <Switch>
          <Route path="/" exact>
            <User></User>
          </Route>
          <Route path="/places/new" exact>
            <NewPlace></NewPlace>
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
