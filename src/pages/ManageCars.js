import React, { Fragment, useContext, useEffect, useState } from "react";
import { GET_OWNED_CARS } from "../graphql/queries";
import { DELETE_CAR } from "../graphql/mutations";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { useHistory, useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import OwnerList from "../components/OwnerList";
import Box from "@material-ui/core/Box";

const style = {
	margin: '2rem'
}

const ManageCars = () => {

	const { profileId } = useParams()

	const history = useHistory()

	const { data, loading, error } = useQuery(GET_OWNED_CARS, {
		variables: { id: profileId }
	})

	useEffect(() => {
		console.log("rerender")
	},[data, loading])

	const [deleteCar, deleted] = useMutation(DELETE_CAR, {
		// update(cache, { data: { deleteCar }}) {
		// 	const identifier = deleteCar.split(' ')[1]
		// 	console.log(identifier)
		// 	const data = cache.readQuery({ query: GET_OWNED_CARS })
		// 	console.log("data", data)
		// 	// cache.writeQuery({
			// 	query: GET_OWNED_CARS,
			// 	data: data.owner.filter(obj => obj.id !== identifier)
			// })
		})

	const onDelete = (input) => {
		const { id } = input
		deleteCar({
			variables: { id: id }
		})
	}
	
	if (loading) <p>Loading</p>
	if (error) <p>Error</p>
 	if (data) console.log(data)
	
	return (
		<Container>
			{
				data && data.owner.length >= 1 ?
				<h1>{data.owner[0].owner.profile.firstName}'s cars</h1>
				:
				<h1>Your car's</h1>
			}
			<Button color="primary" variant="contained" onClick={() => history.push('/add-car')} style={style}>
	          Add Car
	        </Button>
	        {data && data.owner.length >= 1 ?
	        	<Box my={2}>
					<OwnerList owners={data.owner} onDelete={onDelete} />
				</Box>
				:
				<p>Such emptiness</p>
	        }
		</Container>
	)
}

export default ManageCars;