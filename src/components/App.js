import React, { Fragment } from "react";

import Header from "./Header";
import Cars from "../pages/Cars";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import ManageCars from "../pages/ManageCars";
import CarForm from "./CarForm";

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
          <Route path="/profile-creation" component={Profile} />
          <Route path="/profile-edit" component={Profile} />
          <Route path="/manage" component={ManageCars} />
          <Route path="/add-car" component={CarForm} />
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
