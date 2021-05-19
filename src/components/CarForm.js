import React, { Fragment, useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from 'formik';
import { useMutation } from "@apollo/react-hooks";
import { AuthContext } from "../context/AuthContext";
import { ADD_CAR, ADD_CAR_IMAGE } from "../graphql/mutations";
import { GET_OWNED_CARS } from "../graphql/queries";
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

const url = "http://localhost:4000"

const myImageStyle = {
	height: "200px",
	width: "200px",
	borderRadius: "50%"
}

const CarForm = ({ carObject={}, editing=false }) => {

	const history = useHistory()

	const { GetProfile } = useContext(AuthContext)

	const profile = GetProfile()

	const [open, setOpen] = useState(false)
	const placeholder = new File(['carImage-0'], 'carImage-0.jpg', { type: 'image/jpeg' })

	const [available, setAvailable] = useState(true)

	const [addImage, image] = useMutation(ADD_CAR_IMAGE)
	const [imageUploaded, setImageUploaded] = useState(false)
	const [identifier, setIdentifier] = useState(61)

	const handleUpload =  ({ target }) => {
		
		const file = target.files[0]
		const validity = target.validity
		
		if (validity.valid) {
			addImage({ variables: { file } })
			setImageUploaded(true)
		} else {
			alert("Error uploading image")
		}
	}

	useEffect(() => {
		if (imageUploaded && image.data) {
			setIdentifier(image.data.uploadCarImage.id)
		}
	}, [image, imageUploaded, identifier])

	const initialCar = {
			profileId: profile.data.profile.id || 0,
			carImageId: identifier,
			make: carObject.make || '',
			model: carObject.model || '',
			vin: carObject.vin ||  0,
			year: carObject.year ||  0,
			condition: carObject.condition || '',
			ratePerDay: carObject.ratePerDay || 35,
			maxMilesPerDay: carObject.maxMilesPerDay || 100,
			available: carObject.available || available 
	}

	const cancel = () => {
		history.push(`/manage/${profile.data.profile.id}`)
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
			make: initialCar.make,
			model: initialCar.model,
			vin: initialCar.vin,
			year: initialCar.year,
			condition: initialCar.condition,
			ratePerDay: initialCar.ratePerDay,
			maxMilesPerDay: initialCar.maxMilesPerDay,
		},
		validationSchema: schema,
		onSubmit: async (values) => {
			const input = Object.assign({}, values)
			input.profileId = initialCar.profileId
			input.carImageId = initialCar.carImageId
			input.maxMilesPerDay = Number(input.maxMilesPerDay)
			input.ratePerDay = Number(input.ratePerDay)
			input.available = available
			try {
				addCar({ 
					variables: { input },
					optimisticResponse: {
						__typename: "Mutation",
						addCar: {
							id: Math.floor(Math.random() * 1000000) + "",
							make: input.make,
							model: input.model,
							year: input.year,
							vin: input.vin,
							condition: input.condition,
							image: {
								image: {
									location: '/static/assets/images/cars/carImage-0',
									name: 'carImage-0',
								},
							},
							ratePerDay: input.ratePerDay,
							maxMilesPerDay: input.maxMilesPerDay,
							available: input.available,
							owner: {
								id: Math.floor(Math.random() * 1000000) + "",
								profile: {
									firstName: "Anon",
									lastName: "ymous"
								}
							}
						}
					}
				})
				setTimeout(function() {
					history.push(`/manage/${profile.data.profile.id}`)
				}, 2000);
			} catch (err) {
				setOpen(true)
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
		  <div>
		  	{ 
		  		imageUploaded && image.data ? 
		  			<>
		  			<p>Image Uploaded!</p>
		  			<img src={url + image.data.uploadCarImage.image.location} style={myImageStyle} alt="profile" />
		  			</>
		  		:
				<>
					<img src={placeholder.name} style={myImageStyle} alt="default avatar" />
					<p>use our placeholder car image or upload your own car picture</p>
		  			<input type="file" accept="image/*" onChange={handleUpload} />
		  		</>

		  	}
		  </div>
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
	        <FormControlLabel
	        	control={
	        		<Switch
			          name="available"
			          checked={available}
			          value={available}
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