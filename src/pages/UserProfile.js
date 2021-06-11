import React, { Fragment } from "react";
import { GET_SELF_PROFILE } from "../graphql/queries";
import { useQuery } from "@apollo/react-hooks";
import Checkmark from "../components/Checkmark";
import CarList from "../components/CarsList";

const UserProfile = () => {

	const { data, loading, error } = useQuery(GET_SELF_PROFILE)

	if (error) return <p>ERROR</p>
	if (loading) return <p>loading</p>
	if (data && data.self) {
		const baseUrl = "http://localhost:4000"
		const selfImage = baseUrl + data.self.avatar.image.location
		
		return (
			<Fragment>
				<div className="relative flex lg:justify-around justify-between lg:px-0 px-4">
					<div className="flex flex-col justify-around gap-4 lg:justify-center p-2 font-extralight">
						<div className="flex flex-col">
							<h2 className="font-semibold text-2xl">You</h2>
							<p className="font-extralight text-sm text-gray-500">Joined in {data.self.user.createdAt.substring(0,4)}</p>
						</div>
						<h3 className="font-medium">You are confirmed</h3>
						<div className="flex gap-2">
							<Checkmark className="h-5 w-5"/>
							<p>email verified</p>
						</div>
						<div className="flex gap-2">
							<Checkmark className="h-5 w-5"/>
							<p>phone number verified</p>
						</div>
						<div className="flex gap-2">
							<Checkmark className="h-5 w-5"/>
							<p>licenses verified</p>
						</div>
					</div>
					<div className="relative lg:h-72 lg:px-16 lg:mx-16 lg:mt-12 p-2 lg:border lg:rounded-xl lg:flex lg:flex-col lg:justify-around lg:items-center">
						<div className="lg:h-40 lg:w-40 h-20 w-20 bg-cover rounded-xl z-0" style={{ backgroundImage: "url(" + selfImage + ")" }} />
						<button className="lg:relative absolute bottom-0 right-0 w-28 rounded bg-gray-100 hover:bg-gray-300 px-3 py-1 text-sm font-light">Edit Profile</button>
					</div>
				</div>
				<div id="line" className="flex justify-center w-full px-4 py-4">
					<div className="w-full mx-2 border-b border-gray-300 h-1" />
				</div>
				<div className="pl-8 pt-4 lg:px-16">
					<h3 className="font-medium">Your cars</h3>
					<CarList cars={data.self.cars} />
				</div>
			</Fragment>
		)
	}
}

export default UserProfile