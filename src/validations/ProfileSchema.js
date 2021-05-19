import * as yup from "yup";

const schema = yup.object().shape({
	license: yup.string('Enter your license').min(9, 'Must be more than 9').max(11, 'Must be less than 11').required('License is required'),
	firstName: yup.string('Enter your first name').min(2, 'First name must be more than 2 characters').max(255, 'First name must not be more than 255 characters').required('First name is required'),
	lastName: yup.string('Enter your last name').min(2, 'Last name must be more than 2 characters').max(255, 'Last name must not be more than 255 characters').required('Last name is required')
})

export default schema;