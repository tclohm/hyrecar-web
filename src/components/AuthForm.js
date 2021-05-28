import React, { Fragment } from "react";
import Error from "./Error";

const AuthForm = ({ formik, title }) => {

	return (
	<section className="flex flex-col lg:mx-48 m-8">
		<h1 className="self-center">{title}</h1>
		<form onSubmit={formik.handleSubmit} className="relative flex flex-col">
			{formik.touched.email && Boolean(formik.errors.email) ? 
				<Error className="h-8 w-8 text-red-500 absolute z-10 right-5 top-2"/> : <></>}
			<input
				id="email"
				name="email"
				label="Email"
				type="text"
				placeholder="email"
				value={formik.values.email}
				onChange={formik.handleChange}
				className="bg-gray-100 p-3 focus:outline-none rounded-t-lg focus:outline-none"
			/>
			{formik.touched.password && Boolean(formik.errors.password) ? 
				<Error className="h-8 w-8 text-red-500 absolute z-50 right-5 top-14" /> : <></>}
			<input
				id="password"
				name="password"
				label="Password"
				type="password"
				placeholder="password"
				value={formik.values.password}
				onChange={formik.handleChange}
				className="bg-gray-100 p-3 focus:outline-none focus:outline-none"
			/>
			{Boolean(formik.errors.email) || Boolean(formik.errors.password) ?
			<button 
				className="bg-green-300 p-3 focus:outline-none rounded-b-lg cursor-not-allowed opacity-50" 
				type="submit" 
				onClick={formik.handleSubmit}>
					Continue
			</button>
			:
			<button 
				className="bg-green-300 text-white p-3 focus:outline-none active:bg-green-500 rounded-b-lg" 
				type="submit" 
				onClick={formik.handleSubmit}>
					Continue
			</button>
			}
			</form>
		</section>
	)
}

export default AuthForm;