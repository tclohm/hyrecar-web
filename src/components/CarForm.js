import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from 'formik';
import { useMutation } from "@apollo/react-hooks";

import { ADD_CAR } from "../graphql/mutations";
import schema from "../validations/CarSchema";

import Container from "@material-ui/core/Container";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";

const CarForm = ({ carObject={}, editing=false }) => {

	const history = useHistory()

	const [open, setOpen] = useState(false)

	const [available, setAvailable] = useState(carObject.available || false)

	const cancel = () => {
		history.push('/manage')
	}

	const handleClose = () => {
		setOpen(false)
	}

	const handleSwitch = () => {
		setAvailable(!available)
	}

	const [addCar, car] = useMutation(ADD_CAR)

	const formik = useFormik({
		initialValues: {
			make: carObject.make,
			model: carObject.model,
			vin: carObject.vin,
			condition: carObject.condition,
			ratePerDay: carObject.ratePerDay,
			maxMilesPerDay: carObject.maxMilesPerDay,
			available: carObject.available
		},
		validationSchema: schema,
		onSubmit: async (values) => {
			const input = Object.assign({}, values)
			input.profileId = 0
			input.carImageId = 0
			try {
				//addCar({ variables: { input }})
				//history.push('/manage')
				console.log(input)
			} catch (err) {
				console.log(err)
			}
		}
	})

	return (
	<Container>
		  <Button onClick={() => cancel()} style={{ margin: '2rem 0 0 2rem' }}>Cancel</Button>
		  {
		  	editing ?
		  	<h1>Edit your car</h1>
		  	:
		  	<h1>Create a car</h1>
		  }
	      <form onSubmit={formik.handleSubmit}>
	        <TextField
	          fullWidth
	          id="make"
	          name="make"
	          label="make"
	          value={formik.values.make}
	          onChange={formik.handleChange}
	          error={formik.touched.make && Boolean(formik.errors.make)}
	          helperText={formik.touched.make && formik.errors.make}
	        />
	        <TextField
	          fullWidth
	          id="model"
	          name="model"
	          label="model"
	          value={formik.values.model}
	          onChange={formik.handleChange}
	          error={formik.touched.model && Boolean(formik.errors.model)}
	          helperText={formik.touched.model && formik.errors.model}
	        />
	        <TextField
	          fullWidth
	          id="year"
	          name="year"
	          label="year"
	          value={formik.values.year}
	          onChange={formik.handleChange}
	          error={formik.touched.year && Boolean(formik.errors.year)}
	          helperText={formik.touched.year && formik.errors.year}
	        />
	        <TextField
	          fullWidth
	          id="vin"
	          name="vin"
	          label="vin"
	          value={formik.values.vin}
	          onChange={formik.handleChange}
	          error={formik.touched.vin && Boolean(formik.errors.vin)}
	          helperText={formik.touched.vin && formik.errors.vin}
	        />
	        <TextField
	          fullWidth
	          id="condition"
	          name="condition"
	          label="condition"
	          value={formik.values.condition}
	          onChange={formik.handleChange}
	          error={formik.touched.condition && Boolean(formik.errors.condition)}
	          helperText={formik.touched.condition && formik.errors.condition}
	        />
	        <TextField
	          fullWidth
	          id="ratePerDay"
	          name="ratePerDay"
	          label="ratePerDay"
	          value={formik.values.ratePerDay}
	          onChange={formik.handleChange}
	          error={formik.touched.ratePerDay && Boolean(formik.errors.ratePerDay)}
	          helperText={formik.touched.ratePerDay && formik.errors.ratePerDay}
	        />
	       	<TextField
	          fullWidth
	          id="maxMilesPerDay"
	          name="maxMilesPerDay"
	          label="maxMilesPerDay"
	          value={formik.values.maxMilesPerDay}
	          onChange={formik.handleChange}
	          error={formik.touched.maxMilesPerDay && Boolean(formik.errors.maxMilesPerDay)}
	          helperText={formik.touched.maxMilesPerDay && formik.errors.maxMilesPerDay}
	        />
	        <TextField
	          fullWidth
	          id="ratePerDay"
	          name="ratePerDay"
	          label="ratePerDay"
	          value={formik.values.ratePerDay}
	          onChange={formik.handleChange}
	          error={formik.touched.ratePerDay && Boolean(formik.errors.ratePerDay)}
	          helperText={formik.touched.ratePerDay && formik.errors.ratePerDay}
	        />
	        <FormControlLabel
	        	control={
	        		<Switch
			          name="available"
			          checked={formik.values.available}
			          value={formik.values.available}
			          onChange={handleSwitch}
	       			/>
	        	}
	        	label="Will you be renting out your car?"
	        />
			<Typography display="inline">{available ? "yes" : "no"}</Typography>
	        <Button color="primary" variant="contained" fullWidth type="submit">
	          Submit
	        </Button>
	      </form>
	      <Snackbar
	      	anchorOrigin={{
	      		vertical: 'top',
	      		horizontal: 'right',
	      	}}
	      	open={open}
	      	autoHideDuration={6000}
	      	onClose={handleClose}
	      	message="An error occurred"
	      	action={
	      		<Fragment>
	      			<IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
	      				<CloseIcon fontSize="small" />
	      			</IconButton>
	      		</Fragment>
	      	}
	      />
	    </Container>
	)
}

export default CarForm;