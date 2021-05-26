import React from "react";
import Star from "./Star";

import { Link } from "react-router-dom";


const CarCell = ({car}) => {
	const baseUrl = "http://localhost:4000"
	const carImage = baseUrl + car.image.image.location

	const path = `/detail/${car.id}`

	return (
		<Link to={path}>
			<div className="h-60 w-80 sm:w-60 md:w-48 bg-cover flex flex-col justify-center m-4 relative" style={{ backgroundImage: "url(" + carImage + ")" }}>
				<div className="w-full flex justify-center bg-black bg-opacity-40">
					<h1 className="font-semibold text-white mr-1 text-sm">{car.model}</h1>
					<h3 className="font-extralight text-white ml-1 text-sm"> {car.make}</h3>
				</div>
				{car.available ? 
					<p className="absolute bottom-0 right-0 bg-green-400 text-white px-2 m-2 rounded">available</p> 
					: 
					<p className="absolute bottom-0 right-0 bg-red-400 text-white px-2 m-2 rounded">not available</p>}
			</div>
			<div className="flex justify-between text-sm">
					<p className="text-gray-500">{car.year}</p>
					<div className="flex items-center text-gray-500">
						<p>{car.owner.rating}</p>
						<Star className="h-4 w-4 fill-current text-yellow-300" />
					</div>
			</div>
		</Link>
	)
}

export default CarCell;