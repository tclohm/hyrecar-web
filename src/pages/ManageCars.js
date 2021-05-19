import React, { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import CarList from "../components/CarsList";
import Box from "@material-ui/core/Box";

const style = {
	margin: '2rem'
}

const ManageCars = () => {

	const history = useHistory()
 
	return (
		<Container>
			<Button color="primary" variant="contained" onClick={() => history.push('/add-car')} style={style}>
	          Add Car
	        </Button>
		</Container>
	)
}

export default ManageCars;