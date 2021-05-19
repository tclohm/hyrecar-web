import React, { createContext } from "react";
import { useHistory } from "react-router-dom";
import { GET_USER_PROFILE } from "../graphql/queries";
import { useQuery } from "@apollo/react-hooks";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

	const history = useHistory()

	const isAuthenticatedButProfileNotCreated = () => {
		if (document.cookie === "account=true") {
			return true;
		}
		return false;
	}

	const isAuthenticatedAndProfileCreated = () => {
		if (document.cookie === "signedin=true") {
			return true
		}
		return false;
	}

	const accountCreated = () => {
		document.cookie = 'account=true;sameSite=Lax;secure=true;maxAge=18000;'
	}

	const GetProfile = () => {
		const { data, loading, error } = useQuery(GET_USER_PROFILE)	
		return { data, loading, error } 
	}

	const profileCreated = () => {
		if (document.cookie === "account=true") {
			document.cookie = "account" + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; Max-Age=0;';
		}
		if (document.cookie !== "signedin=true") {
			document.cookie = 'signedin=true;sameSite=Lax;secure=true;maxAge=18000;'
		}
	}

	const logout = () => {
		if (document.cookie === "account=true") {
			document.cookie = "account" + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; Max-Age=0;';
		}
		if (document.cookie === "signedin=true") {
			document.cookie = "signedin" + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; Max-Age=0;';
		}
		history.push("/")
	}

	return (
		<AuthContext.Provider value={{ 
			isAuthenticatedButProfileNotCreated, 
			isAuthenticatedAndProfileCreated,
			accountCreated,
			profileCreated,
			GetProfile,
			logout 
		}}>
			{children}
		</AuthContext.Provider>
	);
};