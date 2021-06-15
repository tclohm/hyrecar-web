import React from "react";

import { useQuery } from "@apollo/react-hooks";
import { GET_SELF_IMAGE } from "../graphql/queries";

import MenuLink from "./MenuLink";


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
			<section className="relative w-full mb-20">
				<div className="flex lg:flex-col lg:w-4/12 mx-4 mt-8">
					<div className="flex">
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
				</div>
				<div className="flex flex-col">
					<div className="flex justify-around items-center lg:flex-col lg:justify-start lg:items-start h-20">
						<MenuLink to="/account" label="Account Settings" active={true} />
						<MenuLink to="/account/profile" label="Edit Profile" />
						<MenuLink to="/account/password" label="Password" />
					</div>
					<div className="lg:w-6/12 mx-4">
					{ children }
					</div>
				</div>
			</section>
		)
	}
}

export default Settings