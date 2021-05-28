import React, { Fragment } from "react";
import CarList from "../components/CarsList";
import RightChevron from "../components/RightChevron";
import LeftChevron from "../components/LeftChevron";

import { GET_ALL_CARS } from "../graphql/queries";
import { useQuery } from "@apollo/react-hooks";

const Cars = () => {

	const { data, loading, error } = useQuery(GET_ALL_CARS);

	const move = (number) => {
		const el = document.getElementById("hscroll-content")
		el.scrollBy({
			left: number,
			behavior: 'smooth'
		})
	}

	if (loading) return <p>loading...</p>
	if (error) return <p>ERROR</p>
	if (data)
	return (
		<Fragment>
			<div className="relative h-screen w-full bg-contain bg-center bg-no-repeat bg-pink-banner" style={{ backgroundImage: "url(cardribble.jpg)" }}>
				<div className="absolute top-40 lg:left-20 left-5 text-left text-white font-black lg:text-5xl text-3xl w-80">
					<div className="flex items-center mb-4">
						<h1 className="text-sm mr-4">Car Rental</h1>
						<p className="lg:text-xl bg-black rounded px-2">2021</p>
					</div>
					<p className="text-xl">Introducing 100+ upgrades across our entire service</p>
				</div>
			</div>


			<div className="flex flex-col lg:flex-row lg:justify-center lg:items-center">
			<button className="flex-none w-24 h-12 py-2 px-4 mx-6 mt-4 rounded-xl border focus:outline-none focus:ring focus:ring-gray-200">Popular</button>
				<div className="overflow-x-visible bg-opacity-25">
					<div id="overflow" className="relative overflow-x-auto overflow-hidden mx-2 my-4">
						<div id="chevronleft" className="absolute lg:hidden inset-x-0 bg-white z-10 h-10 w-10 px-6 py-2">
							<button onClick={() => move(-500)}className="absolute left-4 w-14 focus:outline-none text-gray-400 hover:text-black"><LeftChevron className="h-6 w-6 bg-white"/></button>
						</div>
						<div id="hscroll-content" className="overflow-x-auto flex lg:justify-center scrollbar-hide lg:mt-4">
							<div className="lg:hidden bg-white text-white">padding</div>
							<a title="All" href="All" className="flex-shrink-0 px-4 py-2 mx-2 lg:mx-0 rounded-xl font-medium focus:font-semibold focus:bg-gray-200 focus:outline-none" type="radio">All</a>
							<a title="Microcar" href="Microcar" className="flex-shrink-0 px-4 py-2 mx-2 lg:mx-0 rounded-xl font-medium focus:font-semibold focus:bg-gray-200 focus:outline-none" type="radio">Microcar</a>
							<a title="Minicompact" href="Minicompact" className="flex-shrink-0 px-4 py-2 mx-2 lg:mx-0 rounded-xl font-medium focus:font-semibold focus:bg-gray-200 focus:outline-none" type="radio">Minicompact</a>
							<a title="Subcompact" href="Subcompact" className="flex-shrink-0 px-4 py-2 mx-2 lg:mx-0 rounded-xl font-medium focus:font-semibold focus:bg-gray-200 focus:outline-none" type="radio">Subcompact</a>
							<a title="Compact" href="Compact" className="flex-shrink-0 px-4 py-2 mx-2 lg:mx-0 rounded-xl font-medium focus:font-semibold focus:bg-gray-200 focus:outline-none" type="radio">Compact</a>
							<a title="Mid-size" href="Mid-size" className="flex-shrink-0 px-4 py-2 mx-2 lg:mx-0 rounded-xl font-medium focus:font-semibold focus:bg-gray-200 focus:outline-none" type="radio">Mid-size</a>
							<a title="Full-size" href="Full-size" className="flex-shrink-0 px-4 py-2 mx-2 lg:mx-0 rounded-xl font-medium focus:font-semibold focus:bg-gray-200 focus:outline-none" type="radio">Full-size</a>
							<a title="Full-size-luxury" href="Full-size-luxury" className="flex-shrink-0 px-4 py-2 mx-2 lg:mx-0 rounded-xl font-medium focus:font-semibold focus:bg-gray-200 focus:outline-none" type="radio">Full-size luxury</a>
							<div className="lg:hidden h-8 bg-white text-white">padding</div>
						</div>
						<div id="chevronright" className="absolute lg:hidden right-0 top-0 bg-white z-10 h-10 w-14 px-6 py-2">
							<button onClick={() => move(500)} className="absolute right-0 w-14 focus:outline-none text-gray-400 hover:text-black"><RightChevron className="h-6 w-6 bg-white"/></button>
						</div>
					</div>
				</div>
			</div>


			<div className="flex justify-center">
				<CarList cars={data.cars} />
			</div>
		</Fragment>
	)
}

export default Cars;