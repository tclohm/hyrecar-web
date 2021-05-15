import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Button from "@material-ui/core/Button";

const Header = () => {
	return (
		<Fragment>
		<AppBar position="static">
			<ToolBar>
				<Button>Explore</Button>
				<Button>Profile</Button>
				<Button>Login</Button>
				<Button>Signup</Button>
			</ToolBar>
		</AppBar>
		</Fragment>
	)
}

export default Header;