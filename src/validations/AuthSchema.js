import * as yup from "yup";

const schema = yup.object().shape({
	email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
	password: yup.string('Enter your password')
		.min(2, 'Password must be more than 2 characters')
		.max(255, 'Password must not be more than 255 characters')
		.required('Password is required')
})

export default schema;