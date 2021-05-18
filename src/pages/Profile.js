import React, { useContext, useState, Fragment } from "react";
import { InfoContext } from "../context/InfoContext";
import schema from "../validations/ProfileSchema";
import { useFormik } from 'formik';
import Container from "@material-ui/core/Container";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import CloseIcon from '@material-ui/icons/Close';

import { useHistory } from "react-router-dom";

import { ADD_PROFILE_IMAGE } from "../graphql/mutations";
import { useMutation } from "@apollo/react-hooks";

const url = "http://localhost:4000"

const myImageStyle = {
	height: "200px",
	width: "200px",
	borderRadius: "50%"
}

const Profile = () => {

	// userId
	const { information, setInformation, handleSwitch } = useContext(InfoContext); 

	const history = useHistory();
	const [open, setOpen] = useState(false)
	const placeholder = new File(['anon-0'], 'anon-0.jpg', { type: 'image/jpeg' })

	const handleClose = () => {
		setOpen(false)
	}

	const [addImage, image] = useMutation(ADD_PROFILE_IMAGE)
	const [imageUploaded, setImageUploaded] = useState(false)

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

	const formik = useFormik({
		initialValues: {
			license: information.license,
			firstName: information.firstName,
			lastName: information.lastName,
			renting: information.renting,
		},
		validationSchema: schema,
		onSubmit: (values) => {
			console.log(values)
		}
	})


	return (
		<Container>
		  <h1>Create your Profile</h1>
		  <div>
		  	{ 
		  		imageUploaded && image.data ? 
		  			<>
		  			<p>Image Uploaded!</p>
		  			<img src={url + image.data.uploadProfileImage.location} style={myImageStyle} alt="profile" />
		  			</>
		  		:
				<>
					<img src={placeholder.name} style={myImageStyle} alt="default avatar" />
					<p>use our placeholder image or upload your own profile picture</p>
		  			<input type="file" accept="image/*" onChange={handleUpload} />
		  		</>

		  	}
		  </div>
	      <form onSubmit={formik.handleSubmit}>
	        <TextField
	          fullWidth
	          id="firstName"
	          name="firstName"
	          label="First Name"
	          value={formik.values.firstName}
	          onChange={formik.handleChange}
	          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
	          helperText={formik.touched.firstName && formik.errors.firstName}
	        />
	        <TextField
	          fullWidth
	          id="lastName"
	          name="lastName"
	          label="Last Name"
	          value={formik.values.lastName}
	          onChange={formik.handleChange}
	          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
	          helperText={formik.touched.lastName && formik.errors.lastName}
	        />
	        <TextField
	          fullWidth
	          id="license"
	          name="license"
	          label="Driver's License Number"
	          value={formik.values.license}
	          onChange={formik.handleChange}
	          error={formik.touched.license && Boolean(formik.errors.license)}
	          helperText={formik.touched.license && formik.errors.license}
	        />
	        <FormControlLabel
	        	control={
	        		<Switch
			          name="renting"
			          checked={information.renting}
			          value={formik.values.renting}
			          onChange={handleSwitch}
	       			/>
	        	}
	        	label="Will you be renting out your car?"
	        />
	        <Typography display="inline">{information.renting ? "yes" : "no"}</Typography>
	        <Button color="primary" variant="contained" fullWidth type="submit">
	          Save Profile
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

export default Profile