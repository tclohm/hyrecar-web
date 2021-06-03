import React from "react";

const inputLilScreenAnimate= "bg-gray-200 rounded p-4 md:hidden focus:outline-none animate-fade-down"
const inputLilScreenNoAnimate = "bg-gray-200 rounded p-4 md:hidden focus:outline-none active:ring focus:ring focus:ring-gray-300"

const SmallInputText = ({ info, cursor, input, animate, onChange }) => {
	return (
		<input
			name={info[cursor].name} 
			value={input[info[cursor].name]}
			type="text"
			className={animate ? inputLilScreenAnimate : inputLilScreenNoAnimate}
			onChange={(e) => onChange(e)} />
	)
}

export default SmallInputText