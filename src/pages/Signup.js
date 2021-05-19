import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import schema from "../validations/AuthSchema";
import { useFormik } from 'formik';
import { useHistory } from "react-router-dom";

const url = 'http://localhost:4000/signup';

const Signup = () => {

	const history = useHistory();

	const { accountCreated } = useContext(AuthContext);

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
				console.log("hello")
				return response.json()
			})
			.then(data => {
				if (data.success) {
					accountCreated()
					history.push("/profile-creation")
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
		<AuthForm formik={formik} title="Sign up" open={open} handleClose={handleClose} />
	)
}

export default Signup;