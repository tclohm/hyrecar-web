import React, { Fragment } from "react";

import CarList from "../components/CarsList";

import Box from "@material-ui/core/Box";

import { GET_CARS } from "../graphql/queries";

import { useQuery } from "@apollo/react-hooks";

const Cars = () => {

	const { data, loading, error } = useQuery(GET_CARS);

	if (loading) return <p>loading...</p>
	if (error) return <p>ERROR</p>

	return (
		<Fragment>
			<Box my={2}>
				<CarList cars={data.cars} />
			</Box>
		</Fragment>
	)
}

export default Cars;