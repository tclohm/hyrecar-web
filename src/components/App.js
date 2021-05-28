import React, { Fragment, useState } from "react";

import Header from "./Header";
import SigninSignup from "./SignInSignUp";
import BottomNavBar from "./BottomNavBar";
import Cars from "../pages/Cars";
import CarDetail from "../pages/CarDetail";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
//import Profile from "../pages/Profile";
//import CarForm from "./CarForm";
import Modal from "./Modal";

// MARK: -- Third Party
import { Switch, Route, useRouteMatch } from "react-router-dom";

function App() {

  const { path } = useRouteMatch()

  const [open, setOpen] = useState(false)

  const show = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setOpen(!open)
  }

  const close = (e) => {
    e.preventDefault()
    setOpen(false)
  }

  return (
    <Fragment>
      <Header show={(e) => show(e)} close={(e) => close(e)} />
      <div onClick={(e) => close(e)}>
        {
          open ?
            <Modal>
              <SigninSignup />
            </Modal>
          :
          <></>
        }
        <Switch> 
            <Route exact path="/"><Cars /></Route>
            <Route path={`${path}signup`}><Signup /></Route>
            <Route path={`${path}login`}><Login /></Route>
            <Route path={`${path}car/:id`}><CarDetail /></Route>
        </Switch>
        <BottomNavBar />
      </div>
    </Fragment>
  );
}

export default App;
