import React from "react";
import { Link } from "react-router-dom";
import Anon from "./Anon";

const Header = ({ show, close, self }) => {

	if (self == null) {
		return (
			<header onClick={close} className="min-full flex flex-col sm:py-4 md:pt-4 sticky top-0 z-40 lg:z-50 w-full max-w-8xl mx-auto border-white bg-white sm:text-sm text-xs shadow-sm">
				<div className="hidden sm:flex justify-between items-center">
					<Link 
						className="mx-4" 
						to="/"
					>
						Explore
					</Link>
					<input 
						className="bg-gray-100 p-3 md:flex-none flex-1 w-1/3 rounded focus:bg-white focus:shadow-xl sm:inline hidden focus:outline-none" 
						type="text" 
						placeholder="search"
					/>
					<nav className="relative flex">
						<Link className="px-2 text-gray-400 font-light align-items hover:bg-gray-300 rounded focus:outline-none flex items-center" to="/create/car">Rent your car</Link>
						<button className="mr-10 ml-4 focus:outline-none rounded-full" onClick={show}>
							<Anon className="h-8 w-8 text-gray-400 stroke-current" />
						</button>
					</nav>
				</div>
				<input className="bg-gray-100 p-3 mx-3 my-5 md:flex-none flex-1 min-full rounded focus:bg-white focus:shadow-xl inline sm:hidden" type="text" placeholder="search" />
			</header>
		)
	} else {

		const baseUrl = "http://localhost:4000"
		const profileImage = baseUrl + self.avatar.image.location

		return (
			<header onClick={close} className="min-full flex flex-col sm:py-4 md:pt-4 sticky top-0 z-40 lg:z-50 w-full max-w-8xl mx-auto border-white bg-white sm:text-sm text-xs shadow-sm">
				<div className="hidden sm:flex justify-between items-center">
					<Link 
						className="mx-4" 
						to="/"
					>
						Explore
					</Link>
					<input 
						className="bg-gray-100 p-3 md:flex-none flex-1 w-1/3 rounded focus:bg-white focus:shadow-xl sm:inline hidden focus:outline-none" 
						type="text" 
						placeholder="search"
					/>
					<nav className="relative flex">
						<Link className="px-2 text-gray-400 font-light align-items hover:bg-gray-300 rounded focus:outline-none flex items-center" to="/create/car">Rent your car</Link>
						<button className="mr-10 ml-4 focus:outline-none rounded-full" onClick={show}>
							<div className="h-8 w-8 bg-cover bg-center rounded-full" style={{ backgroundImage: "url(" + profileImage + ")" }}/>
						</button>
					</nav>
				</div>
				<input className="bg-gray-100 p-3 mx-3 my-5 md:flex-none flex-1 min-full rounded focus:bg-white focus:shadow-xl inline sm:hidden" type="text" placeholder="search" />
			</header>
		)
	}
}

export default Header