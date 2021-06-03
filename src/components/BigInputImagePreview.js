import React from "react";

const BigInputImagePreview = ({ image, name, changeImage }) => {
	return (
		<div className="hidden md:flex flex-col">
			<div className="p-8 mb-4">
				<img 
					className="h-48 w-48"
					src={image} 
					alt={name} />
			</div>
			<input 
				type="file" 
				name={name} 
				accept="image/png, image/jpeg" 
				onChange={(event) => changeImage(event)} />
		</div>
	)
}

export default BigInputImagePreview;