import React, { useState } from "react";

import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_USER } from "../graphql/queries";
import { UPDATE_USER } from "../graphql/mutations";
import { email } from "../validations/UserSchema";

import Error from "../components/Error";

const Account = () => {

	const { data, loading, error } = useQuery(GET_USER)

	const [input, setInput] = useState({ 
		email: "", 
	})

	const onChange = (e) => {
		e.preventDefault()
		setInput({ [e.target.name]: e.target.value })
	}

	if (loading) {
		return ( 
			<section className="flex flex-col animate-pulse">
				<label className="text-gray-400 text-sm">Email <span className="text-red-600">*</span></label>
				<div  
					className="bg-gray-200 rounded p-4 py-6 focus:outline-none active:ring focus:ring focus:ring-gray-300 my-2"
				/>
				<button className="bg-pink-400 font-semibold text-white p-2 rounded">Save Changes</button>
			</section>
			
		)
	}
	if (error) return <p>error</p>
	if (data) {

		if (data.self.user.email && input.email === "") {
			setInput({ email: data.self.user.email })
		}
		
		return (
			<section className="flex flex-col">
				<label className="text-gray-400 text-sm">Email <span className="text-red-600">*</span></label>
				<input 
					type="text"
					name="email" 
					onChange={(e) => onChange(e)} 
					value={input.email}
					className="bg-gray-200 rounded p-4 focus:outline-none active:ring focus:ring focus:ring-gray-300 my-2"
				/>
				<button className="bg-pink-400 font-semibold text-white p-2 rounded">Save Changes</button>
			</section>
		)
	}
}

export default Account