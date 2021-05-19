import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_CAR } from "../graphql/queries";
import { useParams } from "react-router-dom";

const DetailPage = () => {

	const { id } = useParams()

	const { data, loading, error } = useQuery(GET_CAR, {
		variables: { id: id }
	})


	const baseUrl = 'http://localhost:4000'

	if (loading) return <p>loading</p>
	if (error) return <p>error</p>
	if (data)

	return (
		<>
		{data ?

			<div style={{ margin: '0 0 0 20rem' }}>
				<h1>{data.car.make}</h1>
				<h2>{data.car.model}, {data.car.year}</h2>
				<img src={baseUrl + data.car.image.image.location} alt={data.car.image.image.name} style={{ height: '150px', width: '150px' }}/>
				<p>Condition: {data.car.condition}</p>
				<p>Available: {data.car.available}</p>
				<p>Rate per day: {data.car.ratePerDay}</p>
				<p>Max Miles allowed to drive per day: {data.car.maxMilesPerDay}</p>
				<img src={baseUrl + data.car.owner.profile.avatar.image.location} alt={data.car.owner.profile.avatar.image.name} style={{ height: '150px', width: '150px' }} />
				<p>{data.car.owner.profile.firstName} {data.car.owner.profile.lastName}</p>
			</div>	
		:
		<p>Nothing here</p>
		}
		<p>...</p>
		</>
	)
}

export default DetailPage;