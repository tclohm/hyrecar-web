import React, { useContext } from "react";
import MenuLink from "./MenuLink";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";


const BottomNavBar = () => {

	const { isAuthenticated } = useContext(AuthContext)

	return (
		<section className="min-full flex flex-col py-4 fixed bottom-0 z-40 lg:z-50 w-full max-w-8xl mx-auto border-white bg-white sm:hidden text-xs shadow-sm">
			<div className="flex justify-center items-center">
				<MenuLink className="mx-4" to="/" label="Explore" active={true}/>
				{
					isAuthenticated() ?
						(
							<nav className="mx-4">
								<MenuLink to="/account/profile" label="Profile" style={{ margin: "0 1rem 0 0" }} />
								<MenuLink to="/account" label="Settings" active={true} />
							</nav>
							) : (
							<nav>
								<MenuLink to="/login" label="Sign in" style={{ margin: "0 1rem 0 1rem" }} />
								<Link className="mr-4 bg-yellow-300 text-white font-medium px-4 py-3 rounded" to="/signup">Sign up</Link>
							</nav>
						)
				}
			</div>
		</section>
	)
}

export default BottomNavBar