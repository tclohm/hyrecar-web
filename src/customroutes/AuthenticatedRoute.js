
import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const AuthenticatedRoute = ({ children, ...rest }) => {
	const { isAuthenticatedAndProfileCreated } = useContext(AuthContext);
	return (
		<Route
			{...rest}
			render={() => 
				isAuthenticatedAndProfileCreated() ? (
					<>{ children }</>
				) : (
					<Redirect to="/login" />
				)
			}
		></Route>
	);
};

export default AuthenticatedRoute;