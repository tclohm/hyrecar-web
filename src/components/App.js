import React, { Fragment } from "react";

import Header from "./Header";
import Cars from '../pages/Cars';

// MARK: -- Third Party
import { Switch, Route } from "react-router-dom";
import CSSBaseline from "@material-ui/core/CSSBaseline";

function App() {
  return (
    <Fragment>
      <CSSBaseline />
      <Header />
      <div> 
        <Switch>
          <Route exact path="/" component={Cars} />
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
