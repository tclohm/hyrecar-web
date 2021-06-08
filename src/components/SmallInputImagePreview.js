import React from "react";

const SmallInputImagePreview = ({ image, name, changeImage }) => {
	return (
		<div className="md:hidden flex flex-col">
			<div className="p-8 mb-4">
				<img 
					className="h-40 w-40 rounded-xl"
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

export default SmallInputImagePreview;