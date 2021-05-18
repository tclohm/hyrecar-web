import React, { Fragment, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {

	const history = useHistory()
	const { isAuthenticatedAndProfileCreated, isAuthenticatedAndProfileNotCreated } = useContext(AuthContext); 

	const handleRoute = pageURL => {
		history.push(pageURL)
	}

	return (
		<Fragment>
		<AppBar position="static">
			<ToolBar>
				{isAuthenticatedAndProfileCreated() ? 
					<Button>Manage Your Cars</Button>
					:
					isAuthenticatedAndProfileNotCreated ?
					<></>
					:
					<Grid container justify="space-between">
						<Grid item>
							<Button variant="contained" onClick={() => handleRoute("/")}>Explore</Button>
						</Grid>
						<Grid item>
							<Button onClick={() => handleRoute("/login")}>Login</Button>
							<Button onClick={() => handleRoute("/signup")}>Signup</Button>
						</Grid>
					</Grid>
				}
				
			</ToolBar>
		</AppBar>
		</Fragment>
	)
}

export default Header;