import React, { Fragment } from "react";

import Header from "./Header";
import Cars from "../pages/Cars";
import CarDetail from "../pages/CarDetail";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
//import Profile from "../pages/Profile";
//import CarForm from "./CarForm";

import AuthenticatedRoute from "../routes/AuthenticatedRoute";
import ProfileRoute from "../routes/ProfileRoute";

// MARK: -- Third Party
import { Switch, Route } from "react-router-dom";


         
          // <ProfileRoute path="/profile-creation"><Profile /></ProfileRoute>
          // <AuthenticatedRoute path="/profile-edit"><Profile /></AuthenticatedRoute>
          // <AuthenticatedRoute path="/manage/:profileId"><ManageCars /></AuthenticatedRoute>
          // <AuthenticatedRoute path="/add-car"><CarForm/></AuthenticatedRoute>

function App() {
  return (
    <Fragment>
      <Header />
      <div> 
        <Switch>
          <Route exact path="/" component={Cars} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/detail/:id" component={CarDetail} />
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
