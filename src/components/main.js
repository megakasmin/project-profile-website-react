import React from "react";
import { Switch, Route } from "react-router-dom";

import Resume from "./resume";

const Main = () => (
  <Switch>
    <Route path="/resume" component={Resume} />
  </Switch>
);

export default Main;
