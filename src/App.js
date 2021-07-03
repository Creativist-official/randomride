import React from "react";
import { Route, Switch } from "react-router-dom";

import Splash from "./components/tutorial/Splash";
import Tutorial from "./components/tutorial/Tutorial";

function App() {
  return (
    <Switch>
      <Route path='/splash' component={Splash} />
      <Route path='/tutorial' component={Tutorial} />
    </Switch>
  );
}

export default App;
