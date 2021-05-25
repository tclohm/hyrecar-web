import React, { createContext } from "react";
import { useHistory } from "react-router-dom";
//import { GET_USER_PROFILE } from "../graphql/queries";
//import { useQuery } from "@apollo/react-hooks";

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
		let now = new Date()
		const time = now.getTime()
		const expireTime = time + 18000000
		now.setTime(expireTime)
		document.cookie = 'account=true;sameSite=Lax;secure=true;expires='+now.toUTCString()+';path=/'
	}

	// const GetProfile = () => {
	// 	const { data, loading, error } = useQuery(GET_USER_PROFILE)	
	// 	return { data, loading, error } 
	// }

	const profileCreated = () => {
		if (document.cookie === "account=true") {
			document.cookie = 'account=;Path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;Max-Age=0;';
		}
		if (document.cookie !== "signedin=true") {
			let now = new Date()
			const time = now.getTime()
			const expireTime = time + 18000000
			now.setTime(expireTime)
			document.cookie = 'signedin=true;sameSite=Lax;secure=true;expires='+now.toUTCString()+'path=/'
		}
	}

	const logout = () => {
		if (document.cookie === "account=true") {
			console.log("deleted")
			document.cookie = 'account=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; Max-Age=0;';
		}
		if (document.cookie === "signedin=true") {
			console.log("deleted cookie")
			document.cookie = 'signedin=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; Max-Age=0;';
		}

		const url = 'http://localhost:4000/logout';

		fetch(url).then(response => response.json())
				  .then(data => {
				  	if (data.success) {
				  		history.push("/")
				  	}
				})
	}

	return (
		<AuthContext.Provider value={{ 
			isAuthenticatedButProfileNotCreated, 
			isAuthenticatedAndProfileCreated,
			accountCreated,
			profileCreated,
			logout 
		}}>
			{children}
		</AuthContext.Provider>
	);
};