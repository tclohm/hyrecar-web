import React from "react";
import CarCell from "./CarCell";


import Grid from "@material-ui/core/Grid";

const CarsList = ({ cars }) => {
	return (
		<Grid container spacing={1}>
			{cars.map(car => (
				<Grid item lg={6} sm={12} key={car.id}>
					<CarCell car={car} />
				</Grid>
			))}
		</Grid>
	)
}

export default CarsList;