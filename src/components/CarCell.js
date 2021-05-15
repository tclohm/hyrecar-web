import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";


const CarCell = ({car}) => {
	const baseUrl = "http://localhost:4000"
	const carImage = baseUrl + car.image.image.location
	const profileImage = baseUrl + car.owner.profile.avatar.image.location
	return (
		<Card>
			<CardMedia 
				component="img"
				image={carImage}
				alt={car.image.image.filename}
				height="140"
				title="car" />
			<CardContent>
				<p>{car.year}</p>
				<h3>{car.make} {car.model}</h3>
				<p>condition: {car.condition}</p>
				{car.available ?
					<p>Available!</p>
					: <p>Not Available</p>
				}
				<Button>More Info</Button>
				<Avatar alt="ok" src={profileImage} />
			</CardContent>
		</Card>
	)
}

export default CarCell;