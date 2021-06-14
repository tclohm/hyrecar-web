import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_USER_PASSWORD } from "../graphql/queries"

const Password = () => {

	const { data, loading, error } = useQuery(GET_USER_PASSWORD)

	if (loading) return <p>loading</p>
	if (error)  { 
		console.log(error) 
		return <p>error</p> 
	}
	if (data)

	return (
		<section className="flex flex-col">
			<label>Old Password</label>
			<input 
				type="password" 
				defaultValue={data.self.user.password}
				className="bg-gray-200 rounded p-4 focus:outline-none active:ring focus:ring focus:ring-gray-300 my-2"
			/>
			<label>New Password</label>
			<input 
				type="password"
				value=""
				className="bg-gray-200 rounded p-4 focus:outline-none active:ring focus:ring focus:ring-gray-300 my-2"
			/>
			<button className="bg-pink-400 font-semibold text-white p-2 rounded">Change</button>
		</section>
	)
}

export default Password