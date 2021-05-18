import React, { useState, createContext } from "react";

export const InfoContext = createContext();

export const InfoProvider = ({ children }) => {

	const [information, setInformation] = useState({
		profileImageId: '',
		firstName: '',
		lastName: '',
		license: '',
		renting: false
	}) 

	const handleSwitch = () => {
		setInformation(Object.assign({}, information, information.renting=!information.renting))
	}

	return (
		<InfoContext.Provider value={{ information, setInformation, handleSwitch }}>
			{children}
		</InfoContext.Provider>
	);
};