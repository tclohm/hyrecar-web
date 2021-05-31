import React from "react";

const Splash = ({ onClick }) => {
	return (
		<div className="relative h-screen w-full bg-contain bg-center bg-no-repeat bg-pink-banner" style={{ backgroundImage: "url(cardribble.jpg)" }} onClick={onClick}>
			<div className="absolute top-40 lg:left-20 left-5 text-left text-white font-black lg:text-5xl text-3xl w-80">
				<div className="flex items-center mb-4">
					<h1 className="text-sm mr-4">Car Rental</h1>
					<p className="lg:text-xl bg-black rounded px-2">2021</p>
				</div>
				<p className="text-xl">Introducing 100+ upgrades across our entire service</p>
			</div>
		</div>
	)
}

export default Splash