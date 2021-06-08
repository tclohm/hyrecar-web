import React, { Fragment, useState } from "react";

import Header from "./Header";
import SigninSignup from "./SignInSignUp";
import BottomNavBar from "./BottomNavBar";
import Cars from "../pages/Cars";
import CarDetail from "../pages/CarDetail";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Modal from "./Modal";
import ProfileSettingsLogout from "./ProfileSettingsLogout";

// MARK: -- Third Party
import { Switch, Route } from "react-router-dom";

import { useQuery } from "@apollo/react-hooks";
import { GET_SELF_PROFILE } from "../graphql/queries";

function App() {

  const [open, setOpen] = useState(false)

  const { data, loading } = useQuery(GET_SELF_PROFILE)

  const show = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setOpen(!open)
  }

  const close = (e) => {
    e.preventDefault()
    setOpen(false)
  }

  const renderMenu = (loggedIn) => {
    if (loggedIn) {
      return <>
            {
              open ?
              <Modal>
                <ProfileSettingsLogout/>
              </Modal>
              : <></>
            }
            </>
    } else {
      return <>
        { 
            open ?
            <Modal>
              <SigninSignup />
            </Modal>
            : <></>
         }
       </>
    }
  }

  if (loading) {
    return (
      <Fragment>
        <Header show={(e) => show(e)} close={(e) => close(e)} self={null} />
        <div onClick={(e) => close(e)}>
          {renderMenu(false)}
          <Switch> 
              <Route exact path="/"><Cars /></Route>
              <Route path="/users/show/:id"><Profile /></Route>
              <Route path="/signup"><Signup /></Route>
              <Route path="/login"><Login /></Route>
              <Route path="/car/:id"><CarDetail /></Route>
          </Switch>
          <BottomNavBar />
        </div>
     </Fragment>
     )
   }

  if (data) {
    return (
      <Fragment>
        <Header show={(e) => show(e)} close={(e) => close(e)} self={data.self} />
        <div onClick={(e) => close(e)}>
          {renderMenu(data.self)}
          <Switch> 
              <Route exact path="/"><Cars /></Route>
              <Route path="/users/show/:id"><Profile /></Route>
              <Route path="/signup"><Signup /></Route>
              <Route path="/login"><Login /></Route>
              <Route path="/car/:id"><CarDetail /></Route>
          </Switch>
          <BottomNavBar />
        </div>
      </Fragment>
  );
  }
}

export default App;
