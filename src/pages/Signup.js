import React, { useState, useContext } from "react";
import AuthForm from "../components/AuthForm";
import schema from "../validations/AuthSchema";

import { AuthContext } from "../context/AuthContext";

import { useFormik } from 'formik';
import { useHistory, Link } from "react-router-dom";

const url = 'http://localhost:4000/signup';

const Signup = () => {

	const { accountLoggedIn } = useContext(AuthContext)

	const history = useHistory();

	const [open, setOpen] = useState(false)

	const handleClose = () => {
		setOpen(false)
	}


	const formik = useFormik({
		initialValues: {
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
						accountLoggedIn()
						history.push("/create/profile")
					} else {
						setOpen(true)
					}
				})
				.catch(err => {
					console.log(err)
				})
		}
	})

	return (
		<>
		<AuthForm formik={formik} title="Sign up" open={open} handleClose={handleClose} />
		<p className="mx-8 mb-12 lg:ml-48">Already have an account <Link className="text-blue-600" to="/login">Sign in</Link>!</p>
		</>
	)
}

export default Signup;