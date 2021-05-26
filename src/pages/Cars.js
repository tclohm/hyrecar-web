import React, { Fragment } from "react";
import CarList from "../components/CarsList";

import { GET_ALL_CARS } from "../graphql/queries";
import { useQuery } from "@apollo/react-hooks";

const Cars = () => {

	const { data, loading, error } = useQuery(GET_ALL_CARS);

	if (loading) return <p>loading...</p>
	if (error) return <p>ERROR</p>
	if (data)
	return (
		<Fragment>
			<div className="relative h-screen w-full bg-contain bg-center bg-no-repeat bg-pink-banner" style={{ backgroundImage: "url(cardribble.jpg)" }}>
				<div className="absolute top-40 left-20 text-left text-white font-black lg:text-5xl text-3xl w-80">
					<div className="flex items-center mb-4">
						<h1 className="text-sm mr-4">Car Rental</h1>
						<p className="lg:text-xl bg-black rounded px-2">2021</p>
					</div>
					<p>Introducing 100+ upgrades across our entire service</p>
				</div>
			</div>
			<div className="flex justify-center">
				<CarList cars={data.cars} />
			</div>
		</Fragment>
	)
}

export default Cars;