import React from "react";
import CarCell from "./CarCell";


const CarsList = ({ cars }) => {
	return (
		<section>
			<div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-2">
				{cars.map(car => (
					<div className="rounded p-2 shadow-lg" key={car.id}>
						<CarCell car={car} />
					</div>
				))}
			</div>
		</section>
	)
}

export default CarsList;