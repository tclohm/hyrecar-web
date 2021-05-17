import React, { Fragment } from "react";

import Header from "./Header";
import Cars from "../pages/Cars";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import ManageCars from "../pages/ManageCars";

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
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
          <Route path="/manage" component={ManageCars} />
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
