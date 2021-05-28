import React from "react";
import { Route } from "react-router-dom";
import ProfileCreation from "../pages/ProfileCreation";

const Creation = () => {
	return(
		<Route path="/create/profile" component={ProfileCreation} />
	)
}

export default Creation;