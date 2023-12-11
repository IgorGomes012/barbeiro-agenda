import React from "react";
import { Switch, Route } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default () => {
  return (
    <Switch>

      <Route exact path="/">
         pagina inicial
      </Route>
      
      <Route exact path="/config">
         pagina configurtações
      </Route>

    </Switch>
  );
};
