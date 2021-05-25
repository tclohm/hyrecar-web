import React from "react";
import Star from "./Star";
import Avatar from "./Avatar";

const RateCell = ({rate}) => {

	function buildStars(number){
		const storage = []
		for (let i = 0; i < number; i++) {
			storage.push(<Star key={i} className="h-4 w-4 fill-current text-yellow-300" />)
		}
		for (let i = number; i < 5; i++) {
			storage.push(<Star key={i} className="h-4 w-4 text-gray-300" />)
		}
		return storage
	}

	const interior = buildStars(rate.interiors)
	const exterior = buildStars(rate.exteriors)
	const steering = buildStars(rate.steering)
	const braking = buildStars(rate.braking)
	const acceleration = buildStars(rate.acceleration)
	const cleaniness = buildStars(rate.cleaniness)

	return (
		<div className="static">
			<div className="grid md:grid-cols-3 grid-cols-2 mb-4">
				<p className="text-xs">Interior: <span className="flex">{interior}</span></p>
				<p className="text-xs">Acceleration: <span className="flex">{acceleration}</span></p>
				<p className="text-xs">Steering: <span className="flex">{steering}</span></p>
				<p className="text-xs">Exterior: <span className="flex">{exterior}</span></p>		
				<p className="text-xs">Braking: <span className="flex">{braking}</span></p>
				<p className="text-xs">Cleaniness: <span className="flex">{cleaniness}</span></p>
			</div>
			<p className="text-xs">{rate.review}</p>
			<Avatar person={rate.reviewer} />
		</div>
	)
}

export default RateCell;