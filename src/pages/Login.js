import React, { useState } from "react";
import AuthForm from "../components/AuthForm";
import schema from "../validations/AuthSchema";
import { useFormik } from 'formik';
import { useHistory, Link } from "react-router-dom";




//const url = 'http://localhost:4000/login';

const Login = () => {

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
			console.log(values)
			history.push('/')
		}
	})

	return (
		<>
			<AuthForm formik={formik} title="Sign in" open={open} handleClose={handleClose} />
			<p className="mx-8 mb-12 lg:ml-48">Create your account <Link className="text-blue-600" to="/signup">Sign up</Link>!</p>
		</>
	)
}

export default Login;