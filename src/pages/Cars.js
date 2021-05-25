import React, { Fragment } from "react";
import CarList from "../components/CarsList";

import { GET_ALL_CARS } from "../graphql/queries";
import { useQuery } from "@apollo/react-hooks";

const Cars = () => {

	const { data, loading, error } = useQuery(GET_ALL_CARS);

	if (loading) return <p>loading...</p>
	if (error) return <p>ERROR</p>
	if (data) console.log(data)
	return (
		<Fragment>
			<div className="flex justify-center">
				<CarList cars={data.cars} />
			</div>
		</Fragment>
	)
}

export default Cars;