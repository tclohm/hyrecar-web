import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";


const BottomNavBar = () => {

	const { isAuthenticated } = useContext(AuthContext)

	return (
		<section className="min-full flex flex-col py-4 fixed bottom-0 z-40 lg:z-50 w-full max-w-8xl mx-auto border-white bg-white sm:hidden text-xs shadow-sm">
			<div className="flex justify-center items-center">
				<Link className="mx-4" to="/">Explore</Link>
				{
					isAuthenticated() ?
						(
							<nav>
								<Link className="mx-4" to="/profile">Profile</Link>
								<Link className="mx-4" to="/settings">Settings</Link>
							</nav>
							) : (
							<nav>
								<Link className="mx-4" to="/login">Sign in</Link>
								<Link className="mr-4 bg-yellow-300 text-white font-medium px-4 py-3 rounded" to="/signup">Sign up</Link>
							</nav>
						)
				}
			</div>
		</section>
	)
}

export default BottomNavBar