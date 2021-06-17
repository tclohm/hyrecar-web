import * as yup from "yup";

export const email = yup.object().shape({
	email: yup.string('Enter your new email').email('Enter a valid email').required('Email is required')
})

export const password = yup.object().shape({
	password: yup.string('Enter your new password')
		.min(2, 'Password must be more than 2 characters')
		.max(255, 'Password must not be more than 255 characters')
		.required('Password is required')
})