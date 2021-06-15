import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_USER_PASSWORD } from "../graphql/queries"

const Password = () => {

	const { data, loading, error } = useQuery(GET_USER_PASSWORD)

	const [input, setInput] = useState({ password: "" })

	const onChange = (e) => {
		e.preventDefault()
		setInput({ [e.target.name]: e.target.value })
	}


	if (loading) return <p>loading</p>
	if (error) return <p>error</p> 

	if (data)

	return (
		<section className="flex flex-col">
			<label className="text-sm text-gray-400">Old Password</label>
			<input 
				type="password" 
				value={data.self.user.password}
				readOnly
				className="bg-gray-200 rounded p-4 focus:outline-none active:ring focus:ring focus:ring-gray-300 my-2"
			/>
			<label className="text-sm text-gray-400">New Password</label>
			<input 
				type="password"
				name="password"
				value={input.password}
				className="bg-gray-200 rounded p-4 focus:outline-none active:ring focus:ring focus:ring-gray-300 my-2"
			/>
			<button className="bg-pink-400 font-semibold text-white p-2 rounded">Change</button>
		</section>
	)
}

export default Password