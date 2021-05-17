import React, { useState, Fragment } from "react";
import schema from "../validations/AuthSchema";
import { useFormik } from 'formik';
import { } from "../graphql"
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/core/Close";
import { useHistory } from "react-router-dom";


const url = 'http://localhost:4000/login';

const Login = () => {

	const [open, setOpen] = useState(false);

	const history = useHistory();

	const formik = useFormik({
		initilValues: {
			email: '',
			password: ''
		},
		validationSchema: schema,
		onSubmit: (values) => {
			const options = {
				method: 'post',
				credentials: 'include',
				headers: {
					'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
				},
				body: `email=${values.email}&password=${values.password}`
			}

			fetch(url, options)
			.then(response => {
				return response.json()
			})
			.then(data => {
				if (data.success) {
					document.cookie = 'signedin=true;sameSite=String;secure=true;maxAge=18000;'
				}
				history.push("/profile")
			})
			.catch(err => {
				setOpen(true)
			})
		}
	})

	return (
		<div>
		  <h1>Login</h1>
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
	      	message="Wrong Email or Password"
	      	action={
	      		<Fragment>
	      			<IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
	      				<CloseIcon fontSize="small" />
	      			</IconButton>
	      		</Fragment>
	      	}
	      />
	    </div>
	)
}