import React from "react";

import { useQuery } from "@apollo/react-hooks";
import { GET_SELF_IMAGE } from "../graphql/queries";

import { Link } from "react-router-dom";


const Settings = ({ children, title, description }) => {
	const { data, loading, error } = useQuery(GET_SELF_IMAGE)

	if (loading) {
		return <p>loading</p>
	}

	if (error) return <p>Error</p>

	if (data && data.self) {
		const baseUrl = "http://localhost:4000"
		const profileImage = baseUrl + data.self.avatar.image.location

		return (
			<section className="flex">
				<div className="flex flex-col w-5/12 mt-12 ml-12">
					<div className="flex mb-12">
						<div className="h-12 w-12 bg-cover bg-center rounded-full" style={{ backgroundImage: "url(" + profileImage + ")" }}/>
						<div className="flex flex-col ml-4">
							<div className="flex">
								<h3 className="text-xl">{data.self.firstName}</h3>
								<p className="mx-1 text-gray-200">/</p>
								<h2 className="font-semibold text-xl">{title}</h2>
							</div>
							<p className="text-gray-500 text-sm">{description}</p>
						</div>
					</div>
					<div className="flex flex-col justify-around h-20 w-1/2">
						<Link className="bg-gray-200" to="/account">Account Settings</Link>
						<Link className="bg-gray-200" to="/account/profile">Edit Profile</Link>
						<Link className="bg-gray-200" to="/account/password">Password</Link>
					</div>
				</div>
				<div className="w-full mr-8">
					{ children }
				</div>
			</section>
		)
	}
}

export default Settings