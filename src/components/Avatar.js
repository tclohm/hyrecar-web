import React from "react";

const Avatar = ({person}) => {
	const avatarImage = 'http://localhost:4000' + person.avatar.image.location 
	return (
		<div className="relative">
			<div className="absolute -right-4 -bottom-6 flex items-center justify-between">
				<p className="font-light text-xs mr-2">{person.firstName}</p>
				<div className="h-8 w-8 bg-cover rounded-full" style={{ backgroundImage: "url(" + avatarImage + ")" }} />
			</div>
		</div>
	)
}

export default Avatar;