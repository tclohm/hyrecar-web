import React, { Fragment } from "react";
import Star from "../components/Star";
import RateList from "../components/RateList";

import { GET_SINGLE_CAR } from "../graphql/queries";
import { useQuery } from "@apollo/react-hooks";

import { useParams } from "react-router-dom";

const CarDetail = () => {

	const { id } = useParams()

	const { data, loading, error } = useQuery(GET_SINGLE_CAR, {
		variables: { id }
	});

	
	if (loading) return <p>loading...</p>
	if (error) return <p>ERROR</p>
	if (data) console.log(data)
	const baseUrl = "http://localhost:4000"
	const carImage = baseUrl + data.car.image.image.location
	const profileImage = baseUrl + data.car.owner.avatar.image.location

	const stars = []

	for (let i = 0; i < data.car.owner.rating; i++) {
		stars.push(<Star key={i} className="h-8 w-8 fill-current text-yellow-300" />)
	}

	for (let i = data.car.owner.rating; i < 5; i++) {
		stars.push(<Star key={i} className="h-8 w-8 text-gray-300" />)
	}

	return (
		<Fragment>
			<div className="relative flex flex-col flex-col-reverse md:flex-row justify-between mx-8 my-4">
				<div className="w-full flex flex-col">
					<div className="flex ml-2">
						<h1 className="font-semibold text-black mr-1 text-xl">{data.car.model}</h1>
						<h3 className="font-extralight text-black ml-1 text-xl"> {data.car.make}</h3>
					</div>
					<div className="flex justify-around w-full">
						<p>{data.car.year}</p>
						<p>${data.car.ratePerDay}/day</p>
						<p>{data.car.maxMilesPerDay} miles/day</p>
					</div>
					<div className="flex items-center ml-2">
						<Star className="h-4 w-4 fill-current text-yellow-300 mr-2" />
						<p>({data.car.rating.length} reviews)</p>
					</div>
					<div className="mt-6 mr-6">
						<RateList ratings={data.car.rating} />
					</div>
				</div>
				<div className="h-96 md:w-96 min-w-0 bg-cover rounded" style={{ backgroundImage: "url(" + carImage + ")" }} />
			</div>
			<div className="sticky bottom-0 bg-white p-2 border flex justify-between items-center">
				<div className="flex items-center ml-8">
					<div className="h-20 w-20 bg-cover rounded-xl" style={{ backgroundImage: "url(" + profileImage + ")" }} />
					<div className="flex flex-col ml-4">
						<div className="flex">
							{stars}
						</div>
						<p className="font-semibold">{data.car.owner.firstName} {data.car.owner.lastName}</p>
					</div>
				</div>
				<div>
					<button className="bg-white h-12 w-24 mr-6 rounded">Rent Later</button>
					{data.car.available ?
						<button className="bg-green-500 h-12 w-24 mr-6 rounded text-white">Rent</button>
						:
						<button className="bg-red-500 h-12 w-24 mr-6 rounded text-white cursor-not-allowed opacity-50">Rented</button>
					}
				</div>
			</div>
		</Fragment>
	)
}

export default CarDetail;