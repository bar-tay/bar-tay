import React from "react";
<<<<<<< Updated upstream

import Home from "./Home";
=======
import Login from "./Login";
import Home from "./Home";
import Profile from "./Pofile";

>>>>>>> Stashed changes
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
<<<<<<< Updated upstream
=======
      <Route path="/login" component={Login} />
      <Route path="/myprofile" component={Profile} />
>>>>>>> Stashed changes
    </Switch>
  );
}

export default App;
