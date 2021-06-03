import React from "react";
import { Route, Switch } from "react-router-dom";
import ProfileCreation from "../pages/ProfileCreation";
import CarCreation from "../pages/CarCreation";

const Creation = () => {
	return(
		<Switch>
			<Route path="/create/profile" component={ProfileCreation} />
			<Route path="/create/car" component={CarCreation} />
		</Switch>
	)
}

export default Creation;