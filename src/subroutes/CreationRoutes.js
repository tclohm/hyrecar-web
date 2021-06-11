import React from "react";
import { Switch } from "react-router-dom";
import ProfileCreation from "../pages/ProfileCreation";
import CarCreation from "../pages/CarCreation";
import AuthenticatedRoute from "../customroutes/AuthenticatedRoute";

const Creation = () => {
	return(
		<Switch>
			<AuthenticatedRoute path="/create/profile"><ProfileCreation/></AuthenticatedRoute>
			<AuthenticatedRoute path="/create/car"><CarCreation/></AuthenticatedRoute>
		</Switch>
	)
}

export default Creation;