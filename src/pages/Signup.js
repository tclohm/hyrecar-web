import React, { useState } from "react";
import AuthForm from "../components/AuthForm";
import schema from "../validations/AuthSchema";
import { useFormik } from 'formik';
import { useHistory, Link } from "react-router-dom";

//const url = 'http://localhost:4000/signup';

const Signup = () => {

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
			history.push('/create/profile')
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