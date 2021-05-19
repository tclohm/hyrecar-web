import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import schema from "../validations/AuthSchema";
import { useFormik } from 'formik';
import { useHistory } from "react-router-dom";

const url = 'http://localhost:4000/signup';

const Signup = () => {

	const { accountCreated } = useContext(AuthContext);

	const history = useHistory();

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
					accountCreated()
					history.push("/profile-creation")
				}
			})
			.catch(err => {
				console.log(err)
			})
		}
	})

	return (
		<AuthForm formik={formik} title="Sign up" />
	)
}

export default Signup;