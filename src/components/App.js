import React, { Fragment } from "react";

import Header from "./Header";
import Cars from "../pages/Cars";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import ManageCars from "../pages/ManageCars";

import AuthenticatedRoute from "../routes/AuthenticatedRoute";

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
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/manage" component={ManageCars} />
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
