
import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const AuthenticatedRoute = ({ children, ...rest }) => {
	const { isAuthenticated } = useContext(AuthContext);
	return (
		<Route
			{...rest}
			render={() => 
				isAuthenticated() ? (
					<>{ children }</>
				) : (
					<Redirect to="/" />
				)
			}
		></Route>
	);
};

export default AuthenticatedRoute;