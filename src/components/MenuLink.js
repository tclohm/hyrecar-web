import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const MenuLink = ({ label, to, active, style }) => {
	const match = useRouteMatch({
		path: to,
		exact: active
	})

	return (
		<>
	{
		match ?
		<Link
			className="font-semibold"
			style={style}
			to={to}>{label}</Link>
		:
		<Link
			className="font-base"
			style={style}
			to={to}>{label}</Link>
	}
		</>
	)
}

export default MenuLink