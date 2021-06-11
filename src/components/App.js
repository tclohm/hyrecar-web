import React, { Fragment, useState, useContext } from "react";

import UnAuthedHeader from "./UnAuthedHeader";
import AuthedHeader from "./AuthedHeader";
import SigninSignup from "./SignInSignUp";
import BottomNavBar from "./BottomNavBar";
import Cars from "../pages/Cars";
import CarDetail from "../pages/CarDetail";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import UserProfile from "../pages/UserProfile";
import Modal from "./Modal";
import ProfileSettingsLogout from "./ProfileSettingsLogout";

// MARK: -- Third Party
import { Switch, Route } from "react-router-dom";
import AuthenticatedRoute from "../customroutes/AuthenticatedRoute";

import { AuthContext } from "../context/AuthContext";

function App() {

  const [open, setOpen] = useState(false)

  const { isAuthenticated } = useContext(AuthContext)

  const show = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setOpen(!open)
  }

  const close = (e) => {
    e.preventDefault()
    setOpen(false)
  }

  const renderMenu = (boolean) => {
    if (boolean) {
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


    return (
      <Fragment>
        {
          isAuthenticated() ?
              <AuthedHeader show={(e) => show(e)} close={(e) => close(e)} />
            :
              <UnAuthedHeader show={(e) => show(e)} close={(e) => close(e)} />
        }
        <div onClick={(e) => close(e)}>
          {renderMenu(isAuthenticated())}
          <Switch> 
              <Route exact path="/"><Cars /></Route>
              <Route path="/users/show/:id"><Profile /></Route>
              <Route path="/signup"><Signup /></Route>
              <Route path="/login"><Login /></Route>
              <AuthenticatedRoute path="/profile"><UserProfile /></AuthenticatedRoute>
              <Route path="/car/:id"><CarDetail /></Route>
          </Switch>
          <BottomNavBar />
        </div>
      </Fragment>
  );
}

export default App;
