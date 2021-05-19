import React, { Fragment, useContext, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {

	const history = useHistory()
	const { isAuthenticatedAndProfileCreated, isAuthenticatedButProfileNotCreated, GetProfile } = useContext(AuthContext); 

	const handleRoute = pageURL => {
		history.push(pageURL)
	}

	useEffect(() => {
		console.log("refresh")
	}, [isAuthenticatedAndProfileCreated, isAuthenticatedButProfileNotCreated])

	const baseUrl = "http://localhost:4000"
	const { data, loading, error } = GetProfile()
	let profileImage;
	if (data)
	profileImage = baseUrl + data.profile.avatar.image.location

	return (
		<Fragment>
		<AppBar position="static">
			<ToolBar>
				{isAuthenticatedAndProfileCreated() ?
					<Grid container justify="space-between" style={{ alignItems: 'center' }}>
						<Grid item>
							<Button variant="contained" onClick={() => handleRoute("/")}>Explore</Button>
						</Grid>
						{data ?
						<Grid item>
							<Button onClick={() => handleRoute("/manage")}>
								<Avatar alt="avatar" src={profileImage} styles />
								<p>Your Cars</p>
							</Button>
						</Grid>
						:
						<></>
						}
						<Grid item>
							<Button>Signout</Button>
						</Grid>
					</Grid>
					:
					isAuthenticatedButProfileNotCreated() ?
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