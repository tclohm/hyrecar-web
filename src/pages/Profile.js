import React, { useState, Fragment } from "react";
import Dropzone from "../components/Dropzone";
import schema from "../validations/AuthSchema";
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

const Profile = () => {

	// userId
	const [renting, setRenting] = useState(true)

	const handleSwitch = () => {
		setRenting(!renting)
	}

	const history = useHistory();
	const [open, setOpen] = useState(false)

	const handleClose = () => {
		setOpen(false)
	}

	const formik = useFormik({
		initialValues: {
			avatar: '',
			license: '',
			firstName: '',
			lastName: '',
			renting: renting,
		},
		validationSchema: schema,
		onSubmit: (values) => {
			renting ? history.push('/manage') : history.push('/')
		}
	})


	return (
		<Container>
		  <h1>Create your Profile</h1>
		  <div>
		  	<Dropzone profile={true} />
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
			          checked={renting}
			          value={formik.values.renting}
			          onChange={handleSwitch}
	       			/>
	        	}
	        	label="Will you be renting out your car?"
	        />
	        <Typography display="inline">{renting ? "yes" : "no"}</Typography>
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