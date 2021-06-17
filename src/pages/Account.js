import React, { useState } from "react";

import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_USER_EMAIL } from "../graphql/queries";
import { UPDATE_USER } from "../graphql/mutations";
import { useFormik } from "formik";
import { email } from "../validations/UserSchema";

import Error from "../components/Error";

const Account = () => {

	const { data, loading, error } = useQuery(GET_USER_EMAIL)

	const [input, setInput] = useState({ 
		email: data ? data.self.user.email : "", 
	})

	const formik = useFormik({
		initialValues: input,
		validationSchema: email,
		onSubmit: (values) => {
			console.log(values)
		}
	})

	if (loading) return <p>loading</p>
	if (error) return <p>error</p>
	if (data) {
		console.log(data)
		return (
			<section className="flex flex-col">
				<label className="text-gray-400 text-sm">Email <span className="text-red-600">*</span></label>
				<input 
					type="text"
					name="email" 
					onChange={formik.handleChange} 
					value={formik.values.email}
					className="bg-gray-200 rounded p-4 focus:outline-none active:ring focus:ring focus:ring-gray-300 my-2"
				/>
				<button className="bg-pink-400 font-semibold text-white p-2 rounded">Save Changes</button>
			</section>
		)
	}
}

export default Account