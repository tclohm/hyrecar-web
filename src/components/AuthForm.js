import React, { Fragment } from "react";
import Container from "@material-ui/core/Container";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';

const AuthForm = ({ formik, title, open, handleClose }) => {

	return (
	<Container>
		  <h1>{title}</h1>
	      <form onSubmit={formik.handleSubmit}>
	        <TextField
	          fullWidth
	          id="email"
	          name="email"
	          label="Email"
	          value={formik.values.email}
	          onChange={formik.handleChange}
	          error={formik.touched.email && Boolean(formik.errors.email)}
	          helperText={formik.touched.email && formik.errors.email}
	        />
	        <TextField
	          fullWidth
	          id="password"
	          name="password"
	          label="Password"
	          type="password"
	          value={formik.values.password}
	          onChange={formik.handleChange}
	          error={formik.touched.password && Boolean(formik.errors.password)}
	          helperText={formik.touched.password && formik.errors.password}
	        />
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

export default AuthForm;