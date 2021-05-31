import React, { Fragment, useState } from "react";
import CarTypeFilter from "../components/CarTypeFilter";
import CarList from "../components/CarsList";
import Splash from "../components/Splash";

import { GET_ALL_CARS } from "../graphql/queries";
import { useQuery } from "@apollo/react-hooks";

const types = [
	'ALL',
	'MICROCAR',
	'MINICOMPACT',
	'SUBCOMPACT',
	'COMPACT',
	'MID_SIZE',
	'FULL_SIZE',
	'FULL_SIZE_LUXURY'
]

const Cars = () => {

	const [type, setType] = useState('ALL')
	const [filter, setFilter] = useState('Popular')
	const [open, setOpen] = useState(false)

	const show = (e) => {
		e.stopPropagation()
		e.preventDefault()
		setOpen(!open)
	}

	const close = (e) => {
		e.preventDefault()
		setOpen(false)
	}

	const { data, loading, error } = useQuery(GET_ALL_CARS, {
		variables: { type: type }
	});

	if (loading) return (
		<Fragment>
			<Splash />
			<CarTypeFilter types={types} setType={setType} selected={type} />
			<p>loading</p> 
		</Fragment>
	)
	if (error) return <p>ERROR</p>
	if (data)
	return (
		<Fragment>
			<Splash onClick={close} />
			<CarTypeFilter 
				types={types} 
				setType={setType} 
				selected={type} 
				show={show} 
				close={close} 
				open={open}
				filter={filter}
				setFilter={setFilter}
		/>
			<div className="flex justify-center" onClick={close}>
				<CarList cars={data.cars} />
			</div>
		</Fragment>
	)
}

export default Cars;