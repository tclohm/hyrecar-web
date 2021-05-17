import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

	const isAuthenticated = () => {
		if (document.cookie === "signedin=true") {
			return true;
		}
		return false;
	}

	return (
		<AuthContext.Provider value={{ isAuthenticated }}>
			{children}
		</AuthContext.Provider>
	);
};