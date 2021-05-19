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
	const { isAuthenticatedAndProfileCreated, isAuthenticatedButProfileNotCreated, GetProfile, logout } = useContext(AuthContext); 

	const handleRoute = pageURL => {
		history.push(pageURL)
	} 

	let path = '/'

	const baseUrl = "http://localhost:4000"
	const { data, error } = GetProfile()

	useEffect(() => {
		if (data && data.profile) {
			path = `/manage/${data.profile.id}`
		}
	}, [data])

	useEffect(() => {
		console.log("REFRESH")
	}, [isAuthenticatedButProfileNotCreated, isAuthenticatedAndProfileCreated, GetProfile, logout])


	let profileImage;
	if (error) return <p>Error</p>

	if (data && (document.cookie === 'signedin=true' || document.cookie === 'account=true')) {
		console.log("data in header", data)
		profileImage = baseUrl + data.profile.avatar.image.location

		return (
			<Fragment>
			<AppBar position="static">
				<ToolBar>
						<Grid container justify="space-between" style={{ alignItems: 'center' }}>
							<Grid item>
								<Button variant="contained" onClick={() => handleRoute("/")}>Explore</Button>
							</Grid>
							<Grid item>
								<Button onClick={() => handleRoute(path)}>
									<Avatar alt="avatar" src={profileImage} />
									<p>Your Cars</p>
								</Button>
							</Grid>
							<Grid item>
								<Button onClick={() => logout()}>Signout</Button>
							</Grid>
						</Grid>
				</ToolBar>
			</AppBar>
			</Fragment>
		)
	} else {
		return (
			<Fragment>
				<AppBar position="static">
					<ToolBar>
						<Grid container justify="space-between">
							<Grid item>
								<Button variant="contained" onClick={() => handleRoute("/")}>Explore</Button>
							</Grid>
							<Grid item>
								<Button onClick={() => handleRoute("/login")}>Login</Button>
								<Button onClick={() => handleRoute("/signup")}>Signup</Button>
							</Grid>
						</Grid>
					</ToolBar>
				</AppBar>
			</Fragment>
		)
	}

}

export default Header;