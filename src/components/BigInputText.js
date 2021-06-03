import React from "react";

const inputBigScreenAnimate = "bg-gray-200 rounded p-4 w-1/2 focus:outline-none animate-fade-down" 
const inputBigScreenNoAnimate = "bg-gray-200 rounded p-4 w-1/2 focus:outline-none active:ring focus:ring focus:ring-gray-300"

const BigInputText = ({ info, cursor, input, animate, onChange }) => {
	return (
		<input  name={info[cursor].name}  value={input[info[cursor].name]} type="text"
			className={animate ? inputBigScreenAnimate : inputBigScreenNoAnimate}
			onChange={(e) => onChange(e)}
		/>

	)
}

export default BigInputText