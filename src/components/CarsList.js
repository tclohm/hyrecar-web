import React from "react";
import CarCell from "./CarCell";


import Box from "@material-ui/core/Box";

const CarsList = ({ cars }) => {
	return (
		<Box>
			{cars.map(car => (
				<div key={car.id}>
					<Box>
						<CarCell car={car} />
					</Box>
				</div>
			))}
		</Box>
	)
}

export default CarsList;