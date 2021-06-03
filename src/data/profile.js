import { schema, firstName, lastName, license } from "../validations/ProfileSchema";

const info = [
	{ 
		id: 0, 
		className: "md:w-1/2 md:bg-green-200 md:flex md:items-center md:justify-center md:mb-0 mb-44 md:text-2xl", 
		progress: "absolute h-1 top-0 appearance-none",
		name: "firstName", 
		question: "What's your first name?", 
		schema: firstName 
	},
	{ 
		id: 30, 
		className: "md:w-1/2 md:bg-blue-200 md:flex md:items-center md:justify-center md:mb-0 mb-44 md:text-2xl", 
		progress: "absolute h-1 top-0 appearance-none bg-green-200 animate-progress-1 w-1/4",
		name: "lastName", 
		question: "What's your last name?", 
		schema: lastName 
	},
	{ 
		id: 60, 
		className: "md:w-1/2 md:bg-yellow-200 md:flex md:items-center md:justify-center md:mb-0 mb-44 md:text-xl", 
		progress: "absolute h-1 top-0 appearance-none bg-green-200 animate-progress-2 w-2/4",
		name: "license", 
		question: "What's your Driver's License number?", 
		schema: license 
	},
	{ 
		id: 90, 
		className: "md:w-1/2 md:bg-indigo-200 md:flex md:items-center md:justify-center md:mb-0 mb-44 md:text-2xl", 
		progress: "absolute h-1 top-0 appearance-none bg-green-200 animate-progress-3 w-11/12",
		name: "photo", 
		question: "Add a Profile Photo", 
		schema: null 
	}
]

export default info