import React from "react";

const EditProfile = () => {
	return (
		<section className="flex flex-col">
			<div className="flex m-6 w-1/3 justify-around">
				<img src="" alt="profile" />
				<button className="bg-pink-400 font-semibold text-white p-2 rounded">upload new picture</button>
				<button className="bg-gray-200 font-semibold p-2 rounded">delete</button>
			</div>
			<label>First Name</label>
			<input 
				type="text" 
				value=""
				className="bg-gray-200 rounded p-4 focus:outline-none active:ring focus:ring focus:ring-gray-300 my-2"
			/>
			<label>Last Name</label>
			<input 
				type="text"
				value=""
				className="bg-gray-200 rounded p-4 focus:outline-none active:ring focus:ring focus:ring-gray-300 my-2"
			/>
			<label>License</label>
			<input 
				type="text"
				value=""
				className="bg-gray-200 rounded p-4 focus:outline-none active:ring focus:ring focus:ring-gray-300 my-2"
			/>
			<button className="bg-pink-400 font-semibold text-white p-2 rounded">Save Changes</button>
		</section>
	)
}

export default EditProfile