import React from "react";
import Login from "./Login";
import Home from "./Home";
import Profile from "./Pofile";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/myprofile" component={Profile} />
    </Switch>
  );
}

export default App;
