import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

	const isAuthenticatedButProfileNotCreated = () => {
		if (document.cookie === "account=true") {
			return true;
		}
		return false;
	}

	const isAuthenticatedAndProfileCreated = () => {
		if (document.cookie === "signedin=true") {
			return true;
		}
		return false;
	}

	const logout = () => {
		if (document.cookie === "account=true") {
			document.cookie = "account" + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; Max-Age=0;';
		}
		if (document.cookie === "signedin=true") {
			document.cookie = "signedin" + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; Max-Age=0;';
		}
	}

	return (
		<AuthContext.Provider value={{ 
			isAuthenticatedButProfileNotCreated, 
			isAuthenticatedAndProfileCreated, 
		logout }}>
			{children}
		</AuthContext.Provider>
	);
};