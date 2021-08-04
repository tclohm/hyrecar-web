import React, { useState } from "react";

const Toggle = ({ name, toggle, children, isActive }) => {
	const [active, setActive] = useState(isActive ? true : false)

	return (
			<button
			id="toggleBtn"
			name={name}
			value={active}
			className={active ? "border rounded my-1 py-2 mx-2 focus:outline-none border-black text-xs": "border rounded my-1 py-2 mx-2 focus:outline-none text-xs"}
			onClick={(event) => {
				setActive(!active)
				toggle(name, active)
			}
			}>
			{ children }
			</button>
	)
}

export default Toggle;