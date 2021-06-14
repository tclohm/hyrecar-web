import React from "react";

const Account = () => {
	return (
		<section className="flex flex-col">
			<label>Email</label>
			<input 
				type="text" 
				value=""
				className="bg-gray-200 rounded p-4 focus:outline-none active:ring focus:ring focus:ring-gray-300 my-2"
			/>
			<label>Cars</label>
			<input 
				type="text"
				value=""
				className="bg-gray-200 rounded p-4 focus:outline-none active:ring focus:ring focus:ring-gray-300 my-2"
			/>
			<button className="bg-pink-400 font-semibold text-white p-2 rounded">Save Changes</button>
		</section>
	)
}

export default Account