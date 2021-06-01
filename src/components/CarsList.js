import React from "react";
import CarCell from "./CarCell";
import { Link } from "react-router-dom";


const CarsList = ({ cars }) => {
	const uri = "/car/"
	return (
		<section>
			<div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 gap-2 p-2 mt-2">
				{cars.map(car => (
					<Link to={uri+car.id} className="relative w-full lg:rounded-xl flex py-5 shadow-lg border" key={car.id}>
						<CarCell car={car} />
					</Link>
				))}
			</div>
		</section>
	)
}

export default CarsList;