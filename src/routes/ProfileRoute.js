
import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProfileRoute = ({ children, ...rest }) => {
	const { isAuthenticatedButProfileNotCreated } = useContext(AuthContext);
	return (
		<Route
			{...rest}
			render={() => 
				isAuthenticatedButProfileNotCreated() ? (
					<>{ children }</>
				) : (
					<Redirect to="/profile" />
				)
			}
		></Route>
	);
};

export default ProfileRoute;