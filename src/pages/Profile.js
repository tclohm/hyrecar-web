import React, { Fragment } from "react";
import { GET_PROFILE } from "../graphql/queries";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import Checkmark from "../components/Checkmark";
import CarList from "../components/CarsList";

const Profile = () => {

	const { id } = useParams()

	const { data, loading, error } = useQuery(GET_PROFILE, {
		variables: { id }
	})

	if (error) return <p>ERROR</p>
	if (loading) return <p>loading</p>
	if (data && data.profile) {
		const baseUrl = "http://localhost:4000"
		const profileImage = baseUrl + data.profile.avatar.image.location

		return (
			<Fragment>
				<div className="relative flex lg:justify-around justify-between lg:px-0 px-4">
					<div className="flex flex-col justify-around gap-4 lg:justify-center p-2 font-extralight">
						<div className="flex flex-col">
							<h2 className="font-semibold text-2xl">Hi, I'm {data.profile.firstName}</h2>
							<p className="font-extralight text-sm text-gray-500">Joined in {data.profile.user.createdAt.substring(0,4)}</p>
						</div>
						<h3 className="font-medium">{data.profile.firstName} confirmed</h3>
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
					<div className="lg:p-16 lg:mx-16 lg:mt-12 p-2 lg:border lg:rounded-xl">
						<div className="lg:h-40 lg:w-40 h-20 w-20 bg-cover rounded-xl z-0" style={{ backgroundImage: "url(" + profileImage + ")" }} />
					</div>
				</div>
				<div id="line" className="flex justify-center w-full px-4 py-4">
					<div className="w-full mx-2 border-b border-gray-300 h-1" />
				</div>
				<div className="pl-8 pt-4 lg:px-16">
					<h3 className="font-medium">{data.profile.firstName}'s cars</h3>
					<CarList cars={data.profile.cars} />
				</div>
			</Fragment>
		)
	}
}

export default Profile