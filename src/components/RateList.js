import React from "react";
import RateCell from "./RateCell";


const RateList = ({ ratings }) => {
	return (
		<section className="flex flex-col mt-2 mb-16">
			{ratings.map(rate => (
				<div className="rounded p-8 border m-2" key={rate.id}>
					<RateCell rate={rate} />
				</div>
			))}
		</section>
	)
}

export default RateList;