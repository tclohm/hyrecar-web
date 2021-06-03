import React from "react";
import Checkmark from "./Checkmark";
import X from "./X";

const CarAmenities = ({ car }) => {
	const no = "h-3 w-3 bg-red-400 mr-1"
	const yes = "h-3 w-3 bg-green-400 mr-1"

	return (
		<div className="flex justify-center border rounded py-4 my-2">
			<div className="grid md:grid-cols-2 sm:grid-cols-4 grid-cols-2 text-xs">
			<p className="flex items-center">{car.airConditioning ? 
				<Checkmark className={yes} /> : <X className={no}/>}
				AC
			</p>
			<p className="flex items-center">{car.automaticEmergencyBrakes ? 
				<Checkmark className={yes} /> : <X className={no}/>}
				Auto E Brake
			</p>
			<p className="flex items-center">{car.automaticHighBeams ? 
				<Checkmark className={yes} /> : <X className={no}/>}
				Auto High Beams
			</p>
			<p className="flex items-center">{car.blindSpotWarning ? 
				<Checkmark className={yes} /> : <X className={no}/>}
				Blindspot Assistance
			</p>
			<p className="flex items-center">{car.carPlay ? 
				<Checkmark className={yes} /> : <X className={no}/>}
				CarPlay
			</p>
			<p className="flex items-center">{car.forwardCollisionWarning ? 
				<Checkmark className={yes} /> : <X className={no}/>}
				Collision Warning
			</p>
			<p className="flex items-center">{car.headupDisplay ? 
				<Checkmark className={yes} /> : <X className={no}/>}
				Heads Up Display
			</p>
			<p className="flex items-center">{car.heatedSeats ? 
				<Checkmark className={yes} /> : <X className={no}/>}
				Heated Seats
			</p>
			<p className="flex items-center">{car.keylessEntry ? 
				<Checkmark className={yes} /> : <X className={no}/>}
				Keyless Entry
			</p>
			<p className="flex items-center">{car.rearCamera ? 
				<Checkmark className={yes} /> : <X className={no}/>}
				Rear Camera
			</p>
			<p className="flex items-center">{car.wifiHotSpot ? 
				<Checkmark className={yes} /> : <X className={no}/>}
				Wifi
			</p>
			</div>
		</div>
	)
}

export default CarAmenities