import * as yup from "yup";

export const schema = yup.object().shape({
	make: yup.string('The car\'s maker').min(1, 'Must be more than 1 character').max(30, 'Must be less than 30 characters').required('The make of the car is required'),
	model: yup.string('The car model').min(1, 'Must be more than 1 character').max(50, 'Must less than 50 characters').required('The model of the car is required'),
	vin: yup.string('Enter your car\'s vin number for proof of ownership').min(2, 'Vin must be more than 2 characters').max(30, 'Vin must be less than 30 characters').required('The vin number is required'),
	ratePerDay: yup.number('Enter the rate per day to rent the car').required('Rate per day is required').positive().integer(),
	maxMilesPerDay: yup.number('Enter the max amount of miles that can be driven per day').required('Max miles per day is required').positive().integer(),
	year: yup.number().required().positive().integer().min(1950).max(2021),
	airConditioning: yup.boolean()
})

export const make = yup.object().shape({
	make: yup.string('The car\'s maker').min(1, 'Must be more than 1 character').max(30, 'Must be less than 30 characters').required('The make of the car is required')
})

export const model = yup.object().shape({
	model: yup.string('The car model').min(1, 'Must be more than 1 character').max(50, 'Must less than 50 characters').required('The model of the car is required')
})

export const year = yup.object().shape({
	year: yup.number().required().positive().integer().min(1950).max(2021)
})

export const vin = yup.object().shape({
	vin: yup.string('Enter your car\'s vin number for proof of ownership').min(2, 'Vin must be more than 2 characters').max(30, 'Vin must be less than 30 characters').required('The vin number is required')
})

export const ratePerDay = yup.object().shape({
	ratePerDay: yup.number('Enter the rate per day to rent the car').required('Rate per day is required').positive().integer()
})

export const maxMilesPerDay = yup.object().shape({
	maxMilesPerDay: yup.number('Enter the max amount of miles that can be driven per day').required('Max miles per day is required').positive().integer()
})

export const airConditioning = yup.object().shape({
	airCondition: yup.boolean()
})
