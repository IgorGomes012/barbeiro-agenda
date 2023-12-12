import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./page";
import Config from "./page";

export default () => {
  return (
    <Switch>
      <Route exact path="/">
         <Home />
      </Route>
      
      <Route exact path="/config">
         <Config/>
      </Route>
    </Switch>
  );
};
