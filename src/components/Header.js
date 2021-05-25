import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
	return (
		<header className="min-full flex justify-between py-6 sticky top-0 z-40 lg:z-50 text-sm w-full max-w-8xl mx-auto h-16 border-white bg-white">
			<Link className="mx-4" to="/">Explore</Link>
			<input className="bg-gray-100 p-4 md:flex-none flex-1 w-96 rounded focus:bg-white focus:shadow-xl" type="text" placeholder="search" />
			<nav>
				<button className="mx-2" type="button">Sign in</button>
				<button className="mx-4" type="button">Sign up</button>
			</nav>
		</header>
	)
}

export default Header