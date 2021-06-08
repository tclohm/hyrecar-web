import React from "react";
import { Switch } from "react-router-dom";
import ProfileCreation from "../pages/ProfileCreation";
import CarCreation from "../pages/CarCreation";
import ProfileRoute from "../customroutes/ProfileRoute";
import AuthenticatedRoute from "../customroutes/AuthenticatedRoute";

const Creation = () => {
	return(
		<Switch>
			<ProfileRoute path="/create/profile"><ProfileCreation/></ProfileRoute>
			<AuthenticatedRoute path="/create/car"><CarCreation/></AuthenticatedRoute>
		</Switch>
	)
}

export default Creation;