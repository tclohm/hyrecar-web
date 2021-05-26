import React, { Fragment, useState } from "react";

import Header from "./Header";
import BottomNavBar from "./BottomNavBar";
import Cars from "../pages/Cars";
import CarDetail from "../pages/CarDetail";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
//import Profile from "../pages/Profile";
//import CarForm from "./CarForm";
import Modal from "./Modal";

import AuthenticatedRoute from "../routes/AuthenticatedRoute";
import ProfileRoute from "../routes/ProfileRoute";

// MARK: -- Third Party
import { Switch, Route, Link } from "react-router-dom";


         
          // <ProfileRoute path="/profile-creation"><Profile /></ProfileRoute>
          // <AuthenticatedRoute path="/profile-edit"><Profile /></AuthenticatedRoute>
          // <AuthenticatedRoute path="/manage/:profileId"><ManageCars /></AuthenticatedRoute>
          // <AuthenticatedRoute path="/add-car"><CarForm/></AuthenticatedRoute>

function App() {

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
        <div> 
          <Switch>
            <Route exact path="/" component={Cars} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/detail/:id" component={CarDetail} />
          </Switch>
        </div>
        <BottomNavBar />
      </div>
    </Fragment>
  );
}


function SigninSignup() {
  return (
    <div className="fixed right-8 top-14 z-50 flex flex-col bg-white w-52 rounded shadow-lg">
      <Link className="py-3 mx-4" to="/login">
        Sign in
      </Link>
      <Link 
        className="bg-yellow-300 text-white font-medium px-4 py-3 rounded-b" 
        to="/signup">
        Sign up
      </Link>
    </div>
  )
}

export default App;
