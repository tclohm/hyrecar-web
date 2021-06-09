import React, { useState } from "react";
import RightChevron from "./RightChevron";
import LeftChevron from "./LeftChevron";
import DownChevron from "./DownChevron";
import Modal from "./Modal";
import Filter from "./Filter";

const CarTypeFilter = ({ types, setType, selected, show, close, open, filter, setFilter }) => {

	const transform = (type) => {
		switch(type) {
			case 'SUV':
				return 'SUV'
			case 'TRUCH':
				return 'Truch'
			case'SEDAN':
				return 'Sedan'
			case 'VAN':
				return 'Van'
			case 'COUPE':
				return 'Coupe'
			case 'WAGON':
				return 'Wagon'
			case 'CONVERTIBLE':
				return 'Convertible'
			case 'SPORTS_CAR':
				return 'Sports Car'
			case 'DIESEL':
				return 'Diesel'
			case 'CROSSOVER':
				return 'Crossover'
			case 'LUXURY_CAR':
				return 'Luxury Car'
			case 'HYBRID_ELECTRIC':
				return 'Hybrid/Electric' 
			default:
				return 'All'
		}
	}

	const [isLeft, setIsLeft] = useState(false)
	const [isRight, setIsRight] = useState(true)

	const move = (number, direction) => {
		const el = document.getElementById("hscroll-content")
		el.scrollBy({ left: number, behavior: 'smooth' })
	}

	const onScroll = () => {
		const el = document.getElementById("hscroll-content")
		if (el.scrollLeft < 10) {
			setIsLeft(false)
		}
		else if (el.scrollLeft > 10 && (el.scrollLeft < el.scrollLeftMax)) {
			setIsLeft(true)
			setIsRight(true)
		}
		else if (el.scrollLeft === el.scrollLeftMax) {
			setIsRight(false)
		}

	}

	return (
		<div className="relative flex flex-col 2xl:flex-row 2xl:justify-center 2xl:items-center" onClick={close}>
			<div className="relative">
				<button 
					onClick={show}
					className="flex flex-shrink-0 justify-around items-center h-12 py-2 px-4 mx-6 mt-4 rounded-xl border focus:outline-none focus:ring focus:ring-gray-200 group">
					{filter}
					<DownChevron className="ml-4 h-4 w-4 group-focus:animate-spin" />
				</button>
				{open ? 
					<Modal><Filter filter={filter} setFilter={setFilter} /></Modal>
					: 
					<></>
				}
			</div>
			<div className="overflow-x-visible bg-opacity-25">
				<div id="overflow" className="relative overflow-x-auto overflow-hidden mx-2 my-4">
					{
					isLeft ?
						<div id="chevronleft" className="xl:hidden absolute 2xl:hidden inset-x-0 bg-white z-10 h-10 w-10 px-6 py-2">
							<button onClick={() => move(-1000, 'left')} className="absolute left-4 w-14 focus:outline-none text-gray-400 hover:text-black"><LeftChevron className="h-6 w-6 bg-white"/></button>
						</div>
						: <></>
					}
					<div id="hscroll-content" className="overflow-x-auto flex 2xl:justify-center scrollbar-hide 2xl:mt-4" onScroll={onScroll}>
						<div className="2xl:hidden bg-white text-white">padding</div>
						{types.map((type, index) => (
							type === selected ?
							<a key={index} title={type} href={type} onClick={() => setType(type)} className="flex-shrink-0 px-4 py-2 mx-1 rounded-xl font-medium font-semibold bg-gray-200 outline-none" type="radio">{transform(type)}</a>
							:
							<a key={index} title={type} href={type} onClick={() => setType(type)} className="flex-shrink-0 px-4 py-2 mx-1 rounded-xl font-medium focus:font-semibold focus:bg-gray-200 focus:outline-none" type="radio">{transform(type)}</a>
						))}
						<div className="2xl:hidden h-8 bg-white text-white">padding</div>
					</div>
					{
					isRight ?
						<div id="chevronright" className="xl:hidden absolute 2xl:hidden right-0 top-0 bg-white z-10 h-10 w-14 px-6 py-2">
							<button onClick={() => move(1000, 'right')} className="absolute right-0 w-14 focus:outline-none text-gray-400 hover:text-black"><RightChevron className="h-6 w-6 bg-white"/></button>
						</div>
						: <></>
					}
				</div>
			</div>
		</div>
	)
}

export default CarTypeFilter