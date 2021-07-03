import React from "react";
import { Route, Switch } from "react-router-dom";

import Splash from "./components/tutorial/Splash";
import Tutorial from "./components/tutorial/Tutorial";
import Login from "./components/login/Login";

function App() {
  return (
    <Switch>
      <Route path='/splash' component={Splash} />
      <Route path='/tutorial' component={Tutorial} />
      <Route path='/login' component={Login} />
    </Switch>
  );
}

export default App;
