import React, { createContext } from "react";
import { useHistory } from "react-router-dom";
//import { GET_USER_PROFILE } from "../graphql/queries";
//import { useQuery } from "@apollo/react-hooks";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

	const history = useHistory()

	const isAuthenticated = () => {
			if (document.cookie === "signedin=true") {
				return true
			}
			return false;
	}

	const accountLoggedIn = () => {
		let now = new Date()
		const time = now.getTime()
		const expireTime = time + 18000000
		now.setTime(expireTime)
		document.cookie = 'signedin=true;sameSite=Lax;secure=true;expires='+now.toUTCString()+'path=/'
	}

	const logout = () => {
		if (document.cookie === "signedin=true") {
			console.log("deleted cookie")
			document.cookie = 'signedin=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; Max-Age=0;';
		}

		const url = 'http://localhost:4000/logout';

		let options = {
			method: 'get',
			credentials: 'include'
		}

		fetch(url, options).then(response => response.json())
				  .then(data => {
				  	if (data.success) {
				  		history.push("/")
				  	}
				})
	}

	return (
		<AuthContext.Provider value={{ 
			isAuthenticated, 
			accountLoggedIn,
			logout 
		}}>
			{children}
		</AuthContext.Provider>
	);
};