import React, { Fragment, useState, useContext } from "react";
import CarTypeFilter from "../components/CarTypeFilter";
import CarList from "../components/CarsList";
import Splash from "../components/Splash";
import { AuthContext } from "../context/AuthContext";

import { GET_ALL_CARS } from "../graphql/queries";
import { useQuery } from "@apollo/react-hooks";

const types = [
	'ALL',
	'SUV',
	'TRUCK',
	'SEDAN',
	'VAN',
	'COUPE',
	'WAGON',
	'CONVERTIBLE',
	'SPORTS_CAR',
	'DIESEL',
	'CROSSOVER',
	'LUXURY_CAR',
	'HYBRID_ELECTRIC',
]

const Cars = () => {

	const { isAuthenticated } = useContext(AuthContext)

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
			{
				isAuthenticated() ? <></> : <Splash />
			}
			<CarTypeFilter types={types} 
				setType={setType} 
				selected={type} 
				show={show} 
				close={close} 
				open={open}
				filter={filter}
				setFilter={setFilter} />
			<div className="flex justify-center">
				<div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 gap-2 p-2 mt-2 animate-pulse">
					<div className="relative w-80 w-full lg:rounded-xl flex flex-col py-5 shadow-lg border">
						<div className="flex h-60 flex-grow bg-gray-200 justify-center items-center">
							   <div className="w-full flex justify-center">
									<h1 className="font-semibold text-white mr-1 text-sm">loading</h1>
								</div>
						</div>
						<div className="flex flex-row justify-between text-sm md:px-2 px-0 my-2">
							<div className="bg-gray-200 w-12 h-4 rounded-xl" />
							<div className="bg-gray-200 w-4 h-4 rounded-xl"/>
						</div>
					</div>
					<div className="relative w-80 w-full lg:rounded-xl flex flex-col py-5 shadow-lg border">
						<div className="flex h-60 flex-grow bg-gray-200 justify-center items-center">
							   <div className="w-full flex justify-center">
									<h1 className="font-semibold text-white mr-1 text-sm">loading</h1>
								</div>
						</div>
						<div className="flex flex-row justify-between text-sm md:px-2 px-0 my-2">
							<div className="bg-gray-200 w-12 h-4 rounded-xl" />
							<div className="bg-gray-200 w-4 h-4 rounded-xl"/>
						</div>
					</div>
					<div className="relative w-80 w-full lg:rounded-xl flex flex-col py-5 shadow-lg border">
						<div className="flex h-60 flex-grow bg-gray-200 justify-center items-center">
							   <div className="w-full flex justify-center">
									<h1 className="font-semibold text-white mr-1 text-sm">loading</h1>
								</div>
						</div>
						<div className="flex flex-row justify-between text-sm md:px-2 px-0 my-2">
							<div className="bg-gray-200 w-12 h-4 rounded-xl" />
							<div className="bg-gray-200 w-4 h-4 rounded-xl"/>
						</div>
					</div>
					<div className="relative w-80 w-full lg:rounded-xl flex flex-col py-5 shadow-lg border">
						<div className="flex h-60 flex-grow bg-gray-200 justify-center items-center">
							   <div className="w-full flex justify-center">
									<h1 className="font-semibold text-white mr-1 text-sm">loading</h1>
								</div>
						</div>
						<div className="flex flex-row justify-between text-sm md:px-2 px-0 my-2">
							<div className="bg-gray-200 w-12 h-4 rounded-xl" />
							<div className="bg-gray-200 w-4 h-4 rounded-xl"/>
						</div>
					</div>
				</div>
			</div> 
		</Fragment>
	)
	if (error) return <p>ERROR</p>
	if (data)
	return (
		<Fragment>
			{
				isAuthenticated() ? <></> : <Splash onClick={close} />
			}
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